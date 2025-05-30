interface PageHeadingProps {
  title: string;
  paragraph: string;
}

export const PageHeading = ({ title, paragraph }: PageHeadingProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h1
        className="m-0 text-2xl font-bold text-[#4B2E2B]"
        style={{ fontFamily: "DynaPuff" }}
      >
        {title}
      </h1>
      <p className="color-[#2A2A2A]">{paragraph}</p>
    </div>
  );
};
