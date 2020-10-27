import React from "react";
import { Flex, WhiteSpace, WingBlank } from "antd-mobile";

import "./index.css";

export default function Footer() {
  return (
    <div className="footer">
      <Flex style={{textAlign:"center"}}>
        <Flex.Item>
          {" "}
          <img
            src="assets/guanQ.jpg"
            alt=""
            className="footerImg"
          />
          <div>行思官Q</div>
        </Flex.Item>
        <Flex.Item>
          {" "}
          <img
            src="assets/SouHPU.jpg"
            alt=""
            className="footerImg"
          />
          <div>行思公众号</div>
        </Flex.Item>
      </Flex>

      <div>
        <h3 style={{ textAlign: "center" }}>友情链接</h3>
        <WingBlank>
          <a href="http://www.hpu.edu.cn/www/index.html" style={{color:"#000"}}>河南理工大学</a>
          <WhiteSpace size="sm" />
          <a href="http://jwc.hpu.edu.cn/jwweb/index.aspx" style={{color:"#000"}}>
            河南理工大学教务处
          </a>
          <WhiteSpace size="sm" />
          <a href="http://218.196.240.27/srun_portal_pc.php?ac_id=2&wlanuserip=10.16.66.10&ssid=HPUNET" style={{color:"#000"}}>
            河南理工大学上网认证系统
          </a>
        </WingBlank>
      </div>
      <hr />
      <div style={{textAlign:"center",margin:"1vh"}}>©2020 <a href="http://beian.miit.gov.cn/" style={{color:"#000"}}> 豫ICP备20006399号</a> | 行思工作室</div>
    </div>
  );
}
