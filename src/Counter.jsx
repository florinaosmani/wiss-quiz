import { useState } from 'react';

function Counter () {
    const [count, setCounter] = useState(0);
    const [istSichtbar, setIstSichtbar] = useState(true);
    const [titel, setTitel] = useState('Mein Counter');
    const [countClick, setCountClick] = useState(0);

    const erhoehen = () => {
        setCounter(count + 1);
        setCountClick(countClick + 1);
    }

    const verringern = () => {
        if (count > 0) {
            setCounter(count -1);
        }
        setCountClick(countClick + 1);
    }

    const reset = () => {
        setCounter(0);
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
                    <button onClick={erhoehen}>Erhöhen</button>
                    <button onClick={verringern}>Verringern</button>
                    <button onClick={reset}>Reset</button>
                    <p>Gesamtanzahl Klicks: {countClick}</p>
                </div>
            )}
        </div>
    );
}

export default Counter;