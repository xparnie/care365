import React, { useContext } from 'react';

import assessmentContext from '../../assessmentStore';

import { Container, Item } from './picker.styles';

import Tile from '../tile/tile.component';

const Picker = ({ question }) => {
  const { assessmentDispatch } = useContext(assessmentContext);
  const { answers, completed, options, id, selectedTiles } = question;

  const onItemClickHandler = (benefit, features, guid, id, text) => {
    if (completed && selectedTiles[id] === 0) return null;

    setActiveTileHandler(id);
    selectedPickerItemsHandler({
      benefit,
      features,
      guid,
      id,
      text
    });
  };

  const setActiveTileHandler = id => {
    let array = selectedTiles.slice();

    array[id] === 0 ? (array[id] = 1) : (array[id] = 0);

    return dispatchHandler('SET_ASSESSMENT_ACTIVE_TILE', array);
  };

  const finalArrayBuilderHandler = option => {
    let array = answers.slice();

    // .some returns bool
    const filterBoolean = array.some(e => e.text === option.text);
    const index = array.findIndex(e => e.text === option.text);

    filterBoolean ? array.splice(index, 1) : array.push(option);

    return array;
  };

  const calculateTotalBenefitHandler = array => {
    return array
      .map(e => e.benefit)
      .reduce(
        (totalBenefit, currentBenefit) => totalBenefit + currentBenefit,
        0
      );
  };

  const selectedPickerItemsHandler = answers => {
    const filteredArray = finalArrayBuilderHandler(answers);
    const benefits = calculateTotalBenefitHandler(filteredArray);

    if (filteredArray.length <= 3) {
      dispatchHandler('SET_ASSESSMENT_ANSWERS', filteredArray);
      dispatchHandler('SET_ASSESSMENT_ANSWERS_BENEFIT', benefits);
    }

    filteredArray.length === 3
      ? dispatchHandler('SET_ASSESSMENT_QUESTION_COMPLETED', true)
      : dispatchHandler('SET_ASSESSMENT_QUESTION_COMPLETED', false);
  };

  const dispatchHandler = (type, data) => {
    assessmentDispatch({ type, payload: { data, id } });
  };

  return (
    <Container>
      {options.map(({ benefit, features, guid, icon, id, text }) => (
        <Item
          key={text}
          onClick={() => onItemClickHandler(benefit, features, guid, id, text)}
        >
          <Tile key={id} flipped={selectedTiles[id]} text={text} icon={icon} />
        </Item>
      ))}
    </Container>
  );
};

export default Picker;
