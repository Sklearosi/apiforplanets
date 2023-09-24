import mongoose from "mongoose";
import { DestinationType } from "types/destination";

const destinationSchema = new mongoose.Schema<DestinationType>({
    id: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    name : {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    images: {
        png: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        webp: {
            type: mongoose.Schema.Types.String,
            required: true,
        }
    },
    description : {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    distance : {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    travel : {
        type: mongoose.Schema.Types.String,
        required: true,
    },
});

const Destination = mongoose.model("Destination", destinationSchema);

export default Destination;