import React, { useState, useEffect } from 'react';
import SongList from '../components/SongList';
import ListItem from '../components/ListItem';

const SongContainer = () => {

    const [song, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
      }, []);

      const getSongs = function () {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then((res) => res.json())
        .then((song) => setSongs(song.feed.entry));
      };

      const getRock = function () {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json")
        .then((res) => res.json())
        .then((song) => setSongs(song.feed.entry));
      };

    return ( 
        <div className='main-container'>
            <SongList song={song}/>
        </div>
     );
}
 
export default SongContainer;