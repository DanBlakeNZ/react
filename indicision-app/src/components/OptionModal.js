import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props)=> (
    <Modal
        isOpen={!!props.selectedOption} //!! is used to convert undefined to false and a string to true
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button>Okay</button>
    </Modal>
)

export default OptionModal;