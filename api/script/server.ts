// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const fs = require("fs");

let envStr = "";
Object.keys(process.env).forEach((key) => {
	envStr += `${key}=${process.env[key]}\n`;
});

console.log(`v19`);
console.log(`process env`, envStr);
console.log("Prod secret?", process.env.JESSE_PROD);

fs.writeFileSync("env.txt", envStr);
// import "dotenv/config";

import * as express from "express";
import * as defaultServer from "./default-server";

const https = require("https");


defaultServer.start(function (err: Error, app: express.Express) {
  if (err) {
    throw err;
  }

  const httpsEnabled: boolean = Boolean(process.env.HTTPS) || false;
  const defaultPort: number = httpsEnabled ? 8443 : 3000;

  const port: number = Number(process.env.API_PORT) || Number(process.env.PORT) || defaultPort;
  let server: any;

  if (httpsEnabled) {
    const options = {
      key: fs.readFileSync("./certs/cert.key", "utf8"),
      cert: fs.readFileSync("./certs/cert.crt", "utf8"),
    };

    server = https.createServer(options, app).listen(port, function () {
      console.log("API host listening at https://localhost:" + port);
    });
  } else {
    server = app.listen(port, function () {
      console.log("API host listening at http://localhost:" + port);
    });
  }

  server.setTimeout(0);
});
