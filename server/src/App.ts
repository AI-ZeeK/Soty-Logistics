import express from "express";
import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import dataRoutes from "./routes/dataRoutes.js";
import connectDB from "./config/db.js";
const app = express();

const color = colors;
dotenv.config();
connectDB();
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded());
app.use(cors());

const PORT = process.env.port || 5050;

app.use("/app", dataRoutes);

app.listen(PORT, () =>
	console.log(
		`Server running on http://localhost:${PORT}....`.magenta.underline
	)
);
console.log(1, 2, 3);
