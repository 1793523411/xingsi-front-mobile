import React, { useState, useEffect } from "react";
import WxImageViewer from "react-wx-images-viewer";
import { WingBlank, WhiteSpace, Flex } from "antd-mobile";
import QueueAnim from "rc-queue-anim";

import "./index.css";
import axios from "axios";

export default function ImgList(props) {
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const [imgList1, setImgList1] = useState([]);
  const [imgList2, setImgList2] = useState([]);

  useEffect(() => {
    getDate();
  }, []);

  const getDate = () => {
    console.log(props.match.params.id);
    axios
      .get("http://101.201.125.229:8081/album/" + props.match.params.id)
      .then((res) => {
        let tmp1 = [];
        let tmp2 = [];
        let tmpimgList = [];
        res.data.data.photosList.forEach((item, index) => {
          tmpimgList.push(item.pictureUrl);
          tmp1.push(item);
          if (index % 2 === 1) {
            tmp2.push(tmp1);
            tmp1 = [];
          }
        });
        setImages(tmpimgList);
        console.log(images);
        tmp1 = [];
        if (res.data.data.photosList.length % 2 === 1) {
          tmp1.push(
            res.data.data.photosList[res.data.data.photosList.length - 1]
          );
          tmp2.push(tmp1);
        }
        // console.log(tmp2);
        // setImgList1(tmp1)
        setImgList2(tmp2);
      });
  };

  const onClose = () => {
    console.log(imgList2)
    setIsOpen(false);
    // console.log("111")
  };

  const openViewer = (index) => {
    console.log(index);
    setIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="app">
      <WhiteSpace size="sm" />
      <WingBlank size="m">
        <div className="img-list">
          <QueueAnim delay={300} interval={150} type="scale">
          {imgList2.map((items, indexs) => {
            return (
              <Flex key={indexs}>
                {items.length === 2
                  ? items.map((item, index) => {
                      return (
                        <Flex.Item>
                          <div
                            className="img"
                            key={index}
                            onClick={() => openViewer(indexs*2+index)}
                            style={{
                              backgroundImage: "url(" + item.pictureUrl + ")",
                            }}
                          ></div>
                        </Flex.Item>
                      );
                    })
                  : items.map((item, index) => {
                      return (
                        <>
                          <Flex.Item>
                            <div
                              className="img"
                              key={item.id}
                              onClick={() => openViewer(indexs*2+index)}
                              style={{
                                backgroundImage: "url(" + item.pictureUrl + ")",
                              }}
                            ></div>
                          </Flex.Item>
                          <Flex.Item>
                            <div className="img" key={item.id}></div>
                          </Flex.Item>
                        </>
                      );
                    })}
              </Flex>
            );
          })}
          </QueueAnim>
        </div>
        {isOpen ? (
          <WxImageViewer
            onClose={() => onClose()}
            urls={images}
            index={index}
          />
        ) : (
          ""
        )}
      </WingBlank>
    </div>
  );
}
