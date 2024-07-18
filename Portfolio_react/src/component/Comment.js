import React from "react";

export default function Comment() {
  let comment = "신지수는 개발 역량뿐 아니라 함께 일하기 너무 좋은 동료였습니다. 항상 문제 해결에 적극적이고, 다른 팀원들의 문제에도 발벗고 도움을 주었습니다. 신지수와 함께한 프로젝트는 항상 성과가 좋았습니다.";
  const memberName = "쁘미 프로젝트 팀원, 민재";

  return (
    <div className="recommend">
      <p>{comment}</p>
      <b>{memberName}</b>
    </div>
  );
}