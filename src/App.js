import './App.css';
import Menu from './Components/Menu/Menu.js'
import Main from './Components/Body/Main'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="Container">
      <Menu />
        <Main />
      <Footer />
    </div>
  );
}

export default App;
