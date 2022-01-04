import React, { useState,useEffect } from "react";
import { Button } from 'react-bootstrap'

const FunctionComponent = () => {
    //State her hangi bir tipte oluşturulabilir.
    //İstediğimiz kadar State oluşturabiliriz.
    const [counter, setCounter] = useState(0);
    const [timer,setTimer] =useState(0);

    const increase = ()=>{
        setCounter(counter + 1);
    }

    //Return de belirtilen Fonksiyon DOM dan kaldırılır.
   /*  useEffect(()=>{
        console.log('useEffect calisti');
        const myTimer = setInterval(()=>{
            setTimer(timer +1);
        },1000)

        return ()=>clearInterval(myTimer);
    }); */

   /*  useEffect(()=>{
        const myTimer = setInterval(()=>{
            setTimer(timer => timer +1);
        },1000)
    }); */

    useEffect(()=>{
        console.log(timer);
    },[timer])

    //Component ilk yüklendiğinde çalışır, Bir daha çalışmaz.
    useEffect(()=>{
        console.log('useEffect array calisti');
    },[]); //ComponentDidMount'a benziyor.

    //Component ilk yüklendiğinde çalışır.
    //Stateler her güncellendiğinde çalışır.
    useEffect(()=>{
        console.log('useEffect counter calisti');
    },[counter,timer]);

    //Component ilk yüklendiğinde çalışır.
    //Komponent her güncellendiğinde çalışır.
    useEffect(()=>{
        console.log('useEffect calisti');
    })

    return (
        <div className="box">
            <h6>Function Component</h6>
            <p>Counter : {counter}</p>
            <Button onClick={() => increase()}>Sayaç</Button> 
            <Button onClick={() => setCounter(counter +1)}>Sayaç 2</Button> 
        </div>
    );
}

export default FunctionComponent;