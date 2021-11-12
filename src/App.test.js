// import { render, screen } from "@testing-library/react";
import {
  numberToDayString,
  formatTime,
  getTimeClasses,
} from "./comps/board/board-helpers";

//! Number to Day Tests

test("numberToDayString - testing 1", () => {
  const value = numberToDayString(1);
  expect(value).toBe("Monday");
});

test("numberToDayString - testing 2", () => {
  const value = numberToDayString(2);
  expect(value).toBe("Tuesday");
});

test("numberToDayString - testing 3", () => {
  const value = numberToDayString(3);
  expect(value).toBe("Wednesday");
});

test("numberToDayString - testing 4", () => {
  const value = numberToDayString(4);
  expect(value).toBe("Thursday");
});

test("numberToDayString - testing 5", () => {
  const value = numberToDayString(5);
  expect(value).toBe("Friday");
});

test("numberToDayString - testing 6", () => {
  const value = numberToDayString(6);
  expect(value).toBe("Saturday");
});

test("numberToDayString - testing 7", () => {
  const value = numberToDayString(7);
  expect(value).toBe("Sunday");
});

test("numberToDayString - testing < 0", () => {
  const value = numberToDayString(-50);
  expect(value).toBe("Sunday");
});

test("numberToDayString - testing  > 6", () => {
  const value = numberToDayString(1234);
  expect(value).toBe("Sunday");
});

//! Time Formatting Tests

test("formatTime - 00, 30", () => {
  const value = formatTime("00", "30");
  expect(value).toBe("12:30 AM");
});

test("formatTime - 12, 00", () => {
  const value = formatTime("12", "00");
  console.log(value);
  expect(value).toBe("12:00 PM");
});

test("formatTime - 18, 59", () => {
  const value = formatTime(18, "59");
  console.log(value);
  expect(value).toBe("06:59 PM");
});

//! Get Time CSS Class Tests

test('getTimeClasses - departure_time, ""', () => {
  const value = getTimeClasses("departure_time", "");
  console.log(value);
  expect(value).toBe("sortable-th up");
});

test('getTimeClasses - departure_time, "departure_time"', () => {
  const value = getTimeClasses("departure_time", "departure_time");
  console.log(value);
  expect(value).toBe("sortable-th up");
});

test('getTimeClasses - departure_time, "-departure_time"', () => {
  const value = getTimeClasses("departure_time", "-departure_time");
  console.log(value);
  expect(value).toBe("sortable-th down");
});

test('getTimeClasses - status, ""', () => {
  const value = getTimeClasses("status", "");
  console.log(value);
  expect(value).toBe("sortable-th up");
});

test('getTimeClasses - status, "status"', () => {
  const value = getTimeClasses("status", "status");
  console.log(value);
  expect(value).toBe("sortable-th up");
});

test('getTimeClasses - status, "-status"', () => {
  const value = getTimeClasses("status", "-status");
  console.log(value);
  expect(value).toBe("sortable-th down");
});
