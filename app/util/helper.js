export const convertToDataURL = function (file) {
  if (!file || !file?.type?.startsWith("image/")) return file;
  const imageUrl = URL.createObjectURL(file);
  return imageUrl;
};

export const convertToDataURLmultiple = function (files) {
  if (!files?.length > 0) return;
  const imageListUrl = files.map((item) => {
    if (!item?.type?.startsWith("image/")) return;
    return URL.createObjectURL(item);
  });
  if (!imageListUrl.length > 0) return;
  return imageListUrl;
};
