import React from 'react';
import Modal from 'react-modal';

const customModalStyles = {
  content: {
    width: '200px', // Adjust the width as needed
    height: '150px', // Adjust the height as needed
    margin: 'auto',
  }
};

const InvalidInputModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Invalid Input"
      style={customModalStyles}
    >
      <h2>Invalid Input</h2>
      <p>Please enter a valid name and age.</p>
      <button onClick={onRequestClose}>OK</button>
    </Modal>
  );
}

export default InvalidInputModal;
