import moment from "moment";

/* Data */
import { rusMonths, engMonths } from "./data";

export const validateDay = (value: string) => {
  if (value[0] === "0") {
    return value[1];
  }
  return value;
};

export const convertTime = (value: string[]) => {
  return value.map(item => {
    const durationTime = moment.duration(Number(item));
    if (durationTime.hours() === 0) {
      return `${durationTime.minutes()} мин`;
    } else if (durationTime.minutes() === 0) {
      return `${durationTime.hours()}ч`;
    }
    return `${durationTime.hours()}ч ${durationTime.minutes()} мин`;
  });
};

export const convertDates = (value: number[]) => {
  return value.map(item => {
    let currentRusMonth;
    const currentEngMonth = moment.unix(item).format("MMM");
    const currentDay = validateDay(moment.unix(item).format("DD"));
    const currentYear = moment.unix(item).format("YYYY");
    engMonths.forEach((item, index) => {
      if (item === currentEngMonth) {
        currentRusMonth = rusMonths[index];
      }
    });
    return `${currentDay} ${currentRusMonth} ${currentYear}`;
  });
};

export const correctDeclension = (value: number, type: string) => {
  if (value % 10 === 1) {
    const ending = type === "scenario" ? "й" : "к";
    return ending;
  } else if (value % 10 === 2 || value % 10 === 3 || value % 10 === 4) {
    const ending = type === "scenario" ? "я" : "ка";
    return ending;
  } else {
    const ending = type === "scenario" ? "ев" : "ков";
    return ending;
  }
};
