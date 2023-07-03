import Banner from "../../assets/banner.jpg"
import "./banner.css";
import Overlay from "./Overlay";

const Section = () => {
  return (
    <div className="img-section">
      <img src={Banner} alt="Banner" />
      <Overlay />
    </div>
  );
};

export default Section;