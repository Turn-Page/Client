export const convertPriceComma = (num?: number | string) => {
  if (num === undefined) return;
  if (typeof num === "string") num = num.split(",").join("");
  return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};
