import { Router } from "express";

const authRouter = Router();

authRouter.get("/login", (req, res) => {
  res.send("Login Page");
});

authRouter.get("/logout", (req, res) => {
  res.send("Logout Page");
});

authRouter.get("/register", (req, res) => {
  res.send("Register Page");
});

export default authRouter;
