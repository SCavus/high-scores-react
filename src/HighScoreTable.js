import React from "react";
//import AllCountryScores from './AllCountryScores'

const HighScoreTable = (props) => (
  <div className="scores-container">
    <h3>HIGH SCORES: {props.data.name}</h3>
    <div className="scores">
      {props.data.scores.sort((a, b) => b.s - a.s).map((person, index) => {
        return (
          <div key={index} className="person-score-container">
            <div className='personal-score'>
              <span>{person.n.toUpperCase()} </span>
              <span className='score'> {person.s}</span>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  </div>
);

export default HighScoreTable;

// {
//     name: "England",
//     scores: [ {n: "Jonny", s: 202020}, {n: "Chris", s: 202021}]
//   },
