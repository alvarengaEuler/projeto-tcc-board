// import * as functions from "firebase-functions";
// import * as express from "express";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// const app = express();
// app.get("/", (req, res) => res.status(200).send("Hey there!"));
// exports.app = functions.https.onRequest(app);


import * as functions from "firebase-functions";
import * as express from "express";
import {
  addEntry,
  getAllEntries,
  updateEntry,
  deleteEntry,
} from "./entryController";

const app = express();

app.get("/", (req, res) => res.status(200).send("Hey there!"));
app.post("/entries", addEntry);
app.get("/entries", getAllEntries);
app.patch("/entries/:entryId", updateEntry);
app.delete("/entries/:entryId", deleteEntry);

exports.app = functions.https.onRequest(app);
