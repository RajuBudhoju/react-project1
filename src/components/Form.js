import React,{ useState } from "react";
import Modal from 'react-modal';
import InvalidInputModal from "./InvalidInputModal";

const Form = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [items, setItems] = useState([]);
    const [isInvalidInputModalOpen, setInvalidInputModalOpen] = useState(false);


    const addItem = (e) => {
        e.preventDefault();
        if (name && age) {
            const newItem = { name, age };
            setItems([...items, newItem]);
            
            setName('');
            setAge('');
        } else {
            setInvalidInputModalOpen(true);
        }
    };

    const closeInvalidInputModal = () => {
        setInvalidInputModalOpen(false);
    };

    return (
        <div>
            <form style={{ marginLeft: '35%', marginTop: '5%'}}>
                <div>
                    <label >Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

                    <label >Age</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
                </div> 
                <button style={{ marginLeft: '20%', marginTop: '2%'}} onClick={addItem}>Add</button>
            </form>
            <div>
                <h2>Items:</h2>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{`Name: ${item.name}, Age: ${item.age}`}</li>
                    ))}
                </ul>
            </div>
            <InvalidInputModal isOpen={isInvalidInputModalOpen} onRequestClose={closeInvalidInputModal} />
        </div>
    );
}

export default Form;