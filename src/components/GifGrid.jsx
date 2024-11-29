// import {useState} from "react";
// import { useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
// import { GifItem } from "./index";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    // const [counter, setCounter] = useState(10);

    //Custom Hook
    const {images, isLoading} = useFetchGifs(category);

    // console.log({images, isLoading});

    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // // Disparar efectos secundarios
    // useEffect(() => {
    //     // getGifs(category);//la función que quiero ejecutar cuando se inicia el componente
    //     getImages();
    // }, [])

    // Petición http para obtener los gifs de una categoría
    // const gifs = [1,2,3,4,5,6,7,8];    

    

    return (
        // <div>GifGrid</div>
        <>
            <h3>{category}</h3>
            {/* {
                isLoading ? (<h2 >Cargando ...</h2>): null
            } */}
            {
                isLoading && (<h2 >Cargando ...</h2>)
            }
            
            {/* <p>descripción de la categoría</p> */}
            {/* {
                gifs.map(gif => (
                    <p>{gif}</p>
                ))
            } */}

            {/* <h5>{counter}</h5>
            <button onClick={() => setCounter(counter + 1)}>+1</button> */}

            <div className="card-grid">
                {images.map((image) => (
                    // <li key={id}>
                    //     {title}
                    // </li>
                    <GifItem 
                        key={image.id} 
                        // title={image.title} 
                        // url={image.url}
                        {...image}
                    >
                    </GifItem>
                ))}
            </div>
        </>
    )
}