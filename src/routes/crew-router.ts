import { getCrewMember } from "../controllers/crew-controller.js";
import express from "express";

const crewRouter = express.Router();


crewRouter.get("/get-crew", getCrewMember);


export default crewRouter;