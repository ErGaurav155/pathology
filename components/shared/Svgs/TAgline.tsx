import brackets from "@/components/shared/Svgs/brackets";

const TagLine = ({ className, children }: any) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-white">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
