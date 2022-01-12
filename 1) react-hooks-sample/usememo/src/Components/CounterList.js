import {useState} from "react";

const  CounterList = () => {

    const [val1, setval1] = useState(0);
    
    console.log("CounterList Rendered");
    

    return (
        <div style={{backgroundColor: '#CE93D8', height:'200px', width:'400px'}}>
            <h2>Expensive</h2>
            <button onClick={()=>setval1((val1)=>val1 +1)}>Sayac</button> {val1}
        </div>
    )
}

export default CounterList;