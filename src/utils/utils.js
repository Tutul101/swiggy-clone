export const getCollectionID = (str) => {
  const collectionId = str.split("?")[1].split("&")[0].split("=")[1];
  return collectionId;
};
