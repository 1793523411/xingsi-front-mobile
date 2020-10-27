import React from "react";

import { Card, WingBlank, WhiteSpace } from "antd-mobile";

export default function HistoryPersonCard(props) {
  return (
    <div>
      <WingBlank size="lg">
        <Card>
          <Card.Header title={props.person.name} />
          <Card.Body>
          <WingBlank size="lg">
              <br/>
            <div>{props.person.job}</div>
            <br/>
            <div>{props.person.grade}</div>
            </WingBlank>
          </Card.Body>
          <Card.Footer extra={<div>{props.person.comment}</div>} />
        </Card>
        <WhiteSpace size="lg" />
      </WingBlank>
    </div>
  );
}
