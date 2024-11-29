import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
        // console.log(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(inputValue);
        const newInputValue = inputValue.trim();
        if(newInputValue.length <= 1) return;
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(newInputValue);
        setInputValue('');
    }

    // Emitir el evento al padre, el hijo no debería hacer la lógica de insertar

    return (
        // <form onSubmit={(event) => onSubmit(event)}>
        <form onSubmit={onSubmit}>
            {/* <div>AddCategory</div> */}
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                // onChange={(event) => onInputChange(event)}
                onChange={ onInputChange }
            ></input>
        </form>
    )
}