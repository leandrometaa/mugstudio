import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <FontAwesomeIcon
        icon={faMugHot}
        className="text-3xl text-[#B29B86]"
      />
      <h1
        className="flex text-lg flex-col text-[#F5F0E8]"
        style={{ fontFamily: 'DynaPuff' }}
      >
        <span className="leading-none">MyMug</span>
        <span className="leading-none">Studio</span>
      </h1>
    </div>
  );
};
