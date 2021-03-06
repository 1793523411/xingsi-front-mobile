import React from "react";
import "./App.css";
import "antd-mobile/dist/antd-mobile.css";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";

import Index from "./pages/Index";
import Article from "./pages/Article";
import Image from "./pages/Image";
import History from "./pages/History";
import Link from "./pages/Link";
import ImgList from './components/ImgList'
import ArtList from './components/ArticleList'
import Test from './pages/Test'
import About from './pages/About'
import HistortDetail from './pages/HistoryDetail'

function App(props) {
  const router = (path) => {
    // props.history.push('/1')
    console.log(path);
  };

  return (
    <div className="App">
      <Router>
        <Home router={router}></Home>
        <div>
          <Route exact path="/" component={Index}></Route>
          <Route exact path="/0" component={Index}></Route>
          <Route exact path="/1" component={Article}></Route>
          <Route exact path="/2" component={Image}></Route>
          <Route exact path="/4" component={History}></Route>
          <Route exact path="/5" component={Link}></Route>
          <Route exact path="/img/:id" component={ImgList}></Route>
          <Route exact path="/art/:id" component={ArtList}></Route>
          <Route exact path="/3" component={About}></Route>
          <Route exact path="/history/:id" component={HistortDetail}></Route>
          <Route exact path="/test" component={Test}></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
