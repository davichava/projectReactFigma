import './App.css';
import Travel from './Component/travel';
import NavBar from './Component/navbar';
import Category from './Component/Category';
import Destination from './Component/Destinations';
import Description from './Component/description';
import Testimonials from './Component/testimonial';
import Subscriber from './Component/subscribe';
import Footer from './Component/footer';
import Publications from './Component/publications';

function App() {
  return (
    <div className="container">
     <NavBar/>
      <br/>
     <Travel/>
     <br/>
     <Category/>
     <br/>
     <br/>
     <Destination/>
     <br/>
     <br/>
     <Description/>
     <br/>
     <br/>
      <Testimonials/>
     <br/>
     <Publications/>  
     <br/>
     <Subscriber/>
     <br/>
     <Footer/>
    </div>

  );
}

export default App;

