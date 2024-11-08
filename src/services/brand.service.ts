import { type ResponseBrand } from "@interfaces";
import { vars } from "@config";

const findAll = async () => {
  const response = await fetch(
    `${vars.apiUrlPrefix}/brands?sort=name&populate=*`
  );
  const data = (await response.json()) as ResponseBrand;
  return data.data;
};

export const BrandService = {
  findAll,
};
