import { API } from "Libs/Utils";
import { useQuery } from "react-query";

const fetchBlogs = async () => {
  const res = await fetch(`${API.host}/blogs`);
  const data = await res.json();

  return data;
};

const fetchBlog = async (slug) => {
  const res = await fetch(`${API.host}/blogs?slug=${slug}`);
  const data = await res.json();

  return data[0];
};

const useBlog = (slug) => {
  return useQuery("blog", () => fetchBlog(slug));
};

const useBlogs = () => {
  return useQuery("blogs", () => fetchBlogs());
};

export { useBlogs, useBlog, fetchBlog, fetchBlogs };
