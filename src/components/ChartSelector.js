import React from 'react';
import OptionItem from './OptionItem';

const ChartSelector = ({song, onGenreSelected}) => {
    const handleChange = (event) => {
       const chosenGenre = song[event.target.value]
       onGenreSelected(chosenGenre)
    }

    const genreOptions = song.map((song, index) => {
        return <OptionItem key={value} song={song} index={index}/>
    })
    return ( 
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>What genre ye like?</option>
            {genreOptions}
        </select>
     );
}
 
export default ChartSelector;