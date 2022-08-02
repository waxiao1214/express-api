import { Provider } from '../models/provider'

export const getAllProviders = async () => {
  const providers = await Provider.find();
  return providers;
}

export const getProviderById = async (id) => {
  const provider = await Provider.findById(id);
  return provider;
}

export const createProvider = async (data) => {
  const provider = await Provider.create(data)
  return provider;
}

export const updateProvider = async (id, data) => {
  const provider = await Provider.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return provider;
};

export const deleteProvider = async (id) => {
  const provider = await Provider.findByIdAndRemove({ _id: id });
  // await Client.updateMany({}, { $pull: { providers: provider._id } });
  return provider;
};
