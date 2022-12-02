import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/__san_photography_";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dr5ikco2g/image/upload/v1666444714/IMG_8623_iomuuh.jpg"
              alt="Founder"
            />
            <Typography>Sanket Jadhav</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @sanket_jadhav. Only with the
              purpose to learn MERN Stack technology.
            </span>

            <div className="aboutSectionContainer2">
            <a
              href="https://youtube.com/channel/UCMRjlYl04PQfuIp8Cz-iCmw"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/__san_photography_/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>


          </div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dr5ikco2g/image/upload/v1666517814/IMG_20220821_091405_qz9rv4.jpg"
              alt="Founder"
            />
            <Typography>Mahesh Khairkar</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @mahesh_khairkar. Only with the
              purpose to learn MERN Stack technology.
            </span>

  <div className="aboutSectionContainer2">
            <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/mahesh_khairkar/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>

          </div>
          {/* <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/meabhisingh" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
