import { Route,Routes } from "react-router-dom";
import Home from './pages/Home.page';
import AboutUs from './pages/AboutUs.page';
import ServicesUs from './pages/ServicesUs.page';
import ContactUs from './pages/ContactUs.page';
import Blog from './pages/Blog.page'
import SinglePageBlog from'./pages/SinglePageBlog';
import Responsive from "./pages/Responsive.page";
function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/aboutus' element = {<AboutUs/>}/>
      <Route path = '/contactus' element = {<ContactUs/>}/>
      <Route path = '/servicesus' element = {<ServicesUs/>}/>
      <Route path = '/blog' element = {<Blog/>}/>
      <Route path = '/singlepageblog' element = {<SinglePageBlog/>}/>
      <Route path = 'responsive' element = {<Responsive/>}/>
    </Routes>
  );
}

export default App;
