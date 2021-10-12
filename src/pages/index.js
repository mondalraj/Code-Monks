import React from 'react'
import { useEffect } from 'react'
import Login from '../components/Login'
import '../styles/index.css'

const IndexPage = () => {


  useEffect(() => {
    const appPaymentPointer = "$ilp.uphold.com/8fJNiYmhgXE6";
    var metaTag = document.createElement("meta");
    metaTag.setAttribute("name", "monetization");
    metaTag.content = appPaymentPointer;
    document.getElementsByTagName("head")[0].appendChild(metaTag);

  }, []);

  return (
    <div className="indexPage">
      <div className="landingPage">
        <div className="logoContainer">
          <span className="logo">&#60; Code</span>
          <span className="logo logo2">_Monks &#62;</span>
        </div>

        <div className="rightleft-flex">
          <div className="left">
            <div className="text-flex">
              <div className="tagline tag1">
                Let the oppurtunities from TECH Giants
              </div>
              <div className="tagline tag2">knock your door!</div>
              <div className="para">
                Get updates about reputed hackathons, contests, internships,
                events etc...
              </div>
              {/* <Link to="/home" className="cta">Get Started</Link> */}
              <Login />
            </div>
          </div>
          <div className="right">
            <img src="heroOmage.png" alt="" />
          </div>
        </div>
        <div className="copyright">Copyright@2021 | Code_Monks</div>
      </div>
    </div>
  )
}

export default IndexPage
