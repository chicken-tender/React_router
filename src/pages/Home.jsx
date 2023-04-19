import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  return (
    <>
      <Link to="/mentor">멘토 찾기</Link>
      <Link to="/information">정보 공유</Link>
      <Link to="/portfolio">포트폴리오</Link>
      <Link to="/workers">직장인</Link>
      <Link to="/best">베스트</Link>
      <Link to="/qna">Q&A</Link>
      <h1>개발러스</h1>
      <p>환영합니다.</p>
      <p>개발자를 위한 정보 공유 커뮤니티 입니다.</p>
      <ul>
        <li>
          <Link to="/profiles/frontend">Frontend 프로필</Link>
        </li>
        <li>
        <Link to="/profiles/backend">Backend 프로필</Link>
        </li>
      </ul>
      <p style={{ textDecoration: "underline", cursor: "pointer", color: "royalblue"}} onClick={() => nav("/mentor")}>멘토 찾기 페이지로 이동합니다.</p>
    </>
  );
}

export default Home;