export const formatNumber = (number: string | number) => {
  return Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(Number(number));
};
