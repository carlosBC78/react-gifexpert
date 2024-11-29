import { useState } from "react"
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";

import {AddCategory, GifGrid} from './components/index';

export const GifExpertApp = () => {

    // Hooks de React que mantienen el estado
    const [categories, setCategories] = useState(['One Punch']);

    // const onAddCategory = () => {
    //     // categories.push('Valorant');//no usar push, muta el objeto
    //     // setCategories([...categories, 'Valorant']);
    //     setCategories(cat => [...cat, 'Valorant']);
    // }

    const onAddCategory = (newCategory) => {
        // console.log(newCategory);
        const isCategoryRepeat = categories.find(c => c.toLowerCase() === newCategory.toLowerCase());
        if(isCategoryRepeat) return;
        // if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        //o de la siguiente manera
        // setCategories(cat => [newCategory, ...cat]);
    }


    return (
        <>
        {/* título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={setCategories} >
                onNewCategory={value => onAddCategory(value)}>
            </AddCategory>
            

            {/* Listado de Gif */}
            {/* <button onClick={ onAddCategory }>Agregar</button> */}            
                {
                    categories.map(category => 
                        // <li key={category}>{category}</li>
                        (
                            // <div key={category}>
                            //     <h3>{category}</h3>
                            //     <li>{category}</li>                                
                            // </div>
                            <GifGrid 
                                key={category} 
                                category={category}>
                            </GifGrid>
                            
                        )
                    )
                }
                {/* Gif Item */}
        </>
    )
}