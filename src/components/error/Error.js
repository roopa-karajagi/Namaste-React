import { useRouteError } from "react-router-dom";
import './error.css'

const ErrorComp = () => {
  const error = useRouteError();
  console.log("Error", error);
  return (
    <div className="err-head">
      <h1> Oooooops!!!!! something went wrong</h1>
      <h3 >{error.status + " - " + error.statusText}</h3>
    </div>
  );
};

export default ErrorComp;
