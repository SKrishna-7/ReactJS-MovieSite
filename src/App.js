import 'swiper/swiper.min.css'
import './assets/boxicons-2.1.2/css/boxicons.min.css';
import './App.scss';
import { BrowserRouter,Route } from 'react-router-dom';
import RouteConfig from './Config/Routes';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
function App() {
  return (
     
     <BrowserRouter>
   
          <Route render={props => (
              <>
                  <Header {...props}/>
                  <RouteConfig />
                  <Footer />
              </>
              )}/>
    
    </BrowserRouter>
      
  );
}

export default App;
