import type { PostOrder } from "@/types/types.ts";
import axios from "axios";

const ENDPOINT = "https://raw.githubusercontent.com/leandrometaa/mugstudio/refs/heads/main/vite-project/db/db.json";

export const getTypes = async () => {
  const response = await axios.get(ENDPOINT);
  return response.data.types;
};

export const getSized = async () => {
  const response = await axios.get(ENDPOINT);
  return response.data.sizes;
};

export const getColors = async () => {
  const response = await axios.get(ENDPOINT);
  return response.data.colors;
};

export const getMaterials = async () => {
  const response = await axios.get(ENDPOINT);
  return response.data.materials;
};

export const getSizes = async () => {
  const response = await axios.get(ENDPOINT);
  return response.data.sizes;
};

export const getTextures = async () => {
  const response = await axios.get(ENDPOINT);
  return response.data.textures;
};

export const createOrder = async (data: PostOrder) => {
  console.warn("createOrder function is disabled for static deploy.", data);
  return null;
};
