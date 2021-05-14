import MarkDownRenderer from "@components/MarkdownRenderer";
import { API } from "Libs/Utils";
import style from "./blogdetails.module.scss";

const MARKDOWN_RENDERERS = {
  h2: ({ node, ...props }) => (
    <h2
      className="font-poppins font-semibold mb-2 text-gray-900 text-2xl md:text-3xl lg:text-4xl capitalize"
      {...props}
    />
  ),
  h3: ({ node, ...props }) => (
    <h3
      className="font-poppins font-semibold mb-2 text-gray-900 text-1xl md:text-2xl lg:text-4xl capitalize"
      {...props}
    />
  ),
  h4: ({ node, ...props }) => (
    <h4
      className="font-poppins font-semibold mb-2 text-gray-900 text-xl md:text-1xl lg:text-4xl capitalize"
      {...props}
    />
  ),
  p: ({ node, ...props }) => (
    <p className="font-roboto text-md text-gray-800" {...props} />
  ),
  //This custom renderer changes how images are rendered
  img: ({ node, ...props }) => (
    <img
      alt={props.alt}
      title={props.title}
      className="w-auto h-auto my-10 md:my-20"
      src={`${props.src}`}
    />
  ),
};

const BlogDetails = ({ blog }) => {
  const { Title = "", Description = "", Date = "xx/xx/xxxx", Content } = blog;

  return (
    <section className="py-40 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <div className="text-center w-2/3 md:w-2/4 mx-auto">
          <div className="mx-5 md:mx-10">
            <p className="font-roboto text-xs text-gray-400 mb-2">{Date}</p>
            <h2 className="font-poppins font-semibold text-gray text-2xl md:text-3xl lg:text-5xl lg:leading-normal mb-3 md:mb-8">
              {Title}
            </h2>
            <p className="font-roboto font-400 text-sm text-gray-500 leading-normal mb-5 md:mb-8 w-3/4 mx-auto">
              {Description}
            </p>
          </div>
        </div>
        <div className="w-2/3 mx-auto py-10 md:py-20">
          <div className="bg-red-300 h-80"></div>
        </div>
        <div className="w-2/3 md:w-2/4 mx-auto py-10 md:pb-20">
          <MarkDownRenderer
            content={Content}
            classList={style.content}
            components={MARKDOWN_RENDERERS}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
