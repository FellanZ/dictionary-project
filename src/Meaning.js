import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  const meaning = props.meaning;
  console.log("Meaning:", meaning);

  if (!meaning || !meaning.definition) {
    return null;
  }

  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      <p>
        <strong>Definition:</strong> {meaning.definition}
        <br />
        {meaning.example && (
          <>
            <strong>Example:</strong> <em>{meaning.example}</em>
            <br />
          </>
        )}
      </p>
      <Synonyms synonyms={meaning.synonyms} />
    </div>
  );
}
