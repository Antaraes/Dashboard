import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import clientRoutes from "./routes/clientRoute.js";
import generalRoutes from "./routes/generalRoute.js";
import managementRoutes from "./routes/managementRoute.js";
import salesRoutes from "./routes/salesRoute.js";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

// data imports
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";

import { dataUser, dataProduct, dataProductStat } from "./data/data.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

const PORT = process.env.PORT || 4000;
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
    // Only add data one time
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
  })
  .catch((error) => console.log(`${error}`));
