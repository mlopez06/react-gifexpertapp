import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [value, setValue] = useState('');

    const handleChangeValue = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //Cuando solo obtenemos la función del setState, pordemos obtener el valor con la siguiente línea
        if(value.trim().length > 2) {
            setCategories(category => [ value, ...category ]);
            setValue('');
        }
    }

    return (
        <form onSubmit = { handleSubmit }>
            <input 
                type = "text"
                value = { value }
                onChange = { handleChangeValue }
            />
        </form>
    );
}

AddCategory.propsType = {
    setCategories: PropTypes.func.isRequired
};
