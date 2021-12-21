import React from "react";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Col, Row } from "react-bootstrap";
import capa from "../assets/imgs/capa.png";
import { Button } from "@material-ui/core";

export default function Capa() {
  return (
    <div className="capa w-100">
      <Row className="w-100">
        <Col sm={5}>
          <img src={capa} alt="Searching" width={500} />
        </Col>

        <Col sm={7} className="text-start">
          <div className="mt-5 pt-5">
            <h1>Tobusco Software Lda</h1>

            <p className="texto">
              Um portal inovador que disponibiliza para si serviços que visam
              permitir ums pesquisa rápida sobre e simples sobre bens perdidos.
              Encontre aqui!
            </p>
            <Link to="/registUser">
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                className="registar mt-4"
              >
                Registe-se
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}
