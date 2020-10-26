import React from "react";
import { WingBlank, WhiteSpace } from "antd-mobile";
import { Link } from "react-router-dom";

import "./index.css";

export default function ImgCard(props) {
  const toImgList = (id) => {
    console.log(id);
  };

  const PlaceHolder = ({ className = "", ...restProps }) => (
    <Link to={"/img/"+ props.albumId}>
      <div
        className={`placeholder`}
        {...restProps}
        style={{
          backgroundImage:
            "url("+props.thumbUrl+")",
        }}
      >
        <div className="img-inner">
          <span className="img-inner-font">{props.albumName}</span>
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
