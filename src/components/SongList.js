import React from 'react';
import ListItem from './ListItem'

const SongList = ({ song }) => {

    const SongItems = song.map((song, index) => {
        return  <ListItem song={song} key={index}/>
        });
    
        return (
            <div>
                <ol>
                    {SongItems}
                </ol>
            </div>
        )
    
}
 
export default SongList;