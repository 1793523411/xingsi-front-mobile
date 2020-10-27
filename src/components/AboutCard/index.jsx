import React from "react";
import { WingBlank, WhiteSpace } from "antd-mobile";
import Texty from 'rc-texty';
import QueueAnim from "rc-queue-anim";
import 'rc-texty/assets/index.css';

import './index.css'

export default function AboutCard(props) {
  return (
    <div className="aboutFont">
      <WingBlank className="aboutCenter">
      <h2>
      <Texty type="scaleX" duration="1000">
          {props.name}
      </Texty>
      </h2>

      </WingBlank>
      <WhiteSpace size="sm" />
      <WingBlank className="aboutCenter">
      <QueueAnim duration="2000" animConfig={[
            { opacity: [1, 0], translateY: [0, 50] },
            { opacity: [1, 0], translateY: [0, -50] }
          ]}>

          <img key={props.name} src={props.img} className="aboutImg" alt=""/>
      </QueueAnim>
      </WingBlank>
      <WhiteSpace size="sm" />
      <WingBlank>
          <p>
          <Texty type="alpha" mode="random" interval="5">
          {props.desc}
          </Texty>
          </p>
      </WingBlank>
    </div>
  );
}
