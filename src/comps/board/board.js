import React, { useEffect, useState } from "react";
import LoadingSubway from "../loading-subway/loadingSubway";

import "./board.css";

const Board = (props) => {
  const [clockState, setClockState] = useState();
  const [today, setToday] = useState("");
  const [localTime, setLocalTime] = useState("");
  const [boardIsLoading, setBoardIsLoading] = useState(false);
  const [boardData, setBoardData] = useState({});

  const url = "https://api-v3.mbta.com";

  useEffect(() => {
    setBoardIsLoading(true);
    async function getBoardData() {
      let mbtaUrl = getUrl();

      // console.log("mbtaUrl: ", mbtaUrl);
      const data = await fetch(mbtaUrl)
        .then((response) => response.json())
        .then((data) => setBoardData(data))
        .catch((error) => console.log(error));

      console.log(data);
      setTimeout(() => {
        setBoardIsLoading(false);
      }, 300);
    }
    getBoardData();
  }, [props.getData]);

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

    if (hours === 0) {
      hours = 12;
    }

    if (mins < 10) {
      mins = "0" + mins;
    }

    return `${hours.toString()}:${mins.toString()} ${amPm}`;
  };

  const getUrl = () => {
    return (
      url +
      "/predictions?filter[stop]=place-north&filter[route_type]=2&include=stop,trip,schedule"
    );
  };

  return (
    <div className="board-wrapper">
      <div className="the-board">
        <div className="board-header">
          <div className="board-header-left-side">
            <div>{today}</div>
            <div>{clockState}</div>
          </div>
          <div
            className="board-header-center"
            onClick={() => console.log(boardData)}
          >
            NORTH STATION INFORMATION
          </div>
          <div className="board-header-right-side">
            <div>CURRENT TIME</div>
            {localTime ? <div>{localTime}</div> : <div>Loading...</div>}
          </div>
        </div>
        {!boardIsLoading ? (
          <div className="board-main-content">
            <table className="board-table">
              <tbody>
                <tr className="table-header">
                  <th>CARRIER</th>
                  <th>TIME</th>
                  <th>DESTINATION</th>
                  <th>TRAIN#</th>
                  <th>TRACK#</th>
                  <th>STATUS</th>
                </tr>
                {boardData && boardData.data ? (
                  boardData.data.map((line) => {
                    return (
                      <tr>
                        <td>MBTA</td>
                        <td>{line.attributes.arrival_time || "Null"}</td>
                        <td>{line.relationships.route.data?.id || "Null"}</td>
                        <td>
                          {line.relationships.trip.data?.id.split("-")[2] ||
                            "Null"}
                        </td>
                        <td>TBD</td>
                        <td
                          className={
                            line.attributes.status.toUpperCase() === "ON TIME"
                              ? "status-td-good"
                              : "status-td-bad"
                          }
                        >
                          {line.attributes.status || "--"}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td>MBTA</td>
                    <td>11:11</td>
                    <td>NO DATA</td>
                    <td>0000</td>
                    <td>TBD</td>
                    <td>NO DATA</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <LoadingSubway></LoadingSubway>
        )}
      </div>
    </div>
  );
};
export default Board;
