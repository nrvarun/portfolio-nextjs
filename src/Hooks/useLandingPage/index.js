import { API } from "Libs/Utils";
import { useQuery } from "react-query";

const fetchLandingPage = async () => {
  const res = await fetch(`${API.host}/landing`);
  const data = await res.json();

  return data;
};

const useLandingPage = () => {
  return useQuery("landing", () => fetchLandingPage());
};

export { useLandingPage, fetchLandingPage };
