import React from "react";
import { Button } from "antd-mobile";
import Texty from "rc-texty";
import QueueAnim from "rc-queue-anim";
import "rc-texty/assets/index.css";
import { Link } from "react-router-dom";

import Test from "../../pages/Test";
import "./index.css";

export default function Banner(props) {
  return (
    <div className="banner">
      <QueueAnim type="top" duration="1000">
        <div key="a">
          <img
            src="assets/xingsilogo.png"
            alt=""
            className="bannerimg"
          />
        </div>
      </QueueAnim>
      <Test />
      <QueueAnim type="top" delay="2500" duration="2000">
        <div className="bannerbth" key="B">
          <Link to="/3">
            {" "}
            {/* <Button
              type="ghost"
              inline
              size="small"
              className="am-button-borderfix"
              style={{ marginRight: "4px" }}
            > */}
            <div style={{padding:"1vh",color:"#fff"}}>
              了解更多
            {/* </Button>
             */}
             </div>
          </Link>
        </div>
      </QueueAnim>
    </div>
  );
}
