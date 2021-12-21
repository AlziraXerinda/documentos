import React from "react";
import Appbar from "../../components/appbarLog";
import SignUp from "../../components/registLog";

const RegistDoc = () => {
  return (
    <div>
        <Appbar/>
        <SignUp />
    </div>
  );
};

export default RegistDoc;
/* <Link to={"/details/" + movie.imdbID} style={{textDecoration: 'none'}}>
 </Link>
*/
