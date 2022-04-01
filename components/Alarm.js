import React from "react";

export default function Alarm() {
  return (
    <audio ref={ref}>
      <source src="/alarm.mp3" type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
}
