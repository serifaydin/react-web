import { useState, useMemo, useEffect } from "react"

const expensiveFn = (num1, num2) => {
    let result = 0;
    console.log("expensiveFn Rendered");

    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            for (let k = 0; k < 10; k++) {
                result += num1 + num2;
            }
        }
    }
    return result;
}

const Calculator = () => {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const [val1, setVal1] = useState(0)

    const Sum = useMemo(() =>  expensiveFn(+num1, +num2),[num1,num2])

  /*  const Sum = 0;
   useEffect(() => {
    const Sum = expensiveFn(+num1, +num2)
   },[num1,num2]) */


    return (
        <div style={{ backgroundColor: '#FCE4EC', height: '200px', width: '400px' }}>
            <h2>Calculator</h2>
            <input type="number" value={num1} onChange={(e)=> setNum1(e.target.value)}/>
            <input type="number" value={num2} onChange={(e)=> setNum2(e.target.value)}/>
            {Sum}
            <hr/>
            <button onClick={()=> setVal1((val1)=> val1+1)}>Sayac</button>
            {val1}
        </div>
    )
}

export default Calculator;