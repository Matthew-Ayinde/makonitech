import React from "react";
import "./MeetTeam.css";
import { Link } from "react-router-dom";
import imgUrl from '../../images/jack-img.png'
import fbIcon from "../../images/fbIcon.png";
import twIcon from "../../images/twIcon.png";
import inIcon from "../../images/inIcon.png";

const teamData = [
  {
    id: "1",
    imgUrl: ["../../images/mary-img.png"],
    name: "Mary Amelia",
    title: "Product Manager",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    fbLink: "www.facebook.com",
    InLink: "www.facebook.com",
    twLink: "www.facebook.com",
  },
  {
    id: "2",
    imgUrl: ["../../images/oliver-img.png"],

    name: "Oliver Queen",
    title: "Product Manager",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    fbLink: "www.facebook.com",
    InLink: "www.facebook.com",
    twLink: "www.facebook.com",
  },
  {
    id: "3",
    imgUrl: ["../../images/jack-img.png"],

    name: "Jack William",
    title: "Product Manager",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    fbLink: "www.facebook.com",
    InLink: "www.facebook.com",
    twLink: "www.facebook.com",
  },
  {
    id: "4",
    imgUrl: ["../../images/elizabeth-img.png"],

    name: "Elizabeth Olivia",
    title: "Product Manager",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    fbLink: "www.facebook.com",
    InLink: "www.facebook.com",
    twLink: "www.facebook.com",
  },
  {
    id: "5",
    imgUrl: ["../../images/sarah-img.png"],

    name: "Sarah Isla",
    title: "Product Manager",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    fbLink: "www.facebook.com",
    InLink: "www.facebook.com",
    twLink: "www.facebook.com",
  },
  {
    id: "6",
    imgUrl: ["../../images/thomas-img.png"],

    name: "Thomas Harry",
    title: "Product Manager",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    fbLink: "www.facebook.com",
    InLink: "www.facebook.com",
    twLink: "www.facebook.com",
  },
];

const MeetTeam = () => {
  return (
    <>
      <section className="team_wrap">
        <div className="header">
          <h3>Meet The Team</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="team_grid">
          {teamData.map((card) => (
            <div key={card.id} className="team_card">
              <div className="team_img">
                {/* <img src={card.imgUrl} alt="" /> */}
                <img src={imgUrl} alt="" />
              </div>
              <div className="img_details">
                <div className="team-title">
                  <h4>{card.name}</h4>
                  <h6>{card.title}</h6>
                </div>
                <div className="card-desc">
                  <p>{card.desc}</p>
                </div>
                <div className="social_icons">
                  <Link to={card.fbLink}>
                    <img src={fbIcon} alt="" />
                  </Link>
                  <Link to={card.InLink}>
                    <img src={twIcon} alt="" />
                  </Link>
                  <Link to={card.twLink}>
                    <img src={inIcon} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="team_btn">
          <button>See More</button>
        </div>
      </section>
    </>
  );
};

export default MeetTeam;
