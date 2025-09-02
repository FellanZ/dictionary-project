import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  const results = props.results;

  if (!results) return null;

  return (
    <div className="Results">
      <section>
        <h2>{results.word}</h2>

        {results.phonetic && <Phonetic phonetic={{ text: results.phonetic }} />}
      </section>
      {Array.isArray(results.meanings) &&
        results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
    </div>
  );
}
