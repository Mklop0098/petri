
import { useState } from 'react'
import './style.css'

type Parents  = {
    a: number
    b: number
    c: number
  }
  
  type Num = {
    x: number
    y: number
    z: number
  }

export const Item1 = () => {
    const [a, setA] = useState(1)
  const [c, setC] = useState(0)
  const [b, setB] = useState<Num[]>([])


  const caculate = () => {
    let t = 0
    for(let i = 0; i <= a; i++) {
        for(let j = 0; j <= a; j++){
            for (let k = 0; k <= a; k++) {
                if(i + j + k === a ) {                     
                     t++;
                     let tmp = {
                       x: i,
                       y: j,
                       z: k,
                     }
                    b.push(tmp)
                    
                    break;
                }
            }
        }
    }
    setC(t); 
    }

    const handleChange = (n: string) => {
        setB([]);
        setA(Number(n) > 0 ? Number(n) : 0);
    }

    return (
    <div className='container'>
        <h1 className="item">Item 1: Represent Petri Net as a transition system</h1>
        <div className='form'> <p>Nhập số token</p>
            <input type="number" value={a} onChange={ e => handleChange(e.target.value)} className="input"/>

            <button onClick={caculate} className="button">submit</button>
            <div>{`Số node: ${c}`}</div>
            
        </div>
        <div className='show'>{b.map(item => (
                <div style={{marginBottom: "20px"}}>{`Node: [${item.x} , ${item.y}, ${item.z}]`}
                <div>{`Node Cha:  ${
                    item.x > 0 && item.y < a ?  `[${item.x - 1} , ${item.y + 1}, ${item.z}],   ` : ""
                    }
                    ${
                    item.y > 0 && item.z < a ?  `[${item.x} , ${item.y - 1}, ${item.z + 1}],   ` : ""
                    }
                    ${
                    item.z > 0 && item.x < a ?  `[${item.x + 1} , ${item.y}, ${item.z - 1}]   ` : ""
                    }
                `}</div>
                <div>
                    {` Node Con:  ${
                    item.x > 0 ?  `[${item.x - 1} , ${item.y }, ${item.z + 1}],   ` : ""
                    }
                    ${
                    item.y > 0 ?  `[${item.x + 1} , ${item.y - 1}, ${item.z}],   ` : ""
                    }
                    ${
                    item.z > 0 ?  `[${item.x} , ${item.y + 1}, ${item.z - 1}]  ` : ""
                    }
                `}
                </div>
                </div>
            ))}</div>
       
    </div>
    );
}