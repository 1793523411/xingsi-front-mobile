import React, { useState, useEffect } from "react";
import axios from "axios";
import { WingBlank } from "antd-mobile";

import "./index.css";
import './quill.core.css'
// import './quill.snow.css'
import './quill.bubble.css'

export default function ArticleList(props) {
  const [newsContent, setNewsContent] = useState();

  useEffect(() => {
    getDate();
  }, []);

  const getDate = () => {
    console.log(props.match.params.id);
    axios
      .get("http://101.201.125.229:8081/news/detail/" + props.match.params.id)
      .then((res) => {
        console.log(res);
        setNewsContent(res.data.data.newsContent);
      });
  };
  return (
    <div className="articledetail">
      <WingBlank>
        <div dangerouslySetInnerHTML={{ __html: newsContent }}></div>
      </WingBlank>
    </div>
  );
}
