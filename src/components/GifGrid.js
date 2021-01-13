import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //const [images, setImages] = useState([]);
    const { data:images } = useFetchGifs( category );

    /*// useEffect con un arreglo vacio como segundo parámetro significa que se ejecutará su cuerpo cuando el componente es renderizado por primera vez. 
    useEffect( () => {
        //getGifs(category).then(images => setImages(images));
        getGifs(category).then(setImages);
    }, [ category ]);*/

    return (
        <>
            <h3> { category } </h3>
            <div className = 'card-grid'>
                {
                    images.map( (image) => {
                        return <GifGridItem
                            key = {image.id} 
                            { ...image }
                        />
                    })
                }
            </div>
        </>
    );
};
