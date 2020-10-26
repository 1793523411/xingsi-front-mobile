import React, { useEffect, useState } from "react";
import { WingBlank, WhiteSpace, Flex } from "antd-mobile";
import axios from "axios";
import { Link } from "react-router-dom";
import QueueAnim from "rc-queue-anim";

import Banner from "../../components/Banner";
import IndexArticle from "../../components/IndexArticle";
import IndexImage from "../../components/IndexImage";
import Footer from "../../components/Footer";

import "./index.css";

export default function Index() {
  const [articleList, setArticleList] = useState([]);
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://101.201.125.229:8081/news?pageNum=1&pageSize=5")
      .then((res) => {
        console.log(res.data.data.list);
        setArticleList(res.data.data.list);
      });
    axios
      .get("http://101.201.125.229:8081/album?pageNum=1&pageSize=5")
      .then((res) => {
        console.log(res.data.data.list);
        setImgList(res.data.data.list);
      });
  };

  return (
    <div className="index">
      <Banner />
      <QueueAnim
        animConfig={[
          { opacity: [1, 0], translateY: [0, 50] },
          { opacity: [1, 0], translateY: [0, -50] },
        ]}
        delay="500"
        duration="1000"
      >
      <WingBlank key="c">
        <Flex justify={"end"}>
          <Flex.Item>
            <h3>行思新闻</h3>
          </Flex.Item>
          <Flex.Item style={{ textAlign: "right" }}>
            <Link to={"/1"} style={{ color: "#000", fontSize: 14 }}>
              <div style={{ zIndex: 99 }}>查看更多</div>
            </Link>
          </Flex.Item>
        </Flex>
      </WingBlank>
      </QueueAnim>

      <IndexArticle Article={articleList} />

      <QueueAnim
        animConfig={[
          { opacity: [1, 0], translateY: [0, 50] },
          { opacity: [1, 0], translateY: [0, -50] },
        ]}
        delay="1000"
        duration="1000"
      >
      <WingBlank key="b">
        <Flex justify={"end"}>
          <Flex.Item>
            <h3>行思相册</h3>
          </Flex.Item>
          <Flex.Item style={{ textAlign: "right" }}>
            <Link
              to={"/2"}
              style={{ color: "#000", fontSize: 14 }}
            >
              <div style={{ zIndex: 99 }}>查看更多</div>
            </Link>
          </Flex.Item>
        </Flex>
      </WingBlank>
      </QueueAnim>

      <IndexImage imgList={imgList} />
      <QueueAnim
        animConfig={[
          { opacity: [1, 0], translateY: [0, 50] },
          { opacity: [1, 0], translateY: [0, -50] },
        ]}
        delay="1000"
        duration="2000"
      >
        <Footer key="a"/>
      </QueueAnim>
    </div>
  );
}
