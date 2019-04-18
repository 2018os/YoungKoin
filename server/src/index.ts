import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from 'path';
const app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req: express.Request, res: express.Response) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("Running at 3000 port");
});
