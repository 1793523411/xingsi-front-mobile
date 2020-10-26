import React from "react";

import './index.css'

import ArticleCard from '../ArticleCard'
import QueueAnim from "rc-queue-anim";

export default function IndexArticle(props) {

  return (
    <div>
      <QueueAnim delay={300} interval={150}>
      {
        props.Article.map((item => {
          return  <ArticleCard 
          key={item.newsId}
          newsId={item.newsId}
          newsTitle={item.newsTitle}
          authorName={item.authorName}
          createTime={item.createTime}
          newsContentView={item.newsContentView}
          newsPictureViewUrl={item.newsPictureViewUrl}
          />
        }))
      }
      </QueueAnim>
    </div>
  );
}
