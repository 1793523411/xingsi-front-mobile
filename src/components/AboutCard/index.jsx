import React from "react";
import { WingBlank, WhiteSpace } from "antd-mobile";
import Texty from "rc-texty";
import QueueAnim from "rc-queue-anim";

import "rc-texty/assets/index.css";

import "./index.css";

export default function AboutCard(props) {
  return (
    <div className="aboutFont">
      <WingBlank className="aboutCenter">
        <h2>
          <Texty type="scaleX" duration="1500">
            {props.name}
          </Texty>
        </h2>
      </WingBlank>
      <WhiteSpace size="sm" />
      <WingBlank className="aboutCenter">
        <QueueAnim
          duration="2000"
          animConfig={[
            { opacity: [1, 0], translateY: [0, 50] },
            { opacity: [1, 0], translateY: [0, -50] },
          ]}
        >
          <img key={props.name} src={props.img} className="aboutImg" alt="" />
        </QueueAnim>
      </WingBlank>
      <WhiteSpace size="sm" />
      <WingBlank>
        <QueueAnim delay={100} duration={1700} type="scale">
          <p key={props.name}>
            {props.desc}
          </p>
        </QueueAnim>
      </WingBlank>
    </div>
  );
}
