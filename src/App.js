// import './App.css';
import { BrowserRouter , Routes ,Route } from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Nav from './components/Nav';
import { Provider } from 'react-redux';
import store from './store/Store';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Nav/>
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/cart' element={<Cart/>} />
    </Routes>
     <Footer/>
   </BrowserRouter>
    
    </Provider>
  );
}

export default App;
