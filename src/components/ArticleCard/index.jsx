import React from "react";
import { Card, WhiteSpace,WingBlank } from "antd-mobile";
import { Link } from "react-router-dom";

import time from '../../utils/time'

import './index.css'
export default function ArticleCard(props){
    const item = () => (
        <Link to={"/art/"+props.newsId}>
          <WhiteSpace size="lg" />
          <Card full>
            <Card.Header
              title={props.newsTitle.length > 18 ? props.newsTitle.substring(0,18)+'····':props.newsTitle}
            />
            <Card.Body>
              <div className="article" style={{"backgroundImage":"url("+props.newsPictureViewUrl+")"}}></div>
            </Card.Body>
            <div className="articleCard">
              {/* {props.newsContentView+'~~~~~'} */}
              {props.newsContentView.length > 44?props.newsContentView.substring(0,44)+'····':props.newsContentView}
            </div>
            <Card.Footer
            style={{"paddingTop":5}}
              content={props.authorName}
              extra={<div>{time(props.createTime)}</div>}
            />
          </Card>
          </Link>
      );
    
      return (
        <WingBlank>
            {item()}
        </WingBlank>
      );
}