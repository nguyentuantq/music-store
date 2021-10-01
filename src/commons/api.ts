import axios from "axios";

export const getDataArtist = (keySearch: string, token: string) => {
  return axios({
    method: "get",
    url: `https://api.spotify.com/v1/search?q=${keySearch}&type=artist`,
    data: null,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getDataTrack = (id: string, token: string) => {
  return axios({
    method: "get",
    url: `https://api.spotify.com/v1/artists/${id}/top-tracks?market=VN`,
    data: null,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
