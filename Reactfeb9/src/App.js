import logo from './logo.svg';
import './App.css';
import Ecommerce from './Ecommerce';
import Comment from './Comment';
import Forum from './Forum';
function App() {
  return (
    <div className="App">
      <h1>Welcome to React App</h1>
      <Comment></Comment>
      
      <Ecommerce></Ecommerce>
      <Forum topic = "What is React"></Forum>
      
    </div>
  );
}
export default App;
