import { useRef, useEffect } from "react"

function App() {

  const inputRef = useRef();
  const divRef = useRef();

  const onFocusButton = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const onDivBorder = () => {
    divRef.current.style.border = "3px solid black"
  }

  useEffect(() => {
    console.log(inputRef.current)
    console.log(divRef.current)
  });


  return (
    <div ref={divRef}>
      <input ref={inputRef} placeholder="placeholder" />
      <button onClick={onFocusButton}>Input'a focus ol</button><br/><br/>
      <button onClick={onDivBorder}>Div'e border ekle</button>
    </div>
  );
}

export default App;
