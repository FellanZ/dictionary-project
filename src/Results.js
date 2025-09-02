import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  const results = props.results;

  if (!results) return null;

  return (
    <div className="Results">
      <h2>{results.word}</h2>

      {results.phonetic && <Phonetic phonetic={{ text: results.phonetic }} />}

      {Array.isArray(results.meanings) &&
        results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
    </div>
  );
}
