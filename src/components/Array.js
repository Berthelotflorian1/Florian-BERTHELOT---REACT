import React, { useState } from 'react';


function Etat(props) {
    const [state, setState] = useState ({
        decembre: props.decembre,
        fevrier: props.fevrier,
        mars: props.mars
});


function clickHandler() {
    console.log(state.decembre);
    setState({
        ...state,
        decembre: 'janvier'
    });}

    export default Etat;