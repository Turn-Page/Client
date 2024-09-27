export const splitTitle = (str: any) => {
  let data = { title: "", subTitle: "" };

  if (str === undefined) return;
  data.title = str.match(/^[^-]*/)[0];
  let match = str.match(/-(.*)/);
  if (match !== null && match[1] !== undefined) data.subTitle = match[1];
  return data;
};
