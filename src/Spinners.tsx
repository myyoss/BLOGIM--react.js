
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import PropagateLoader from "react-spinners/PropagateLoader";

const Spinners = () => {
   
  return (
    <div className="sweet-loading">
      <PropagateLoader color="#f1356d" size={15}/>
    </div>
  )
}

export default Spinners