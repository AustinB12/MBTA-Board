export const numberToDayString = (dayNumber) => {
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

export const formatTime = (hours, mins) => {
  if (hours === undefined || mins === undefined) {
    return "--";
  }

  let amPm = "AM";

  if (hours >= 12) {
    amPm = "PM";
    hours = hours - 12;
  }
  if (hours === 0 || hours === "0" || hours === "00") {
    hours = 12;
  }
  if (
    (typeof mins === "number" && mins < 10) ||
    (typeof mins === "string" && parseInt(mins) < 10 && !mins.startsWith("0"))
  ) {
    mins = "0" + mins;
  }

  return `${
    hours.toString().length === 1 ? "0" + hours.toString() : hours.toString()
  }:${mins.toString()} ${amPm}`;
};

export const getTimeClasses = (sortingAttribute, dataFilter) => {
  let me = "sortable-th ";
  let result =
    dataFilter === "" ||
    (dataFilter.endsWith(sortingAttribute) && !dataFilter.startsWith("-")) ||
    !dataFilter.endsWith(sortingAttribute)
      ? "up"
      : "down";
  return me + result;
};
