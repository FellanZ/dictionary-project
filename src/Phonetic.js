import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  const phonetic = props.phonetic;

  if (!phonetic || !phonetic.text) return null;

  return (
    <div className="Phonetic">
      <span className="text">{phonetic.text}</span>
    </div>
  );
}
