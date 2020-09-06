import { Request, Response, NextFunction } from "express";

function getDateAndTimeAsString(): String {
  let currentDateTime: Date = new Date();
  let formattedDate: String =
    currentDateTime.getHours() +
    ":" +
    currentDateTime.getMinutes() +
    ":" +
    currentDateTime.getSeconds() +
    " " +
    currentDateTime.getDay() +
    "/" +
    (currentDateTime.getMonth() + 1) +
    "/" +
    currentDateTime.getFullYear();
  return formattedDate;
}

export function loggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let formattedDateTime: String = getDateAndTimeAsString();
  // const durationInMilliseconds = getActualRequestDurationInMilliseconds(start);
  let output = `${formattedDateTime}  ${req.method}:${req.url} ${res.statusCode}`;
  console.log(output);
  next();
}
