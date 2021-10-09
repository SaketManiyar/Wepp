import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Offcanvas, Button, Badge, NavDropdown } from "react-bootstrap";

export function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={{ marginRight: 20 }}
        variant="primary"
        onClick={handleShow}
      >
        | | |
      </Button>

      <Offcanvas show={show} onHide={handleClose} style={{ width: "20rem" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>What you want...</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h4>
            <Badge bg="secondary">New</Badge> Example heading
          </h4>
          <br />
          <NavDropdown.Divider />
          <h4>
            <Badge bg="secondary">New</Badge> Example heading
          </h4>
          <br />
          <NavDropdown.Divider />
          <h4>
            <Badge bg="secondary">New</Badge> Example heading
          </h4>
          <br />
          <NavDropdown.Divider />
          <h4>
            <Badge bg="secondary">New</Badge> Example heading
          </h4>
          <NavDropdown.Divider />
          <h4>
            <Badge bg="secondary">New</Badge> Example heading
          </h4>
          <NavDropdown.Divider />
          <h4>
            <Badge bg="secondary">New</Badge> Example heading
          </h4>
          <NavDropdown.Divider />
          <h4>
            <Badge bg="secondary">New</Badge> Example heading
          </h4>
          <NavDropdown.Divider />
          <h4>
            <Badge bg="secondary">New</Badge> Example heading
          </h4>
          <NavDropdown.Divider />
          <h4>
            <Badge bg="secondary">New</Badge> Example heading
          </h4>
          <NavDropdown.Divider />
          <h4>
            <Badge bg="secondary">New</Badge> Example heading
          </h4>
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
