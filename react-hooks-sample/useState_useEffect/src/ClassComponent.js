import React from "react";
import { Button } from 'react-bootstrap'

class ClassComponent extends React.Component {
    //State her zaman obje olmak zorunda.
    //Class Komponent içerisinde bir adet State tanımlanabilir.
    state = {
        counter: 0,
        timer:0
    }

    //Component ilk yüklendiğinde çalışır, Bir daha çalışmaz.
    componentDidMount(prevProps, prevState) {
        console.log('componentDidMount calisti');

        /* this.myTimer = setInterval(()=>{
            this.setState({
                timer: this.state.timer +1
            })
        },1000); */
    }

    //Component ilk yüklendiğinde çalışmaz,
    //Component her yenilendiğinde çalışır.
    componentDidUpdate() {
        console.log('componentDidUpdate calisti');
        console.log(this.state.timer);
    }

    //DOM'a eklenen fonksiyonlar için, 
    //fonksiyonların kaldırılması işlemi için kullanılır.
    componentWillUnmount() {
        //clearInterval(this.myTimer);
    }

    increase = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    render() {
        return (
            <div className="box">
                <h6>Class Component</h6>
                <p>Counter : {this.state.counter}</p>
                <Button onClick={() => this.increase()}>Sayaç</Button>
            </div>
        )
    }
}

export default ClassComponent;