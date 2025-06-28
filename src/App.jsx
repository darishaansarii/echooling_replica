import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Button from "./Components/Button/Button.jsx";
import Heading from "./Components/Heading/Heading.jsx";
import Academic_card from "./Components/Academic_card/Acadmeic_card.jsx";
import CampusCard from "./Components/Campus_card/Campus_card.jsx";
import CoursesCard from "./Components/Courses_card/Courses_card.jsx";
import Academic_card_1 from "./Landing Page Images/Academic_card_1.png";
import Academic_card_2 from "./Landing Page Images/Academic_card_2.png";
import Academic_card_3 from "./Landing Page Images/Academic_card_3.png";
import Academic_card_4 from "./Landing Page Images/Academic_card_4.png";
import welcome from "./Landing Page Images/welcome.png";
import campus from "./Landing Page Images/campus_img.png";
import icon_1 from "./Landing Page Images/icon-1.svg";
import icon_2 from "./Landing Page Images/icon-2.svg";
import icon_3 from "./Landing Page Images/icon-3.svg";
import courses_1 from "./Landing Page Images/courses_card_1.png";
import courses_2 from "./Landing Page Images/courses_card_2.png";
import courses_3 from "./Landing Page Images/courses_card_3.png";
import courses_4 from "./Landing Page Images/courses_card_4.png";
import LearnerStats from "./Components/Learner_Stats/LearnerStats.jsx";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="hero">
        <div className="content-written">
          <span className="hero-redBG">Great Quality Cocial Life</span>
          <h1>Discover the world of possible university.</h1>
          <Button color="white">Admissions</Button>
        </div>
        <div className="content-videoInro">
          <i className="fa-solid fa-circle-play"></i>
          <h5>Watch Video Intro</h5>
        </div>
      </div>

      <div className="academics">
        <Heading text="Academics" />
        <div className="card-container">
          <Academic_card message="Let's talk science" image={Academic_card_1} />
          <Academic_card message="Innovative Courses" image={Academic_card_2} />
          <Academic_card message="Cloud Storage" image={Academic_card_3} />
          <Academic_card message="Online Education" image={Academic_card_4} />
        </div>
      </div>

      <div className="welcome">
        <div className="img-container">
          <img src={welcome} alt="" />
        </div>
        <div className="content">
          <h1>
            Welcome to
            <br /> <span className="red">Echooling LMS Platform</span>
          </h1>
          <p className="fontSizeLarger">
            Education is both the act of teaching knowledge to others and <br />{" "}
            the act of receiving knowledge from someone else.
          </p>

          <p className="fontSizeSmaller">
            Have questions?{" "}
            <a href="#" className="red">
              Get Free Guide
            </a>
          </p>

          <br />
          <hr />

          <p className="fontSizeSmaller">
            Education also refers to the knowledge received through schooling
            instruction <br />
            and to the institution of teaching as a whole. The main purpose of
            education <br />
            is the integral development of a person.
          </p>

          <div className="container">
            <Button color="black">
              Read More <i className="fa-solid fa-arrow-right"></i>
            </Button>
            <span className="support">
              <i class="fa-solid fa-message"></i>
              <p className="fontSizeSmall">
                Get Support <br />{" "}
                <span className="bold">support@react.com</span>
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="campus_life">
        <Heading text="Campus Life" />

        <div className="campus_container">
          <div className="material">
            <CampusCard
              image={icon_1}
              heading="Do More, Stress Less"
              para="Why I say old chap that is spiffing he legged it in my flat easy peasy."
              bool={true}
            />
            <CampusCard
              image={icon_2}
              heading="The Business Intelligence"
              para="Why I say old chap that is spiffing he legged it in my flat easy peasy."
              bool={true}
            />
            <CampusCard
              image={icon_3}
              heading="System Administration"
              para="Why I say old chap that is spiffing he legged it in my flat easy peasy."
              bool={false}
            />
          </div>
          <div className="imageCamp">
            <img src={campus} alt="" />
          </div>
        </div>

        <div className="btnCamp">
          <Button color="black">
            More About Campus Life <i className="fa-solid fa-arrow-right"></i>
          </Button>
        </div>
      </div>

      <div className="courses">
        <Heading text="Popular Courses" />
        <div className="coursesCard">
          <CoursesCard
            img={courses_1}
            noOfLessons="5"
            noOfStd="56"
            heading="Dave conservatoire is the Entirely free online"
            price="72.00"
          />
          <CoursesCard
            img={courses_2}
            noOfLessons="4"
            noOfStd="77"
            heading="Strategy law and Organization foundation"
            price="68.00"
          />
          <CoursesCard
            img={courses_3}
            noOfLessons="4"
            noOfStd="77"
            heading="Python for Data Science & Machine Learning"
            price="68.00"
          />
          <CoursesCard
            img={courses_4}
            noOfLessons="4"
            noOfStd="77"
            heading="The complete web develop Ment bootcamp."
            price="68.00"
          />
        </div>
        <div className="btnCamp">
          <Button color="black">
            View All Courses <i className="fa-solid fa-arrow-right"></i>
          </Button>
        </div>
      </div>

      <div className="learner">
        <LearnerStats />
      </div>
    </>
  );
};

export default App;
