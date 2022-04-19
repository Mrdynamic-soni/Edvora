import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import SortIcon from '@mui/icons-material/Sort';
import '../App.css';

const Filter = () => {
  const [smShow, setSmShow] = useState(false);
  return (
    <>
      <button className='btn button me-2' onClick={() => setSmShow(true)} ><p className='linktext  px-2' ><SortIcon /> Filter</p></button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton className='modal_css'>
          <Modal.Title id="example-modal-sizes-title-sm" className='modal_css'>
            <p className='linktext'>Filters</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal_css'>
          <label for="select1" className="visually-hidden bg ">State</label>
          <select id="select1">
            <option className='bg'>State</option>
          </select>
        </Modal.Body>
        <Modal.Body className='modal_css'>
          <label for="select1" className="visually-hidden bg">City</label>
          <select id="select1">
            <option className='bg'>City</option>
          </select>
        </Modal.Body>
      </Modal>
    </>
  );

}

export default Filter;

