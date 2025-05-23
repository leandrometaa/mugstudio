import type { PostRequest } from '@/types/types.ts';
import axios from 'axios';

const ENDPOINT = 'http://localhost:3000';

export const getTypes = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get(`${ENDPOINT}/types`);

  return response.data;
};

export const getDimensions = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get(`${ENDPOINT}/dimensions`);

  return response.data;
};

export const getColors = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get(`${ENDPOINT}/colors`);

  return response.data;
};

export const getMaterials = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get(`${ENDPOINT}/materials`);

  return response.data;
};

export const getSizes = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get(`${ENDPOINT}/sizes`);

  return response.data;
};

export const createPurchase = async (data: PostRequest) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const request = await axios.post(`${ENDPOINT}/purchases`, data);

  return request.data;
};
