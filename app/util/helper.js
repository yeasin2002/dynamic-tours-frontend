export const convertToDataURL = function (file) {
  if (!file || !file?.type?.startsWith("image/")) return;
  const imageUrl = URL.createObjectURL(file);
  return imageUrl;
};
