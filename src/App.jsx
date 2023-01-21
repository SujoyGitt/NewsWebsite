import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./component/Navbar";
import React, {  useState } from "react";
import News from "./component/News";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App = ()=> {
  let apikey = process.env.REACT_APP_NEWS_API;
  let[progress,setProgress]=useState(0)
  
  let setprogress = (progress) => {
     setProgress(progress );
  };
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <div>
            <LoadingBar
              height={3}
              color="#f11946"
              progress={  progress}
            />
          </div>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setprogress={ setprogress} apikey={ apikey}
                  key="/"
                  pagesize={12}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  setprogress={ setprogress} apikey={ apikey}
                  key="general"
                  pagesize={12}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setprogress={ setprogress} apikey={ apikey}
                  key="science"
                  pagesize={12}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setprogress={ setprogress} apikey={ apikey}
                  key="entertainment"
                  pagesize={12}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setprogress={ setprogress} apikey={ apikey}
                  key="business"
                  pagesize={12}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setprogress={ setprogress} apikey={ apikey}
                  key="health"
                  pagesize={12}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setprogress={ setprogress} apikey={ apikey}
                  key="sports"
                  pagesize={12}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setprogress={ setprogress} apikey={ apikey}
                  key="technology"
                  pagesize={12}
                  country="in"
                  category="technology"
                />
              }
            />
            <Route path="/NewsApp" element={<News
                  setprogress={ setprogress} apikey={ apikey}
                  key="technology"
                  pagesize={12}
                  country="in"
                  category="technology"
                />}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  
}
export default App;