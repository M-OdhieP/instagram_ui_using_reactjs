import "../css/pages.css";

import { Col, Container, Row } from "react-bootstrap";

import {
  BsPlusSquare,
  BsHeart,
  BsChatLeft,
  BsPlusCircleFill,
  BsThreeDotsVertical,
  BsBookmark,
  BsHeartFill,
  BsDot,
} from "react-icons/bs";

import { FiSend } from "react-icons/fi";
import { useState } from "react";
export default function Homepage() {
  const [like, setLike] = useState(false);
  console.log(like);

  const stories = [
    {
      key: 1,
      name: "dahyunnee",
      img: "/profil_pic/dahyun_profile_pic.jpg",
    },
    {
      key: 2,
      name: "jennyrubyjane",
      img: "/profil_pic/jennie_profile_pic.jpg",
    },
    {
      key: 3,
      name: "yejii",
      img: "/profil_pic/yeji.jpg",
    },
    {
      key: 4,
      name: "thinkaboutzu",
      img: "/profil_pic/tzuyu_profile_pic.jpg",
    },
    {
      key: 5,
      name: "ryujin",
      img: "/profil_pic/ryujin.jpg",
    },
    {
      key: 6,
      name: "jisso",
      img: "/profil_pic/jiso_profile_pic.jpg",
    },
    {
      key: 7,
      name: "thinkaboutzu",
      img: "/profil_pic/tzuyu_profile_pic.jpg",
    },
    {
      key: 8,
      name: "jennyrubyjane",
      img: "/profil_pic/jennie_profile_pic.jpg",
    },
    {
      key: 9,
      name: "jisso",
      img: "/profil_pic/jiso_profile_pic.jpg",
    },
    {
      key: 10,
      name: "thinkaboutzu",
      img: "/profil_pic/tzuyu_profile_pic.jpg",
    },
  ];

  const posts = [
    {
      key: "234",
      name: "jennierubyjane",
      profil: "/profil_pic/jennie_profile_pic.jpg",
      postImage: "/post/jennie_post.jpg",
      postCaption: "같은 사진 odhie",
      getLike: true,
      like1: "/profil_pic/tzuyu_profile_pic.jpg",
      like2: "/profil_pic/dahyun_profile_pic.jpg",
      like3: "/profil_pic/jiso_profile_pic.jpg",
      likeNum: "132.354.721",
      commentNum: "231.643",
      date: "25 mei",
    },
    {
      key: "354",
      name: "dahyunnee",
      profil: "/profil_pic/dahyun_profile_pic.jpg",
      postImage: "/post/dahyun_post.jpg",
      postCaption: "회망은 꿈이 아니라 꿈을 실현하는 방법이다",
      getLike: true,
      like1: "/profil_pic/tzuyu_profile_pic.jpg",
      like2: "/profil_pic/dahyun_profile_pic.jpg",
      like3: "/profil_pic/jiso_profile_pic.jpg",
      likeNum: "54.354.721",
      commentNum: "65.643",
      date: "21 mei",
    },
    {
      key: "354354",
      name: "yeji",
      profil: "/profil_pic/yeji.jpg",
      postImage: "/post/yeji.jpg",
      postCaption: "회망은 꿈이 아니라 꿈을 실현하는 방법이다",
      like1: "/profil_pic/jennie_profile_pic.jpg",
      like2: "/profil_pic/yeji.jpg",
      like3: "/profil_pic/jiso_profile_pic.jpg",
      likeNum: "542.354.721",
      commentNum: "165.643",
      date: "21 mei",
    },
    {
      key: "321",
      name: "dahyunnee",
      profil: "/profil_pic/dahyun_profile_pic.jpg",
      postImage: "/post/Dahyun_TWICE4_Teaser.jpg",
      getLike: true,
      postCaption: "odhie odhie hehe",
      like1: "/profil_pic/tzuyu_profile_pic.jpg",
      like2: "/profil_pic/dahyun_profile_pic.jpg",
      like3: "/profil_pic/jiso_profile_pic.jpg",
      likeNum: "543.354.721",
      commentNum: "345.643",
      date: "20 mei",
    },
    {
      key: "756",
      name: "ryujin",
      profil: "/profil_pic/ryujin.jpg",
      postImage: "/post/ryujin.jpg",
      postCaption: "new profile picture",
      like1: "/profil_pic/jennie_profile_pic.jpg",
      getLike: true,
      like2: "/profil_pic/ryujin.jpg",
      like3: "/profil_pic/yeji.jpg",
      likeNum: "51.354.721",
      commentNum: "32.643",
      date: "20 mei",
    },
  ];

  return (
    <Container className=" ">
      <Row className="mt-3 justify-content-between ">
        <Col xs="7" md="6" lg="4">
          <img src="/img/instagram.png" className="img-fluid" />
        </Col>
        <Col className="h1   m-0 me-0 m-auto" xs="4" sm="4" md="4" lg="3">
          <div className="d-flex justify-content-between">
            <BsPlusSquare />
            <BsHeart />
            <BsChatLeft />
          </div>
        </Col>
      </Row>
      <div className="gap-3 mt-3   d-flex overflow-auto story-container border-bottom">
        <div className="  text-center">
          <div className=" position-relative">
            <img
              src="https://dummyimage.com/75x75/8c8c8c/ffffff&text=Odhie"
              className="story"
            />
            <BsPlusCircleFill className="my-story  position-absolute bottom-0 end-0" />
          </div>
          <p className="font-story">Cerita Anda</p>
        </div>

        {stories.map((story) => (
          <div className="text-center  ">
            <div className="position-relative stories">
              <img
                src={story.img}
                className="story other-story border border-light border-3 "
              />
              <div className="rounded-circle position-absolute top-50 start-50 translate-middle circle-story"></div>
            </div>
            <p className="font-story">{story.name}</p>
          </div>
        ))}
      </div>

      {posts.map((post) => (
        <section key={post.key}>
          <Row className="mt-3">
            <Col className="  d-flex">
              <div className="position-relative post ">
                <img
                  src={post.profil}
                  className="post-profile-pic rounded-circle border border-light border-2"
                  style={{ width: "36px", height: "36px", objectFit: "cover" }}
                />
                <div className="rounded-circle position-absolute top-50 start-50 translate-middle circle-post"></div>
              </div>
              <p className=" m-auto ms-2 fw-bold">{post.name}</p>

              <div className=" m-auto me-0 h4">
                <BsThreeDotsVertical />
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <img
              src={post.postImage}
              className="img-fluid"
              onDoubleClick={function () {
                if (like) {
                  setLike(false);
                } else {
                  setLike(true);
                }
              }}
            />
          </Row>
          <Row className="mt-2 h1">
            <Col className="d-flex justify-content-between " xs="4" lg="3">
              {like ? <BsHeartFill className="text-danger" /> : <BsHeart />}

              <BsChatLeft />
              <FiSend />
            </Col>
            <Col className="d-flex justify-content-end">
              <BsBookmark />
            </Col>
          </Row>

          <Row>
            <div className="d-flex">
              <div className="position-relative" style={{ width: "70px" }}>
                <img
                  src={post.like1}
                  className="like-pic-post rounded-circle border border-light border-2 position-absolute"
                  style={{
                    width: "32px",
                    height: "32px",
                    objectFit: "cover",
                    top: "0",
                    left: "0px",
                  }}
                />
                <img
                  src={post.like2}
                  className="like-pic-post rounded-circle  border border-light border-2 position-absolute"
                  style={{
                    width: "32px",
                    height: "32px",
                    objectFit: "cover",
                    top: "0",
                    left: "15px",
                  }}
                />
                <img
                  src={post.like3}
                  className="like-pic-post rounded-circle  border border-light border-2 position-absolute"
                  style={{
                    width: "32px",
                    height: "32px",
                    objectFit: "cover",
                    top: "0",
                    left: "30px",
                  }}
                />
              </div>

              <p className="m-auto ms-1 mt-1">
                Disukai Oleh <b>Odhie</b> dan <b>{post.likeNum}</b>
              </p>
            </div>
            <p className="mt-2">
              <span className=" fw-bold">{post.name}</span> {post.postCaption}
            </p>
            <p className="text-muted m-0">
              Lihat semua {post.commentNum} komentar
            </p>
            <p>
              <span className="text-muted">
                {post.date} <BsDot />
              </span>
              Lihat terjemahan
            </p>
          </Row>
        </section>
      ))}
    </Container>
  );
}
