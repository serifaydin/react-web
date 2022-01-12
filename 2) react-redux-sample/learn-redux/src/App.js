import Buttons from "./components/Buttons";
import Counter from "./components/Counter";
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Counter />
        <Buttons />
      </Provider>
    </>

  );
}

export default App;