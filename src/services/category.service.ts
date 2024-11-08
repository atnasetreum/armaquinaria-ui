import type { ResponseCategory } from "@interfaces";
import { vars } from "@config";

const findAll = async () => {
  const response = await fetch(
    `${vars.apiUrlPrefix}/categories?sort=name&populate=*`
  );
  const data = (await response.json()) as ResponseCategory;
  return data.data;
};

export const CategoryService = {
  findAll,
};
