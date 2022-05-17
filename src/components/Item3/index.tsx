import { useState } from 'react';
import './style.css'

export const Item3 = () => {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [d, setD] = useState(0);
    const [e, setE] = useState(0);
    const [f, setF] = useState(0);


    const [wait, setWait] = useState(0);
    const [inside, setInside] = useState(0);
    const [done, setDone] = useState(0);
    const [free, setFree] = useState(0);
    const [busy, setBusy] = useState(0);
    const [docu, setDocu] = useState(0);



    const handleSubmit = (a: number, b: number, c: number, d: number, e: number, f: number) => {
        setWait(d);
        setInside(e);
        setDone(f);
        setFree(a);
        setBusy(b);
        setDocu(c);
    }

    const handleStart = () => {
        if(wait > 0 && free > 0) {
            setWait(wait - 1);
            setFree(free - 1);
            setBusy(busy + 1);
            setInside(inside + 1);
        }
        else {
            alert(`Không thể firing vì input state ${wait === 0 ? "wait" : "free"} không có token`)
        }
    }

    const handleChange = () => {
        if(busy > 0 && inside > 0) {
            setDocu(docu + 1);
            setDone(done + 1);
            setBusy(busy - 1);
            setInside(inside - 1);
        }
        else {
            alert(`Không thể firing vì input state ${busy === 0 ? "busy" : "inside"} không có token`)
        }
    }
    const handleEnd = () => {
        if(docu > 0) {
            setDocu(docu - 1);
            setFree(free + 1);
        }
        else {
            alert(`Không thể firing vì input state docu không có token`)
        }
    }

    return (
        <div className="container"> 
            <h1>Item 3: Superimposed network</h1>
            <div className="item">
                <p>Enter your initial marking: M0 = [</p>
                <input type="number" className="input" value={a} onChange={e => setA(Number(e.target.value) > 0 ? Number(e.target.value) : 0)}/>
                <p>Free,</p>
                <input type="number" className="input" value={b} onChange={e => setB(Number(e.target.value) > 0 ? Number(e.target.value) : 0)}/>
                <p>Busy,</p>
                <input type="number" className="input" value={c} onChange={e => setC(Number(e.target.value) > 0 ? Number(e.target.value) : 0)}/>
                <p>Docu,  </p>
                <input type="number" className="input" value={d} onChange={e => setD(Number(e.target.value) > 0 ? Number(e.target.value) : 0)}/>
                <p>Wait,</p>
                <input type="number" className="input" value={e} onChange={e => setE(Number(e.target.value) > 0 ? Number(e.target.value) : 0)}/>
                <p>Inside,</p>
                <input type="number" className="input" value={f} onChange={e => setF(Number(e.target.value) > 0 ? Number(e.target.value) : 0)}/>
                <p>Done ] </p>
                <button onClick={() => handleSubmit(a, b, c, d, e, f)} className="button">Submit</button>
            </div>
            <div className="img-3"> 
                <div className='circles4'>{free}</div>
                <div className='circles5'>{docu}</div>
                <div className='circles6'>{busy}</div>
                <div className='circles7'>{inside}</div>
                <div className='circles8'>{done}</div>
                <div className='circles9'>{wait}</div>

                <div className='square3' onClick={handleStart}></div>
                <div className='square4' onClick={handleChange}></div>
                <div className='square5' onClick={handleEnd}></div>
            </div>
            <div>
                {`current marking:  [ ${free}.Free, ${busy}.Busy, ${docu}.Docu, ${wait}.Wait, ${inside}.Inside, ${done}.Done ]`}
            </div>
        </div>
    )
}