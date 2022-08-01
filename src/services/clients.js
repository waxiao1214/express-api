import { Schema } from "mongoose";
import { Client } from "../models/client";

export const getAllClients = async () => {
  const clients = await Client.find();
  return clients;
};