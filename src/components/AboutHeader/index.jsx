import React from "react";
import { WingBlank, WhiteSpace } from "antd-mobile";
import Texty from "rc-texty";
import "rc-texty/assets/index.css";

import QueueAnim from "rc-queue-anim";

export default function AboutHeader() {
  return (
    <div className="aboutFont">
        <WhiteSpace size="lg" />
      <h1 style={{ textAlign: "center" }}>
        {" "}
        <Texty type="bounce">行思工作室</Texty>
      </h1>
      <WingBlank >
        <h6 style={{ textAlign: "center" }}>
          <Texty>且学且思，且行且思，行则有序，思则无疆，是为行思 !</Texty>
        </h6>
      </WingBlank>
      <WingBlank>
      <QueueAnim delay={100} duration={1700} type="scale">
        <p key="xsgzs">
          {/* <Texty type="scaleBig" mode="random" interval="1"> */}
            大学生网络工作室又称 “ 行思工作室 ”
            ，是河南理工大学校团委领导下的社团组织。工作室成立之初负责部分官方网站的搭建与维护，经过历届的发展与创新，现设有程序组、设计组、视创组、游戏开发组、文案组运营组五个组，每个组各有特色、大神云集，始终贯行着
            “ 参与、协作、奉献 ” 的精神。
            工作室主要以学习计算机应用技术为主，定期进行各方向的专业技术培训指导，扎实基础之后即可帮助完成学校、个人下发的网站项目、3D游戏开发、海报创作、视频制作、文案策划、微博微信运营等工作。
          {/* </Texty> */}
        </p>
        </QueueAnim>
      </WingBlank>
      
    </div>
  );
}
