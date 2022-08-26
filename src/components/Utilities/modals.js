import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardFooter,
} from "mdb-react-ui-kit";


const Modals = (props) => {
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);
  return (
    <>
      <MDBCard className="m-2">
        <MDBCardBody>
          <MDBCardTitle>{props.title}</MDBCardTitle>
          <MDBBtn color="primary" onClick={toggleShow}>
            Show Details
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBBtn
                className="btn btn-close btn-danger"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <h4>{props.title}</h4>
              <hr/>
              <p>{props.description}</p>
            </MDBModalBody>
            <MDBModalFooter>
                <MDBCardFooter>Post ID: {props.id}, User ID: {props.userID}</MDBCardFooter> 
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default Modals;