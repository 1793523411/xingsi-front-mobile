import React, { useState, useEffect } from "react";
import axios from "axios";
import { WingBlank } from "antd-mobile";
import timer from '../../utils/time'

import "./index.css";
import "./quill.core.css";
// import './quill.snow.css'
import "./quill.bubble.css";

export default function ArticleList(props) {
  const [newsContent, setNewsContent] = useState();
  const [newsTitle, setNewsTitle] = useState(); //authorName createTime visited
  const [authorName, setAuthorName] = useState(); //authorName createTime visited
  const [createTime, setCreateTime] = useState(); //authorName createTime visited
  const [visited, setVisited] = useState(); //authorName createTime visited

  useEffect(() => {
    getDate();
  }, []);

  const getDate = () => {
    console.log(props.match.params.id);
    axios
      .get("http://101.201.125.229:8081/news/detail/" + props.match.params.id)
      .then((res) => {
        console.log(res.data.data);
        setNewsContent(res.data.data.newsContent);
        setNewsTitle(res.data.data.newsTitle);
        setAuthorName(res.data.data.authorName)
        setCreateTime(res.data.data.createTime)
        setVisited(res.data.data.visited)
      });
  };
  return (
    <div className="articledetail">
      <WingBlank>
        <h2>{newsTitle}</h2>
        <div style={{display:"inline-block"}}>
          <div style={{display:"inline-block",color:"#666"}}><i className="iconfont icon-yanjing"></i> {visited}&nbsp;&nbsp; </div>
          <div style={{display:"inline-block",color:"#666"}}><i className="iconfont icon-bussiness-man-fill"></i> {authorName} &nbsp;&nbsp;</div>
          <div style={{display:"inline-block",color:"#666"}}> <i className="iconfont icon-clock-fill"></i> {timer(createTime)} </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: newsContent }}></div>
        {/* {
        <div>
          <p>
            <img src="http://101.201.125.229:8888/group1/M00/00/00/rBkFll-jvcuAa49iAAJrfw830V4666.gif" />
          </p>
        </div>
      } */}
      </WingBlank>
    </div>
  );
}
