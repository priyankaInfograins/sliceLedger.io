import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/main.scss';
import Landing from './pages/landing/Main';
import EnterPrise from './pages/enterprise/Main';
import Network from './pages/network/Network';
import Research from './pages/research/Research';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './common/Footer';
import Term_Conditions from './pages/termandconditions/Term_Conditions';
import Private_Policy from './pages/private_policy/Private_Policy';
import Blog from './pages/blog/Blog'
import SingleBlog from './pages/blog/SingleBlog';


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/enterprise" element={<EnterPrise/>} />
          <Route path="/network" element={<Network/>} />
          <Route path="/research" element={<Research/>}/>
          <Route path="/term_and_condition" element={<Term_Conditions/>}/>
          <Route path="/private_policy" element={<Private_Policy/>}/>
          <Route path="/blog" element={<SingleBlog/>}/>
          <Route path="/blog/sliceLedger-at-gitex-event" element={<Blog/>}/>
       </Routes>
        <Footer />
  
      </BrowserRouter>
      
         
    </>
  );
}

export default App;


// change by bharti 

