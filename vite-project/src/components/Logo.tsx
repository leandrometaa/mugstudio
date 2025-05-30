import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

export const Logo = () => {
  return (
    <a className="flex cursor-pointer items-center gap-2">
      <FontAwesomeIcon icon={faMugHot} className="text-3xl text-[#B29B86]" />
      <h1 className="flex flex-col text-lg text-[#F5F0E8]">
        <span className="leading-none" style={{ fontFamily: "DynaPuff" }}>
          MyMug
        </span>
        <span className="leading-none" style={{ fontFamily: "DynaPuff" }}>
          Studio
        </span>
      </h1>
    </a>
  );
};
