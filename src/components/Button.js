

function Button() {
    const clickHandler = () => {
        alert("Vous avez cliqué sur le bouton")
    }
        return  <button onClick={clickHandler}>Appuyer sur le bouton</button>;
  }

  export default Button;