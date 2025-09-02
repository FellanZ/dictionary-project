import React from "react";

export default function Phonetic(props) {
  const phonetic = props.phonetic;

  if (!phonetic || !phonetic.text) return null;

  return (
    <div className="Phonetic">
      <span>{phonetic.text}</span>
    </div>
  );
}
