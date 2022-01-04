import React, { useState } from ‘react’; 

function FavoriteColor() {
    const [color, setColor] = useState("red");
  
    return (
      <>
        <h1>Ma couleur préférée est : {color}!</h1>
        <button
          type="button"
          onClick={() => setColor("blue")}
        >Blue</button>
      </>
    )
  }
}