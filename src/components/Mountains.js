import mountains from "../images/mountains.png";
import mountainsSmall from "../images/mountains-small.png";
import { useMediaQuery } from "react-responsive";

const Mountains = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

  return (
    <img
      className="background-img"
      src={isMobile ? mountainsSmall : mountains}
      alt="green mountains in the background"
    />
  );
};

export default Mountains;
