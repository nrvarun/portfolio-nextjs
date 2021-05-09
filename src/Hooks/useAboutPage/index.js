import { API } from "Libs/Utils";
import { useQuery } from "react-query";

const fetchAboutPage = async () => {
  const res = await fetch(`${API.host}/about`);
  const data = await res.json();

  return data;
};

const useAboutPage = () => {
  return useQuery("about", () => fetchAboutPage());
};

export { useAboutPage, fetchAboutPage };
