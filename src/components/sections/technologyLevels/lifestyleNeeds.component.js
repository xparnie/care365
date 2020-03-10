import React from 'react';

import './techLevels.styles.scss';

const LifestyleNeeds = ({ questions }) => (
  <>
    <table className="techLevels">
      <thead>
        <tr>
          <td />
          <td />
          <th id="best" scope="col" className="techLevels-th">
            <span className="techLevels-th-text">Best</span>
          </th>
          <th id="better" scope="col" className="techLevels-th">
            <span className="techLevels-th-text techLevels-th-text_better">
              Better
            </span>
          </th>
          <th id="good" scope="col" className="techLevels-th">
            <span className="techLevels-th-text techLevels-th-text_good">
              Good
            </span>
          </th>
        </tr>
      </thead>
      {questions.map(({ id, question, answers }, index) => (
        <tbody key={id}>
          {index === 4 ? (
            <>
              {answers.map((item, index) => (
                <tr key={item.text}>
                  <>
                    {index === 0 ? (
                      <th
                        className="techLevels-section"
                        rowSpan="3"
                        scope="rowgroup"
                      >
                        {question}
                      </th>
                    ) : null}
                    <th scope="row">{item.text}</th>
                    <td>
                      <div className="techLevels-indicator techLevels-indicator_fill" />
                    </td>
                    <td>
                      <div className="techLevels-indicator techLevels-indicator_fill techLevels-indicator_1of2" />
                    </td>
                    <td>
                      <div className="techLevels-indicator techLevels-indicator_fill techLevels-indicator_3of4" />
                    </td>
                  </>
                </tr>
              ))}
            </>
          ) : (
            <>
              {answers.map((item, index) => (
                <tr key={item.text}>
                  <>
                    {index === 0 ? (
                      <th
                        className="techLevels-section"
                        rowSpan="3"
                        scope="rowgroup"
                      >
                        {question}
                      </th>
                    ) : null}
                    <th scope="row">{item.text}</th>
                    <td>
                      <span
                        className={`techLevels-indicator ${
                          item.features.techLevel >= 1
                            ? 'techLevels-indicator_fill'
                            : ''
                        }`}
                      />
                    </td>
                    <td>
                      <span
                        className={`techLevels-indicator ${
                          item.features.techLevel >= 2
                            ? 'techLevels-indicator_fill'
                            : ''
                        }`}
                      />
                    </td>
                    <td>
                      <span
                        className={`techLevels-indicator ${
                          item.features.techLevel >= 3
                            ? 'techLevels-indicator_fill'
                            : ''
                        }`}
                      />
                    </td>
                  </>
                </tr>
              ))}
            </>
          )}
        </tbody>
      ))}
    </table>
  </>
);

export default LifestyleNeeds;
