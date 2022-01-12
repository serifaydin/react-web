import { useRef, useEffect } from "react"

function UseRefComponent() {

    const value = useRef(0);

    console.log(value);

    const onIncrease = () => {
        value.current += 1;
    };

    return (
        <div>
            <button onClick={onIncrease}>Increase Ref Value</button>
        </div>
    );
}

export default UseRefComponent;