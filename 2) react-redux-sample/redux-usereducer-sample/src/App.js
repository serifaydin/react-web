import { useReducer } from "react";
import { SAYAC_ARTTIR } from '../src/store/Types'
import  CountReducers  from '../src/store/reducers/CountReducers'

const initialState = 0;

function App() {

  const [state, dispatch] = useReducer(CountReducers, initialState);
  const  data  = state;

  const counterOnClick = () => {
    dispatch({
      type: SAYAC_ARTTIR
    });
  }

  return (
    <div >
      {data}<br/>
      <button onClick={counterOnClick}>Sayac Arttir</button>
    </div>
  );
}

export default App;
