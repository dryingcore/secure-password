import express, { Request, Response } from "express";
const app = express();

// Test route >>> output: "Hello World!"
export default app.get("/", (req: Request, res: Response) => {
	res.send("Hello World!");
});
