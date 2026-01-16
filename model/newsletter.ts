import mongoose, { Schema, models } from "mongoose";

const NewsletterSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Newsletter =
  models.Newsletter || mongoose.model("Newsletter", NewsletterSchema);
