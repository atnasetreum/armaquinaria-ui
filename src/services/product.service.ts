import type { ResponseProduct } from "@interfaces";
import { vars } from "@config";

const findAll = async () => {
  const response = await fetch(
    `${vars.apiUrlPrefix}/products?sort=name&populate=*`
  );
  const data = (await response.json()) as ResponseProduct;
  return data.data;
};

const findOne = async (id: string) => {
  const response = await fetch(`${vars.apiUrlPrefix}/products/${id}`);
  const data = await response.json();
  return data.data;
};

export const ProductService = {
  findAll,
  findOne,
};
