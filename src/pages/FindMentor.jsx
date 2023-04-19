import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

const FindMentor = () => {
  const nav = useNavigate();
  const isLogin = false;

  if(!isLogin) {
    return <Navigate to='/login' replace={true} />;
  }
  return (
    <>
      <h1>멘토 찾기</h1>
      <p>직접 현업자와 일대일 대화를 할 수 있습니다!</p>
      <button onClick={() => nav(-1)}>뒤로가기</button>
    </>
  );
}

export default FindMentor;