import React from "react";
import Appbar from "../../components/appbarLog";
import SignUp from "../../components/registLog";

const RegistUser = () => {
  return (
    <div>
        <Appbar/>

      <SignUp />
    </div>
  );
};

export default RegistUser;
/* <Link to={"/details/" + movie.imdbID} style={{textDecoration: 'none'}}>
 </Link>
*/
