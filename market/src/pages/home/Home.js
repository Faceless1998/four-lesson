import React from "react";
import "./home.css";
import img1 from "./assets/SUZ-2025_KQ_CashOffer_SC_2500x1227_F.jpg";
import img2 from "./assets/SUZ-2024_DR-Z4S_ShowCase_Hero_2500x1227.jpg";
import img3 from "./assets/2024GSX8RMicrositeLifestyleHeader2500x1227R10.jpg";
import logo from "./assets/Suzuki-Logo.wine.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { AiFillCodeSandboxCircle } from "react-icons/ai";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

export const Home = () => {

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    }


    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

  return (
    <>
      <div className="nav">
        <a href="#">
          <img src={logo} />
        </a>
        <input type="text" placeholder="Search" />
        <div className="mahc">
          <a href="./suzuki.html">
            <div className="hom">HOME</div>
          </a>
          <a href="model.html">
            <div className="mod">MARKET</div>
          </a>
          <a href="./About.html">
            <div className="abt">ABOUT</div>
          </a>
          <div className="con">
            <div className="dropdown">
              <button onClick={myFunction} className="dropbtn">
                CONTACT
              </button>
              <div id="myDropdown" className="dropdown-content">
                <Link to="/">
                  <i className="fa-solid fa-phone" />
                  Phone Number
                </Link>
                <Link to="/about">
                  <i className="fa-solid fa-location-dot" />
                  Location
                </Link>
                <a href="#contact">
                  <i className="fa-solid fa-map-location-dot" />
                  Find A Dealer
                </a>
              </div>
            </div>
          </div>
          <a href="./sign.html">
            <div className="sign">SIGN UP</div>
          </a>
        </div>
        <div className="line">|</div>
        <div className="fasta">
          <div className="face">
            <i className="fa-brands fa-square-facebook" />
          </div>
          <div className="insta">
            <i className="fa-brands fa-instagram" />
          </div>
          <div className="tvit">
            <i className="fa-brands fa-square-twitter" />
          </div>
        </div>
      </div>

      <div className="why">
        <img src={img1} />
        <div className="text">
          WHY PEOPLE ARE TALKING ABOUT US
          <div className="tex">
            Suzuki bikes have been a game-changer in the world of two-wheelers,
            offering cutting-edge technology, unmatched performance, and
            exceptional value. From the sleek design of their sport bikes to the
            rugged durability of their off-road models, Suzuki is a brand that
            continues to push boundaries. Whether it's for daily commuting,
            long-distance touring, or adrenaline-pumping adventure, Suzuki bikes
            provide the perfect blend of innovation, style, and reliability that
            riders everywhere can't stop talking about.
          </div>
        </div>
      </div>
      <div className="perf">
        <img src={img2} />
        <div className="great">
          GREAT PERFORMANCE THAT MATTERS IN FUTURE
          <div className="per">
            Suzuki bikes are not just built for today—they’re designed with the
            future in mind. With continuous advancements in engine technology,
            sustainability, and innovation, Suzuki is committed to delivering
            exceptional performance for riders everywhere. Whether it’s through
            improved fuel efficiency, smarter safety features, or next-level
            riding dynamics, Suzuki is paving the way for an exciting future in
            biking, ensuring that every ride is as thrilling as the first.
          </div>
        </div>
      </div>
      <div className="sel">BEST SELLERS</div>

      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="haya">HAYABUSA</div>
          <div class="moto">
            <img src="./ASSETS/159-106_DNX_2400x1600.png" />
            <div class="tex">
              The Suzuki Hayabusa is a legendary sportbike, first released in
              1999, known for its speed and performance. With a 1,340cc engine,
              it was once the fastest production motorcycle, reaching speeds
              over 190 mph. Combining power, precision, and advanced design, the
              Hayabusa remains an icon in the superbike world.
              <div class="xazi">
                <hr></hr>
              </div>
              <a href="#">
                <div class="vi">VIEW</div>
              </a>
              <div class="pr">
                Price: <div class="dolar">19,399$</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

      <div className="ride">
        <div className="two">
          <img src={img3} />
        </div>
        <div className="free">RIDE FREELY ON THE ROADS</div>
      </div>
      <section>
        <div className="fin">
          <div className="column">
            <div className="stay">
              STAY IN THE LOOP
              <div className="icon">
                <i className="fa-brands fa-square-facebook" />
                <i className="fa-brands fa-instagram" />
                <i className="fa-brands fa-square-twitter" />
              </div>
            </div>
            <div className="ab">
              <div className="absuzu">ABOUT SUZUKI</div>
              <div className="absu">
                <div className="fabri">About Suzuki</div>
                <div className="fabri">History</div>
                <div className="fabri">Fabrication</div>
                <div className="fabri">News</div>
                <div className="fabri">Press</div>
                <div className="fabri">Careers</div>
                <div className="fabri">Global Suzuki</div>
              </div>
            </div>
            <div className="res">
              <div className="resor">RESOURCES</div>
              <div className="find">
                <div className="fabri">Contact us</div>
                <div className="fabri">Find a Dealer</div>
                <div className="fabri">Become a Dealer</div>
                <div className="fabri">Current Offers</div>
                <div className="fabri">Events</div>
                <div className="fabri">Rider Education</div>
                <div className="fai">FAQ</div>
                <div className="fabri">Manuals</div>
                <div className="pro">Protection Programs</div>
                <div className="fabri">Safety Recalls</div>
                <div className="fabri">Dealer Awards</div>
              </div>
            </div>
          </div>
          <div className="long">
            <hr />
          </div>
          <div className="safety">
            For your safety, always wear a helmet, eye protection, and
            protective clothing when riding any motorcycle or ATV. Never ride
            under the influence of alcohol or other drugs. Study your owner's
            manual and always inspect your Suzuki before riding. Take a riding
            skills course. For the MSF street course nearest you, call
            1-800-446-9227. Off-road riders can enroll in the DirtBike SchoolSM
            by calling 1-877-288-7093. ATV riders can call the SVIA at
            1-800-852-5344 and we’ll even pay for the training. Suzuki
            engineered the GSX-Rs™, Hayabusa, and the QuadSport Z400 for
            experienced riders.
          </div>
        </div>
      </section>
    </>
  );
};
