export const formatViewCount = (viewCount: number) => {
  if (viewCount >= 1_000_000_000) {
    return `${Math.floor(viewCount / 1_000_000_000)} млрд просмотров`;
  } else if (viewCount >= 1_000_000) {
    return `${Math.floor(viewCount / 1_000_000)} млн просмотров`;
  } else if (viewCount >= 1_000) {
    return `${Math.floor(viewCount / 1_000)} тыс. просмотров`;
  } else {
    return `${viewCount} просмотров`;
  }
};

export const createVideoLink = (id: string) => {
  return `https://www.youtube.com/watch?v=${id}`;
};
