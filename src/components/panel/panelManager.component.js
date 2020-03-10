import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  useRef
} from 'react';

import './panel.styles.scss';

const TriggersState = createContext();
const Elements = createContext();

/**
 * REF
 */

const Store = fn => {
  const ref = useRef();

  if (!ref.current) ref.current = { v: fn() };

  return ref.current.v;
};

/**
 * WRAPPER
 */

export const Wrapper = ({ state: outerState, children, active = 0 }) => {
  const innerState = useState(active);
  const elements = Store(() => ({ triggers: 0, panels: 0 }));
  const state = outerState || innerState;

  return (
    <Elements.Provider value={elements}>
      <TriggersState.Provider value={state}>{children}</TriggersState.Provider>
    </Elements.Provider>
  );
};

/**
 * TRIGGER
 */

export const Trigger = ({ children, className = 'default' }) => {
  const { isActive, onClick } = useTriggerState();

  return (
    <div
      className={`${className} ${isActive ? 'isActive' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const useTriggerState = () => {
  const [activeIndex, setActive] = useContext(TriggersState);
  const elements = useContext(Elements);

  const triggerIndex = Store(() => {
    const currentIndex = elements.triggers;
    elements.triggers += 1;

    return currentIndex;
  });

  const onClick = Store(() => () => setActive(triggerIndex));

  const state = useMemo(
    () => ({
      isActive: activeIndex === triggerIndex,
      onClick,
      current: activeIndex
    }),
    [activeIndex, onClick, triggerIndex]
  );

  return state;
};

export const Transform = () => {
  const { current } = useTriggerState();

  const slideTransform = {
    transform: `translateX(${current * 100}%)`
  };

  return <div className="pill-slider" style={slideTransform} />;
};

/**
 * PANEL
 */

export const Panel = ({ active, children, className = 'panel', noWrap }) => {
  const isActive = usePanelState();
  const wrap = <div className={className}>{children}</div>;

  return isActive || active ? (noWrap ? children : wrap) : null;
};

export const usePanelState = () => {
  const [activeIndex] = useContext(TriggersState);
  const elements = useContext(Elements);

  const panelIndex = Store(() => {
    const currentIndex = elements.panels;
    elements.panels += 1;

    return currentIndex;
  });

  return panelIndex === activeIndex;
};
