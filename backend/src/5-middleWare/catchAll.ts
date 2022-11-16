import { Request, Response, NextFunction, json } from "express";
import errorModel from "../1-Models/error-models";

const catchAll = (
  err: errorModel,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (err instanceof Error) {
    response
      .status(err.status || 500)
      .json({ status: err.status || 500, msg: err.message });
    return;
  }
  if (err instanceof errorModel) {
    response.status(err.status).json({ status: err.status, msg: err.message });
    return;
  }
  next();
};

export default catchAll;
