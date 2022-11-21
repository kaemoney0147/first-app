
import './App.css';
import ButtonComponent from './Component/ButtonComponent';
import ImageComponent from './Component/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent content='Click Me'/>
        <ImageComponent imgSrc="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt='this is unsplash music image'/>
      </header>
    </div>
  );
}

export default App;
