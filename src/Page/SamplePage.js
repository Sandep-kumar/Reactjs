import banner from "../Images/groupdoctor.png";
import HorizantalCard from "../components/HomeComp/HorizantalCard";
import HomeCard from "../components/HomeComp/HomeCard";
import BookmarkCard from "../components/HomeComp/BookmarkCard";
import React, { Component } from "react";

export default class SamplePage extends Component {
  HomeCardData = [
    { icon: "fa fa-user-md fa-2x", text: "Some data" },
    { icon: "fa fa-user-md fa-2x", text: "Some data" },
    { icon: "fa fa-user-md fa-2x", text: "Some data" },
  ];
  BookmarkCard = [
    { link: "/ArticalPageSecond" },
    { link: "/ArticalPageSecond" },
  ];
  HomeCard = [
    {
      heading: "Doctors",
      link: "",
      icon: "fa fa-user-md fa-2x",
      text: "Some discription",
    },
    {
      heading: "Clinlics",
      link: "/ClinlicsPage",
      icon: "fa fa-user-md fa-2x",
      text: "Some discription",
    },
    {
      heading: "Specialities",
      link: "/Specialities",
      icon: "fa fa-user-md fa-2x",
      text: "Some discription",
    },
    {
      heading: "More",
      link: "/MoreRelatedArticlesPage",
      icon: "fa fa-user-md fa-2x",
      text: "Some discription",
    },
  ];
  constructor() {
    super();
    this.state = {
      HomeCardData: this.HomeCardData,
      BookmarkCard: this.BookmarkCard,
      HomeCard: this.HomeCard,
      loading: false,
    };
  }

  render() {
    return (
      <>
        <div
          className="mb-5"
          style={{ width: "100%", backgroundColor: "#e2ecef" }}
        >
          {/* banner */}
          <div
            className="banner"
            style={{
              height: "30vh",
              opacity: 0.8,
              backgroundImage: `url(${banner})`,
              backgroundSize: "contain",
            }}
          >
            <div
              className="row p-5 align-bottom"
              style={{ color: "white", width: "100%" }}
            >
              <div className="col-10">
                <h1>Home Screen</h1>
              </div>
              <div className="col-2 text-end my-auto">
                <i
                  className="fa fa-search"
                  style={{ fontSize: "1.5rem" }}
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>

          {/* body */}

          <div className="body m-2">
            <HorizantalCard
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPVOmX6vHSYzcu-Qnp54oNoB836c-6NEhww&usqp=CAU"
              heading="Emergency"
              subHeading="Short Description"
            />
          </div>
          <div className="row m-2">
            {this.state.HomeCard.map((e) => {
              return (
                <div className="col-6 p-1">
                  <HomeCard
                    heading={e.heading}
                    link={e.link}
                    icon={e.icon}
                    text={e.text}
                  />
                </div>
              );
            })}
          </div>
          {/* main section  */}
          <div className="MainSection m-1">
            <h1 className="m-2">Main Section</h1>
            <div className="row m-1">
              {this.state.HomeCardData.map((ele) => {
                return (
                  <div className="col-4 p-1">
                    <HomeCard icon={ele.icon} text={ele.text} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* hot section  */}

          <div className="hotSection m-1">
            <h1 className="m-2">Hot Themes</h1>
            <div className="m-1">
              <BookmarkCard link="/ArticalPage" />
            </div>
          </div>
          {/* Related section  */}

          <div className="relatedSection m-1">
            <h1 className="m-2">Related Articles</h1>

            {this.state.BookmarkCard.map((element) => {
              return (
                <div className="m-1">
                  <BookmarkCard link={element.link} />
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
