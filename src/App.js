import { Route,Routes } from "react-router-dom";
import Home from './pages/Home.page';
import AboutUs from './pages/AboutUs.page';
import ServicesUs from './pages/ServicesUs.page';
import ContactUs from './pages/ContactUs.page';
import Blog from './pages/Blog.page'
function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/aboutus' element = {<AboutUs/>}/>
      <Route path = '/contactus' element = {<ContactUs/>}/>
      <Route path = '/servicesus' element = {<ServicesUs/>}/>
      <Route path = '/blog' element = {<Blog/>}/>
    </Routes>
  );
}

export default App;
