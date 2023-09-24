import { getDestination } from "../controllers/destination-controller.js";
import express from "express";

const destinationRouter = express.Router();


destinationRouter.get("/get-destinations", getDestination);


export default destinationRouter;