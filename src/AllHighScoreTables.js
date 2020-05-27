import React from "react";
import HighScoreTable from "./HighScoreTable";
import AllCountryScores from "./AllCountryScores";

const AllHighScoreTables = () => {
    const allCountryScores = AllCountryScores
  return (
    <div >
      {allCountryScores.sort((a, b) => a.name.localeCompare(b.name)).map((country, index) => {
        return (
          <div key={index} >
            <HighScoreTable data={country} />
          </div>
        );
      })}
    </div>
  );
};

export default AllHighScoreTables;
