import React from "react";


const ListItem = ({ song }) => {
  return (   
  <li>
  <p>{song["title"].label}</p>
   <img src={song["im:image"][2].label}></img>
   <p><a href={song["link"][1].attributes.href}>Preview</a></p>
   </li>
  )
};

export default ListItem;