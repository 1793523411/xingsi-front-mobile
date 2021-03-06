# 描述

[移动端地址(请在移动端查看)](http://xs.xsgzs.cn/)

技术栈：react，antdmobile

## 原版相册列表不含下拉加载更多

```js
import React,{useState,useEffect} from "react";
import { Button } from "antd-mobile";
import ImgCard from "../../components/ImgCard";
import QueueAnim from "rc-queue-anim";
import axios from 'axios'

export default function Image() {
  const [show, setShow] = useState(true);
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("xxx")
      .then((res) => {
        console.log(res.data.data.list);
        setImgList(res.data.data.list);
      });
  };
  const onClick = () => {
    setShow(!show);
  };
  return (
    <>
      {/* <Button type="primary" onClick={onClick}>
        Switch
      </Button> */}
      {imgList && (
        <QueueAnim delay={300} interval={150}>
          {imgList.map((item) => {
            return (
              <ImgCard
              key={item.albumId}
              albumId={item.albumId}
              albumName={item.albumName}
              thumbUrl={item.thumbUrl}
              />
            );
          })}
        </QueueAnim>
      )}
    </>
  );
}

```

## 原文章列表 不带下拉加载更多

```js
import React, { useState, useEffect } from "react";
import { Button } from "antd-mobile";
import QueueAnim from "rc-queue-anim";
import ArtileCard from "../../components/ArticleCard";

import axios from "axios";

export default function Article() {
  const [show, setShow] = useState(true);

  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("xxx")
      .then((res) => {
        console.log(res.data.data.list);
        setArticleList(res.data.data.list);
      });
  };

  const onClick = () => {
    setShow(!show);
  };

  return (
    <>
      {/* <Button type="primary" onClick={onClick}>
        Switch
      </Button> */}
      {articleList.length!==0 && (
        <QueueAnim  delay={300} interval={150}>
          {articleList.map((item) => {
            return (
              <ArtileCard
                key={item.newsId}
                newsId={item.newsId}
                newsTitle={item.newsTitle}
                authorName={item.authorName}
                createTime={item.createTime}
                newsContentView={item.newsContentView}
                newsPictureViewUrl={item.newsPictureViewUrl}
              />
            );
          })}
        </QueueAnim>
      )}
    </>
  );
}

```
