import { Schema } from "mongoose";
import { Client } from "../models/client";

export const getAllClients = async () => {
  const clients = await Client.find();
  return clients;
};

export const getClientById = async (id) => {
  const client = await Client.findById(id);
  return client;
}

export const createClient = async (data) => {
  const client = await Client.create(data);
  return client;
}

export const updateClient = async (id, data) => {
  const client = await Client.findOneAndUpdate({ _id: id }, body, { new: true });
  return client;
} 

export const deleteClient = async (id) => {
  const client = await Client.findByIdAndRemove({ _id: id});
  return client;
}
