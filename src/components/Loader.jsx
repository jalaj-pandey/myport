import React from "react";
import "./Loader.css"; 
import jalajload from "../assets/images/jalajload.png"

function Loader() {
  return (
    <div className="flex justify-center items-center py-72 max-[426px]:py-50">
      <div className="loader">
        <img
          src={jalajload} 
          alt="Loading"
          className="loader-image"
        />
      </div>
    </div>
  );
}

export default Loader;












// import React from "react";
// import { Triangle } from "react-loader-spinner";

// function Loader() {
//   return (
//     <div className="flex justify-center py-72 max-[426px]:py-50">
//       <Triangle
//         visible={true}
//         height="150"
//         width="150"
//         color="#00B2DF"
//         ariaLabel="triangle-loading"
//         wrapperStyle={{}}
//         wrapperClass=""
//       />
//     </div>
//   );
// }

// export default Loader;
