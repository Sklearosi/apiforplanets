import { Request, Response } from "express";
import CrewMembers from "../models/Crew.js";


export const getCrewMember = async (req: Request, res: Response) => {
    try {
        const crew = await CrewMembers.find();

        if (!crew || crew.length === 0) {
            return res.status(404).json({ message: "No crew found" });
          };


          res.status(200).json(crew);
      
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};