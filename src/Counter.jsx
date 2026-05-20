import { useState } from 'react';

function Counter ({ startwert=0, schritt=1, titel="Punkte", min=0, max=1000 }) {
    const [count, setCounter] = useState(startwert);
    const [istSichtbar, setIstSichtbar] = useState(true);
    const [countClick, setCountClick] = useState(0);

    const erhoehen = () => {
        if (count < max) {
            setCounter(count + schritt);
        } 
        setCountClick(countClick + 1);
    }

    const verringern = () => {
        if (count > min) {
            setCounter(count - schritt);
        }
        setCountClick(countClick + 1);
    }

    const reset = () => {
        setCounter(startwert);
        setCountClick(countClick + 1);
    }

    const toggle = () => {
        setIstSichtbar(!istSichtbar);
        setCountClick(countClick + 1);
    }

    return(
        <div>
            <h2>{titel}</h2>
            <button onClick={toggle}>{istSichtbar? 'Counter verstecken' : 'Counter anzeigen'}</button>
            
            {istSichtbar && (
                <div>
                    <p>Aktueller Zähler: {count}</p>
                    <button onClick={erhoehen} disabled={count >= max}>+{schritt}</button>
                    <button onClick={verringern} disabled={count <= min}>-{schritt}</button>
                    <button onClick={reset}>Reset</button>
                    <p>Gesamtanzahl Klicks: {countClick}</p>
                </div>
            )}
        </div>
    );
}

export default Counter;