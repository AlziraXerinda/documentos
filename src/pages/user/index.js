import React from "react";
import AppbarUser from "../../components/appbarUser";
import Documentos from "../../components/listarDocumentos";

const UserPage = () => {
  return (
    <div>
        <AppbarUser/>
        <Documentos/>
    </div>
  );
};

export default UserPage;
/* <Link to={"/details/" + movie.imdbID} style={{textDecoration: 'none'}}>
 </Link>
*/
