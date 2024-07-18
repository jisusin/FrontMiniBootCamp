import React from "react";
import Project from "./component/Project";
import Comment from "./component/Comment";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div id="logo">
          <a href="#"><h1>Jisu Portfolio</h1></a>
        </div>
        <nav>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Project">Project</a></li>
            <li><a href="#Recommend">Recommend</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="Home">
        <div id="greeting-container">
          <div id="greeting">
            <div id="greeting-box">👋🏻 안녕하세요 !</div>
            <h1>
              신입 프론트엔드 개발자.<br />
              <span className="gradient-text">Problem Solver.</span><br />
              신지수입니다.
            </h1>
            <div id="greeting-button">
              <button id="button1">
                <a href="https://github.com/jisusin" target="_blank" rel="noopener noreferrer">Github Link</a>
              </button>
              <button id="button2">Resume Link</button>
            </div>
          </div>
          <img id="greeting-image" src={`${process.env.PUBLIC_URL}/img/제리.png`} alt="Profile Image" />
        </div>
        <div id="about">
          <h2>
            끊임없이 배우고<br />
            집요하게 해결하는 프론트엔드 개발자 신지수입니다.
          </h2>
          <p>
            항상 새로운 기술에 열려 있으며, 문제 해결에 대한 열정으로 프로젝트에 임합니다.<br />
            꾸준한 성장과 협업을 통해 새로운 아이디어를 탐험하고 효과적인 솔루션을 찾는 것을 즐깁니다.<br />
            강력한 분석 및 문제 해결 능력으로 효율적이고 확장 가능한 코드를 작성하는 것에 자부심을 가지고 있습니다.<br />
            팀과 함께 협력하며, 사용자 중심의 솔루션을 만들기 위해 노력하고 있습니다.<br />
            끊임없는 도전을 통해 성장하는 개발자로서 기여하고 싶습니다.
          </p>
        </div>
        <div id="technology">
          <h2>기술 스택</h2>
          <p>
            지금까지 활용해 본 기술들입니다.<br />
            넓고 깊은 기술 스택을 얻기 위해 노력하고 있습니다.
          </p>
          <div id="technology-image">
            <img className="image" src={`${process.env.PUBLIC_URL}/img/html.png`} alt="html Image" />
            <img className="image" src={`${process.env.PUBLIC_URL}/img/css.png`} alt="css Image" />
            <img className="image" src={`${process.env.PUBLIC_URL}/img/javascript.png`} alt="javascript Image" />
            <img className="image" src={`${process.env.PUBLIC_URL}/img/react.png`} alt="react Image" />
          </div>
        </div>
      </section>

      <section id="Project">
        <h2>내 프로젝트</h2>
        <Project />
        <Project />
        <Project />
      </section>

      <section id="Recommend">
        <h2>함께 개발한 동료들의 평가</h2>
        <div className="recommend-container">
          <Comment />
          <Comment />
          <Comment />
        </div>
      </section>

      <section id="Contact">
        <div id="contact">
          <h1>
            꼼꼼함과 기술에 대한 집요함으로<br />
            어떤 문제든 해결해내는 프론트엔드 개발자가 되겠습니다.<br />
            감사합니다 ! 😊
          </h1>
        </div>
        <button id="contact-button">
          Contact<br />Me
        </button>
      </section>

      <footer>
        <section id="bottom">
          <div id="social-contact">
            <div id="social-icons">
              <a href="https://www.facebook.com/?locale=ko_KR">
                <img src={`${process.env.PUBLIC_URL}/img/facebook.png`} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530338586&extra_1=s%7Cc%7C547419126431%7Ce%7Cinstagram%20%27%7C&placement=&creative=547419126431&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530338586%26adgroupid%3D126262418054%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D1009871%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gad_source=1&gclid=CjwKCAjwqMO0BhA8EiwAFTLgIEA9z0gl9Vm-kMCSXvzaEClefPCQkE9zeWYPfZFCo-WyVwEzfJrnIRoCU1YQAvD_BwE">
                <img src={`${process.env.PUBLIC_URL}/img/instagram.png`} alt="Instagram" />
              </a>
              <a href="https://kr.linkedin.com/">
                <img src={`${process.env.PUBLIC_URL}/img/linkedin.png`} alt="LinkedIn" />
              </a>
            </div>
          </div>
          <p>Copyright ©2024 All rights reserved</p>
        </section>
      </footer>
    </div>
  );
}

export default App;
