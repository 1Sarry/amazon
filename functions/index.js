/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NpAh5ISr9Uv34T9F9WP4rlSXf533Piy7Nh4JrHNnqvGHHCqDvesnwPp2PkjXPCO90oMzJjCEsoRlfSiDW6mCHeB00wWP7NuC3"
);
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received for this Amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

//http://127.0.0.1:5001/clone-e4159/us-central1/api
//http://127.0.0.1:4000/functions
