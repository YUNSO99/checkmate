import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import './bar.css';

const bar = () => {
  return (
    <div className="mate text-center">
      <Container>
        <Row>
          <Col className="col-sm-12 ">
            <span className="badge">MATE</span>
            <span className="text">
              CHECKMATE는 오늘도 여러분을 응원합니다.
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default bar;