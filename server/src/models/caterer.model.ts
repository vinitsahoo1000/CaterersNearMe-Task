import mongoose from "mongoose";

const catererSchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      pricePerPlate: {
        type: Number,
        required: true,
      },
      cuisines: {
        type: [String],
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Caterer",
  catererSchema
);