import axios from "axios";

interface searchResponse {
  data: object[];
}

interface searchVariable {
  name: string | string[];
  limit: number;
  offset: number;
}

export const getImage = async (
  data: searchVariable
): Promise<searchResponse> => {
  const res = await axios.get(
    `http://api.giphy.com/v1/stickers/search?q=${
      data.name
    }&api_key=FNQCVXlKMBRlPCrer58PEBvVKSJcEft1&limit=${
      data.limit
    }&offset=${data.offset}`
  );

  const result = res.data.data.reduce(
    (list: object[], item: any) => {
      list.push({ id: item.id, url: item.images.original.url, slug: item.slug })
      return list
    },
    []
  );

  return result;
};

// /users/${id}

/**
 * 
 * axios({
 *  method: config.apiPaths.users.method
 *  url: config.apiPaths.users.url(userId, options),
 * data
 * })
 * 
 * 
 * 
 * 
 */