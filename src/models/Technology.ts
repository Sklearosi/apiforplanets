import mongoose from "mongoose";
import { TechnologyItem } from "types/destination";

const technologySchema = new mongoose.Schema<TechnologyItem>({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  images: {
    portrait: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    landscape: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
  },
  description: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

const Technology = mongoose.model("Technology", technologySchema);

export default Technology;