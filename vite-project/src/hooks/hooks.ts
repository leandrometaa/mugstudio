import {
  getColors,
  getSized,
  getMaterials,
  getTypes,
  getTextures,
  createOrder,
} from "@/api/api.ts";
import type { MugSize, MugType, PostOrder } from "@/types/types.ts";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetTypes = () => {
  return useQuery({
    queryKey: ["types"],
    queryFn: async () => {
      const apiResponse = await getTypes();
      return apiResponse as MugType[];
    },
  });
};

export const useGetSizes = () => {
  return useQuery({
    queryKey: ["dimensions"],
    queryFn: async () => {
      const apiResponse = await getSized();
      return apiResponse as MugSize[];
    },
  });
};

export const useGetColors = () => {
  return useQuery({
    queryKey: ["colors"],
    queryFn: async () => getColors(),
  });
};

export const useGetMaterials = () => {
  return useQuery({
    queryKey: ["materials"],
    queryFn: async () => getMaterials(),
  });
};

export const useGetTextures = () => {
  return useQuery({
    queryKey: ["textures"],
    queryFn: async () => getTextures(),
  });
};

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: async (data: PostOrder) => await createOrder(data),
  });
};
