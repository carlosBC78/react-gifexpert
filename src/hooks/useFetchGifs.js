import {useState} from "react";
import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    // Disparar efectos secundarios
    useEffect(() => {
        // getGifs(category);//la función que quiero ejecutar cuando se inicia el componente
        getImages();
    }, [])

    
    return {
        // images: images,
        images,
        // isLoading: isLoading
        isLoading
    }
}