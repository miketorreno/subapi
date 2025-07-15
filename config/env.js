import { config } from "dotenv";

config({
  path: ".env",
});

export const { PORT, DB_URI, JWT_SECRET, JWT_EXPIRES_IN } = process.env;

if (!PORT || !DB_URI || !JWT_SECRET || !JWT_EXPIRES_IN) {
  throw new Error("Missing environment variables");
}
