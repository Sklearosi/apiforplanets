import { getTechnology } from "../controllers/technology-controller.js";
import express from "express";

const techologyRouter = express.Router();


techologyRouter.get("/get-technology", getTechnology);


export default techologyRouter;