import React from "react";
import Appbar from "../../components/appbarLog";

import Capa from "../../components/capa";
import Loggar from "../../components/login";


const Login = () => {
  return (
    <div>
        <Appbar/>

      <Loggar />
    </div>
  );
};

export default Login;
/* <Link to={"/details/" + movie.imdbID} style={{textDecoration: 'none'}}>
 </Link>
*/
