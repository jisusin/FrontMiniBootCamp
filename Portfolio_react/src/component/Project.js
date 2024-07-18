import React from "react";

export default function Comment() {
  return (
    <div id="project-container">
      <div id="project-description">
        <h2>웹시스템프로그래밍 1 팀 프로젝트</h2>
        <p>Html, Css, Javascript</p>
        <p>한양대 술집을 소개하는 웹 페이지를 디자인했습니다.</p>
        <a href="#" className="link">노션링크</a>
        <a href="#" className="link">깃허브링크</a>
      </div>
      <div id="project-image">
        <img
          src={`${process.env.PUBLIC_URL}/img/카테고리 검색창.png`}
          alt="카테고리 검색창"
        />
        <img
          src={`${process.env.PUBLIC_URL}/img/HOTNEW추천.png`}
          alt="HOT/NEW 술집 추천"
        />
        <img
          src={`${process.env.PUBLIC_URL}/img/상세페이지.png`}
          alt="술집 상세페이지"
        />
      </div>
    </div>
  );
}