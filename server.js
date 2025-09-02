const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const http = require("http");
const { Server } = require("socket.io");
const fileupload = require("express-fileupload");
const fs = require("fs");
require("dotenv").config();
const { Op } = require("sequelize");

const db = require("./models");

// -------------------------------------- App config -------------------------------------//
const PORT = process.env.APP_PORT || 5000;
const app = express();
const server = http.createServer(app);

// ------------------------------------- Socket init ------------------------------------ //
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("message", async (name) => {
    console.log("Message received:", name);

    const nameFilter =
      name && name.length > 0 ? { name: { [Op.iLike]: `%${name}%` } } : null;

    const whereFilter = {
      [Op.and]: [nameFilter].filter(Boolean),
    };

    try {
      const data = await db.Word.findAll({
        where: whereFilter,
        order: [["createdAt", "DESC"]],
      });

      console.log("data", data);
      io.emit("message", data);
    } catch (error) {
      console.error("DB error:", error);
      socket.emit("error", { message: "Database query failed" });
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// ------------------------------------- Middlewares ------------------------------------ //
app.use(
  cors({
    origin: "*", //need to add ip of frontent in production mode
  })
);
app.use(fileupload());
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Content-Type", "application/json");
  res.header("Accept", "*/*");

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, PUT");
    return res.status(200).json({});
  }

  next();
});

// ---------------------------------------------------------- Routes -------------------------------------------------- //
const Routers = require("./router/routes");
app.use("/api/", Routers);

// ------------------------------------------------------- Error handling ----------------------------------------------//
app.use((req, res, next) => {
  return res.status(404).json({
    success: 0,
    message: "This Route doesn't exist!",
  });
});

// ---------------------------------------------------- Creating folder ------------------------------------------------//
const createFolder = (path) => {
  try {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
  } catch (err) {
    console.log(err);
  }
};

createFolder("uploads");

// ------------------------------------------------------ Listening server ---------------------------------------------//
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
