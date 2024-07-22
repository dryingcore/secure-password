import express from "express";
import checkStrength from "./routes/checkStrength";
import testRoute from "./routes/test.route";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", checkStrength);
app.use("/test", testRoute);

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
