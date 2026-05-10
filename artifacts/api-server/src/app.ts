import express, { type Express } from "express";
import cors from "cors";
import * as pinoHttpModule from "pino-http";
import type { IncomingMessage, ServerResponse } from "node:http";
import router from "./routes";
import { logger } from "./lib/logger";

// Handle CJS/ESM interop: pino-http may export the factory as .default
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pinoHttp: typeof pinoHttpModule.default = (pinoHttpModule as any).default ?? pinoHttpModule;

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req: IncomingMessage & { id?: string | number }) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: ServerResponse) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
