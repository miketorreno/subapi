import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send("GET all subscriptions");
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send(`GET subscription with ID: ${req.params.id}`);
});

subscriptionRouter.post("/", (req, res) => {
  res.send("Create a new subscription");
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send(`Update subscription with ID: ${req.params.id}`);
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send(`Delete subscription with ID: ${req.params.id}`);
});

subscriptionRouter.get("/user/:userId", (req, res) => {
  res.send(`GET subscriptions for user with ID: ${req.params.userId}`);
});

subscriptionRouter.put("/user/:userId/cancel", (req, res) => {
  res.send(`Cancel subscription for user with ID: ${req.params.userId}`);
});

subscriptionRouter.get("/upcoming", (req, res) => {
  res.send("GET upcoming subscription renewals");
});

subscriptionRouter.post("/user/:userId/renew", (req, res) => {
  res.send(`Renew subscription for user with ID: ${req.params.userId}`);
});

subscriptionRouter.get("/active", (req, res) => {
  res.send("GET active subscriptions");
});

subscriptionRouter.get("/expired", (req, res) => {
  res.send("GET expired subscriptions");
});

subscriptionRouter.get("/history", (req, res) => {
  res.send("GET subscription history");
});

export default subscriptionRouter;
