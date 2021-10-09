import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Offcanvas, Button } from "react-bootstrap";

export function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={{ marginRight: 10 }}
        variant="primary"
        onClick={handleShow}
      >
        | | |
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <li>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc. Some text as
            placeholder. In real life you can have the elements you have chosen.
            Like, text, images, lists, etc.
          </li>
          <li>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc. Some text as
            placeholder. In real life you can have the elements you have chosen.
            Like, text, images, lists, etc.
          </li>
          <li>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc. Some text as
            placeholder. In real life you can have the elements you have chosen.
            Like, text, images, lists, etc.
          </li>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
