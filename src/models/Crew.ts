import mongoose from "mongoose";
import { CrewMember } from "types/destination";


const crewMemberSchema = new mongoose.Schema<CrewMember>({
  id: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  name: {
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
    },
  },
  role: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  bio: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

const CrewMembers = mongoose.model("CrewMembers", crewMemberSchema);

export default CrewMembers;