import { Circles } from "react-loader-spinner";
import css from "../Loader/Loader.module.css";

const loaderStyle = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const Loader = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={loaderStyle}
      wrapperClass={css.loader}
      visible={true}
    />
  );
};

export default Loader;
