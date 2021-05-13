import BlogDetails from "@components/BlogDetails";
import Landing from "@layouts/Landing";
import { fetchBlog, fetchBlogs, useBlog } from "Hooks/useBlogs";
import { useRouter } from "next/router";

import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

export default function BlogDetail() {
  const router = useRouter();
  const { data } = useBlog(router.query.slug);

  return (
    <Landing noFooter>{data != null && <BlogDetails blog={data} />}</Landing>
  );
}

export async function getStaticPaths() {
  const blogs = await fetchBlogs();

  return {
    paths: blogs.map((blog) => `/blog/${blog.id}`),
    fallback: "blocking", // See the "fallback" section below
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("blog", () => fetchBlog(slug));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
