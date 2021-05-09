import { API } from "Libs/Utils";
import { useQuery } from "react-query";

const fetchSocialLinks = async () => {
  const res = await fetch(`${API.host}/social-medias`);
  const data = await res.json();

  console.log(data);

  return data;
};

const useSocialLinks = () => {
  return useQuery("social-links", () => fetchSocialLinks());
};

export { useSocialLinks, fetchSocialLinks };
