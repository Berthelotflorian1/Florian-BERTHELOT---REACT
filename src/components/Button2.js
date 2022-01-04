

function Button2(props) {
    const clickHandler = () => {
        alert(props.alerteTxt);
    }
        return  <button onClick={clickHandler}>Appuyer sur le bouton</button>;
  }

  export default Button2;