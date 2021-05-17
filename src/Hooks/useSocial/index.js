import { API } from "Libs/Utils";
import { useQuery } from "react-query";

const fetchSocial = async () => {
  const res = await fetch(`${API.host}/social-medias`);
  const data = await res.json();

  return data;
};

const useSocial = () => {
  return useQuery("social-links", () => fetchSocial());
};

export { useSocial, fetchSocial };
