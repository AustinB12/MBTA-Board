import React, { useEffect, useState } from "react";
import LoadingSubway from "../loading-subway/loadingSubway";
import { numberToDayString, formatTime, getTimeClasses } from "./board-helpers";
import "./board.css";

const Board = (props) => {
  const [clockState, setClockState] = useState();
  const [today, setToday] = useState("");
  const [localTime, setLocalTime] = useState("");
  const [boardIsLoading, setBoardIsLoading] = useState(false);
  const [boardData, setBoardData] = useState({});
  const [dataFilter, setdataFilter] = useState("");

  const url = "https://api-v3.mbta.com";

  useEffect(() => {
    setBoardIsLoading(true);

    const getUrl = () => {
      let builder = url + "/predictions?";

      let filters = "filter[stop]=place-north&filter[route_type]=2&";

      let includes = "include=stop,trip,schedule,route";

      let sort = dataFilter ? "sort=" + dataFilter + "&" : "";
      return builder + filters + sort + includes;
    };

    async function getBoardData() {
      let mbtaUrl = getUrl();

      await fetch(mbtaUrl)
        .then((response) => response.json())
        .then((data) => setBoardData(data))
        .catch((error) => console.log(error));

      setTimeout(() => {
        setBoardIsLoading(false);
      }, 300);
    }
    getBoardData();
  }, [props.getData, dataFilter]);

  setInterval(() => {
    const date = new Date();
    setToday(numberToDayString(date.getDay()));

    let newDate = date.toLocaleDateString().replace("/", "-");
    setClockState(newDate.replace("/", "-"));

    setLocalTime(formatTime(date.getHours(), date.getMinutes()));
  }, 1000);

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
        {!boardIsLoading ? (
          <div className="board-main-content">
            <table className="board-table">
              <tbody>
                <tr className="table-header">
                  <th>CARRIER</th>
                  <th
                    className={getTimeClasses("departure_time", dataFilter)}
                    onClick={() => {
                      if (dataFilter === "") {
                        setdataFilter("departure_time");
                      } else if (
                        dataFilter.length > 0 &&
                        !dataFilter.startsWith("-")
                      ) {
                        setdataFilter("-departure_time");
                      } else {
                        setdataFilter("departure_time");
                      }
                    }}
                  >
                    TIME
                  </th>
                  <th>DESTINATION</th>
                  <th>TRAIN#</th>
                  <th>TRACK#</th>
                  <th
                    className={getTimeClasses("status", dataFilter)}
                    onClick={() => {
                      if (dataFilter === "") {
                        setdataFilter("status");
                      } else if (
                        dataFilter.length > 0 &&
                        !dataFilter.startsWith("-")
                      ) {
                        setdataFilter("-status");
                      } else {
                        setdataFilter("status");
                      }
                    }}
                  >
                    STATUS
                  </th>
                </tr>
                {boardData && boardData.data ? (
                  boardData.data.map((lineData) => {
                    return (
                      <tr>
                        <td>MBTA</td>
                        <td>
                          {lineData.attributes.departure_time
                            ? formatTime(
                                lineData.attributes.departure_time?.substring(
                                  11,
                                  13
                                ),
                                lineData.attributes.departure_time?.substring(
                                  14,
                                  16
                                )
                              )
                            : "--:--"}
                        </td>
                        <td>
                          {lineData.relationships.route.data?.id || "Null"}
                        </td>
                        <td>
                          {lineData.relationships.trip.data?.id.split("-")[2] ||
                            "Null"}
                        </td>
                        <td>
                          {lineData.attributes.platform_code
                            ? lineData.attributes.platform_code
                            : "TBD"}
                        </td>
                        <td
                          className={
                            lineData?.attributes?.status?.toUpperCase() ===
                            "ON TIME"
                              ? "status-td-good"
                              : "status-td-bad"
                          }
                        >
                          {lineData.attributes.status || "--"}
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
