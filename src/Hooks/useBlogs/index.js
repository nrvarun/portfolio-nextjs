import { API } from "Libs/Utils";
import { useQuery } from "react-query";

const fetchBlogs = async () => {
  const res = await fetch(`${API.host}/blogs`);
  const data = await res.json();

  return data;
};

const fetchBlog = async (id) => {
  const res = await fetch(`${API.host}/blogs/${id}`);
  const data = await res.json();

  return data;
};

const useBlog = (id) => {
  return useQuery("blog", () => fetchBlog(id));
};

const useBlogs = () => {
  return useQuery("blogs", () => fetchBlogs());
};

export { useBlogs, useBlog, fetchBlog, fetchBlogs };
