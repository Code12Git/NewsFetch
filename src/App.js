import React from 'react';

import Navbar from "./Components/Navbar";
import News from "./Components/News";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const pageSize=5;
  // const apiKey=process.env.REACT_APP_NEWS_API
  return (
    
    <>
    <BrowserRouter>
    <Navbar />
    
    
    <Routes>
    <Route exact path="/" element={<News  key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/business" element={<News  key="business" pageSize={pageSize} country="in" category="business" />}/> 
          <Route exact path="/entertainment" element={<News  key="entertainment"  pageSize={pageSize} country="in" category="entertainment" />}/> 
          <Route exact path="/general" element={<News  key="general" pageSize={pageSize} country="in" category="general" />}/>
          <Route exact path="/health" element={<News  key="health"  pageSize={pageSize} country="in" category="health" />}/> 
          <Route exact path="/science" element={<News  key="science"  pageSize={pageSize} country="in" category="science" />}/> 
          <Route exact path="/sports" element={<News  key="sports"  pageSize={pageSize} country="in" category="sports" />}/> 
          <Route exact path="/technology" element={<News  key="technology"  pageSize={pageSize} country="in" category="technology" />}/>
          
          
          
        </Routes>
    </BrowserRouter>
    </>
      
  );
}

export default App;
