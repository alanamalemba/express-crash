import express from "express";
import path from "path";
import postsRouter from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import handleNotFound from "./middleware/notFound.js";

const PORT = process.env.PORT;
const __dirname = import.meta.dirname; // get the directory name

const app = express();

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//logger middleware
app.use(logger);

//set up static folder
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

//Routes
app.use("/api/posts", postsRouter);
app.use(handleNotFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
