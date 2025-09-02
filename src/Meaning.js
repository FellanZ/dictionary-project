import React from "react";
import "./Meaning.css";
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
      <div className="definition">{meaning.definition}</div>
      <div className="example">{meaning.example && <>{meaning.example}</>}</div>
      <Synonyms synonyms={meaning.synonyms} />
    </div>
  );
}
