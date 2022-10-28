export const thumbnailFormat = (url) => {
  return `https:${url}?h=175&w=175`;
};

export const bigThumbnailFormat = (url) => {
  return `https:${url}?h=500&w=500`;
};

export const mediumThumbnailFormat = (url) => {
  return `https:${url}?h=350&w=350`;
};

export const wallpaperFormat = (url, small) => {
  return `https:${url}?w=1920${small ? '&h=400' : ''}`;
};

export const narrowWallpaperFormat = (url) => {
  return `https:${url}?fit=fill&w=1920&h=400`;
};

export const bluredFormat = (url) => {
  return `https:${url}?w=10`;
};

export const squareFormat = (url, size) => {
  return `https:${url}?h=${size}&w=${size}`;
};

export const facebookFormat = (url, size) => {
  return `https:${url}?w=${size}`;
};
