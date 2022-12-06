import * as admin from "firebase-admin";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const {privateKey} = JSON
    .parse(process.env.PRIVATE_KEY || "{ privateKey: null }");

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.PROJECT_ID,
    privateKey: privateKey.replace(/\\n/g, "\n"),
    clientEmail: process.env.CLIENT_EMAIL,
  }),
  databaseURL: process.env.DATABASE_URL,
});

const db = admin.firestore();
export {admin, db};

