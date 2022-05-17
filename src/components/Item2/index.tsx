
import './style.css';
import { useEffect, useState } from 'react';
import { time } from 'console';

export const Item2 = () => {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    const [wait, setWait] = useState(0);
    const [inside, setInside] = useState(0);
    const [done, setDone] = useState(0);


    const handleStart = () => {
        if (wait > 0) {
            setWait(wait - 1);
            setInside(inside + 1)
        }
        else {
            setWait(0);
        }
    }

    const handleChange = () => {
        if (inside > 0) {
            setInside(inside - 1);
            setDone(done + 1)
        }
        else {
            setInside(0);
        }
    }
    
    const handleSubmit = (a: number, b: number, c: number) => {
        setWait(a);
        setInside(b);
        setDone(c);
    }



    return (
        <div className="container"> 
            <h1>Item 2: Patient network</h1>
            <p>Click on any transition to fire it!</p>
            <div className="item">
                <p>Enter your initial marking: M0 = [</p>
                <input type="number" className="input" value={a} onChange={e => setA(Number(e.target.value) > 0 ? Number(e.target.value) : 0)}/>
                <p>Wait,</p>
                <input type="number" className="input" value={b} onChange={e => setB(Number(e.target.value) > 0 ? Number(e.target.value) : 0)}/>
                <p>Inside,</p>
                <input type="number" className="input" value={c} onChange={e => setC(Number(e.target.value) > 0 ? Number(e.target.value) : 0)}/>
                <p>Done ] </p>
                <button onClick={() => handleSubmit(a, b, c)} className="button">Submit</button>
            </div>
            <div className="img"> 
                <div className='circle1'>{wait}</div>
                <div className='circle2'>{inside}</div>
                <div className='circle3'>{done}</div>
                <div className='square1' onClick={handleStart}></div>
                <div className='square2' onClick={handleChange}></div>

            </div>
            <div>
                {`Current marking: [ ${wait}.wait, ${inside}.inside, ${done}.done]`}

            </div>
        </div>
    )
}