import React, { useState, useEffect } from "react";
import { Steps, WingBlank, WhiteSpace, Card } from "antd-mobile";
import axios from "axios";
import Texty from 'rc-texty';

import "./index.css";
import 'rc-texty/assets/index.css';

const Step = Steps.Step;

export default function History(props) {
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    axios.get("http://101.201.125.229:8081/history").then((res) => {
      setHistoryList(res.data.data);
    });
  }, []);

  return (
    <div>
      <Steps>
        {/* <QueueAnim> */}
        {historyList.map((item) => {
          return (
              <Step
                title={
                  <Card className="historyCard">
                    <Card.Body>
                    <div className="historyCardBody"><Texty type="flash">{item.description}</Texty></div>
                    </Card.Body>
                    <Card.Footer content={item.year + "(年)"} />
                  </Card>
                }
                icon={
                  <i
                    className="iconfont icon-collection_fill"
                    style={{ color: "#f9c0c0" }}
                  ></i>
                }
                onClick={() => props.history.push('/history/'+item.yearId)}
                key={item.yearId}
              />
          );
        })}
        {/* </QueueAnim> */}
      </Steps>
    </div>
  );
}
