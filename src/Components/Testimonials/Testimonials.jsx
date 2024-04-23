import React, { useRef } from "react";
import "./testimonials.css";
import next_icon from "../../assets/next_icon.png";
import back_icon from "../../assets/back_icon.png";
import user_1 from "../../assets/user_1.png";
import user_2 from "../../assets/user_2.png";
import user_3 from "../../assets/user_3.png";
import user_4 from "../../assets/user_4.png";

const Testimonials = () => {
  const slider = useRef();
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  let tx = 0;
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} className="next-btn" onClick={slideForward} />
      <img src={back_icon} className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus earum repellendus rerum pariatur neque ipsa soluta
                animi inventore ipsam! Necessitatibus quos soluta quae deserunt
                ipsam, molestiae suscipit quis repellendus tenetur?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus earum repellendus rerum pariatur neque ipsa soluta
                animi inventore ipsam! Necessitatibus quos soluta quae deserunt
                ipsam, molestiae suscipit quis repellendus tenetur?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus earum repellendus rerum pariatur neque ipsa soluta
                animi inventore ipsam! Necessitatibus quos soluta quae deserunt
                ipsam, molestiae suscipit quis repellendus tenetur?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus earum repellendus rerum pariatur neque ipsa soluta
                animi inventore ipsam! Necessitatibus quos soluta quae deserunt
                ipsam, molestiae suscipit quis repellendus tenetur?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
