export const prestationUrlMaker = (prestationSlug) => {
  return `/prestations/${prestationSlug}`;
};

export const customizationUrlMaker = (customizationSlug, prestationSlug) => {
  return `/prestations/${prestationSlug}/${customizationSlug}`;
};

export const categoryUrlMaker = (categorySlug) => {
  return `/location/${categorySlug}`;
};

export const subCategoryUrlMaker = (categorySlug, subCateogorySlug) => {
  return `/location/${categorySlug}/${subCateogorySlug}`;
};

export const categoryToProductMaker = (categorySlug, productSlug) => {
  return `/location/${categorySlug}/${productSlug}`;
};

export const subCategoryToProductMaker = (categorySlug, productSlug, subCateogorySlug) => {
  return `/location/${categorySlug}/${subCateogorySlug}/${productSlug}`;
};
