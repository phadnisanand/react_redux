import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';
import { store } from './redux/Store';
import { Provider } from 'react-redux';
import AnotherCounter from './AnotherCounter';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import ShowTodo from "./ShowTodo";
import EditTodo from "./EditTodo";
import AddTodo from "./AddTodo";


function App() {
  return (
    <Provider store={store}>
        {/* <Counter />
        <AnotherCounter /> */}

        <div>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/addtodo" element={<AddTodo />} />
              <Route path="/todos" element={<ShowTodo />} />
              <Route path="/edit/:id" element={<EditTodo />} />
            </Routes>
          </Router>
       </div>
    </Provider>
  );
}

export default App;
