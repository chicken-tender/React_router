import React from "react";
import { Link } from "react-router-dom";

const BestBoard = () => {

  return (
    <>
      <Link to="/best/home">메인</Link>
      <h1>베스트 게시판</h1>
      <p>정보 공유, Q&A 게시판의 추천수가 100 이상인..웅앵</p>

    </>
  );
}

export default BestBoard;