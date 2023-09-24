import { Request, Response } from "express";
import Technology from "../models/Technology.js";

export const  getTechnology = async (req: Request, res: Response) => {
    try {
        const technology = await Technology.find();

        if (!technology || technology.length === 0) {
            return res.status(404).json({ message: "No technology found" });
          };


          res.status(200).json(technology);
      
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};