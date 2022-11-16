import myConfig from "./6-utils/config";
import express, { Request, Response, NextFunction } from "express";
import errorModel from "./1-Models/error-models";
import catchAll from "./5-middleWare/catchAll";
import router from "./4-controller/donation-controller";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());
server.use("/", router);
server.use("*", (Request: Request, response: Response, next: NextFunction) => {
  next(new errorModel(404, "route not found!"));
});
server.use(catchAll);

server.listen(myConfig.port, () =>
  console.log("listening on port " + myConfig.port)
);
