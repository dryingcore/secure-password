import express from "express";
import { Request, Response } from "express";
import PasswordValidator from "../services/PasswordValidator";

const app = express();

export default app.post("/validate-password", (req: Request, res: Response) => {
	const { password } = req.body;
	const result = PasswordValidator.validate(password);

	if (result.valid) {
		res.status(204).send();
	} else {
		res.status(400).json({ errors: result.errors });
	}
});
