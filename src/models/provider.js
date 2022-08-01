import { Schema } from "mongoose";

const ProviderSchema = new Schema(
  {
    name: String
  },
  {
    timestamps: true
  }
)

export const Provider = model('Provider', ProviderSchema)