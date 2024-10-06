import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';
import { store } from './redux/Store';
import { Provider } from 'react-redux';
import AnotherCounter from './AnotherCounter';
function App() {
  return (
    <Provider store={store}>
        <Counter />
        <AnotherCounter />
    </Provider>
  );
}

export default App;
