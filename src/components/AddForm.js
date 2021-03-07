import React, {useState} from 'react';
import '../App.css';

function AddForm({addItem, placeholder}) {
    const [value, setValue] = useState('');

    const handleSubmit = eventParameter => {
        eventParameter.preventDefault();
        if (!value) return;
        //this will be passed in as a prop
        addItem(value);
        //clear the form after use
        setValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                   className="input"
                   placeholder={placeholder}
                   value={value}
                   onChange={event => setValue(event.target.value)}
            />
        </form>
    )
}

export default AddForm;