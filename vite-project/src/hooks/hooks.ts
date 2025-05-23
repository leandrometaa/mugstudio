import {
  getColors,
  getDimensions,
  getMaterials,
  getSizes,
  getTypes,
} from '@/api/api.ts';
import type { MugDimension, MugType } from '@/types/types.ts';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetTypes = () => {
  return useQuery({
    queryKey: ['types'],
    queryFn: async () => {
      const apiResponse = await getTypes();
      return apiResponse as MugType[];
    },
  });
};

export const useGetDimensions = () => {
  return useQuery({
    queryKey: ['dimensions'],
    queryFn: async () => {
      const apiResponse = await getDimensions();
      return apiResponse as MugDimension[];
    },
  });
};

export const useGetColors = () => {
  return useQuery({
    queryKey: ['colors'],
    queryFn: async () => getColors(),
  });
};

export const useGetMaterials = () => {
  return useQuery({
    queryKey: ['materials'],
    queryFn: async () => getMaterials(),
  });
};

export const useGetSizes = () => {
  return useQuery({
    queryKey: ['sizes'],
    queryFn: async () => getSizes(),
  });
};

export const useCreatePurchase = () => {
  return useMutation({});
};
