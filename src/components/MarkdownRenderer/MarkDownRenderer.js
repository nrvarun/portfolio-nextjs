import ReactMarkdown from "react-markdown";

const MarkDownRenderer = ({ content, classList, components }) => {
  return (
    <ReactMarkdown
      children={content}
      className={classList}
      components={components}
    />
  );
};

export default MarkDownRenderer;
