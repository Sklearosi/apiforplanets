import { Request, Response } from "express";
import Destination from "../models/Destination.js";

export const  getDestination = async (req: Request, res: Response) => {
    try {
        const destinations = await Destination.find();

        if (!destinations || destinations.length === 0) {
            return res.status(404).json({ message: "No destinations found" });
          };


          res.status(200).json(destinations);
      
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};