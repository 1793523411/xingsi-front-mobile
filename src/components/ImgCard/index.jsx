import React from "react";
import { WingBlank, WhiteSpace, Flex } from "antd-mobile";
import { Link } from "react-router-dom";

import "./index.css";

import time from '../../utils/time.js'

export default function ImgCard(props) {
  const toImgList = (id) => {
    console.log(id);
  };

  const PlaceHolder = ({ className = "", ...restProps }) => (
    <Link to={"/img/" + props.albumId}>
      <div
        className={`placeholder`}
        {...restProps}
        style={{
          backgroundImage: "url(" + props.thumbUrl + ")",
        }}
      >
        <div className="img-inner">
          <div className="img-inner-font">
          {props.albumName}<br></br>
          {props.albumDesc.length > 8 ? props.albumDesc.substring(0,8)+'····':props.albumDesc}
          </div>
          {/* <div className="img-inner-font">
          
          </div> */}
          <div className="img-inner-font2">
          {time(props.albumTime)}
          </div>
        </div>
      </div>
    </Link>
  );

  const WingBlankExample = () => (
    <div style={{ padding: "10px 0" }}>
      <WingBlank>
        <PlaceHolder />
      </WingBlank>
    </div>
  );

  return (
    <div>
      <WingBlankExample />
    </div>
  );
}
