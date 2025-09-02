import React from "react";

export default function Phonetic(props) {
  const phonetic = props.phonetic;

  if (!phonetic) return null;

  return (
    <div className="Phonetic">
      {phonetic.text && <span> {phonetic.text}</span>}
    </div>
  );
}
