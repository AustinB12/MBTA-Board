import React, { useEffect, useState } from "react";

import "./board.css";

const Board = () => {
  const [clockState, setClockState] = useState();
  const [today, setToday] = useState("");
  const [localTime, setLocalTime] = useState("");

  //? Constants
  const url = "https://api-v3.mbta.com";
  const routeType = 2; // 2=commuter rail
  const include = ["stop", "trip", "schedule"];
  const headers = ["Time", "Destination", "Train #", "Track #", "Status"];

  useEffect(() => {
    const date = new Date();
    setToday(numberToDayString(date.getDay()));

    let newDate = date.toLocaleDateString().replace("/", "-");
    setClockState(newDate.replace("/", "-"));
  }, []);

  useEffect(() => {
    const date = new Date();

    setInterval(() => {
      setLocalTime(formatTime(date.getHours(), date.getMinutes()));
    }, 1000);
  }, []);

  const numberToDayString = (dayNumber) => {
    switch (dayNumber) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Sunday";
      default:
        return "Sunday";
    }
  };

  const formatTime = (hours, mins) => {
    let amPm = "AM";
    if (hours > 12) {
      amPm = "PM";
      hours = hours - 12;
    }

    return `${hours.toString()}:${mins.toString()} ${amPm}`;
  };

  return (
    <div className="board-wrapper">
      <div className="the-board">
        <div className="board-header">
          <div className="board-header-left-side">
            <div>{today}</div>
            <div>{clockState}</div>
          </div>
          <div className="board-header-center">NORTH STATION INFORMATION</div>
          <div className="board-header-right-side">
            <div>CURRENT TIME</div>
            {localTime ? <div>{localTime}</div> : <div>Loading...</div>}
          </div>
        </div>
        <div className="board-main-content">Main Content</div>
      </div>
    </div>
  );
};
export default Board;
