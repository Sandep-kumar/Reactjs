import banner from "../Images/groupdoctor.png";
import CommentCard from "../components/HomeComp/CommentCard";
import ArticalBookmark from "../components/HomeComp/ArticalBookmark";

import React, { Component } from "react";

export default class ArticalPage extends Component {
  CommentCard = [
    {
      heading: "Bernarr Dominik",
      subHeading: "Physician",
      comment: "Thank you, very useful article!",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xdxVILjN9aYnozgR6l5Y3eF6DWxi0Z_l0w&usqp=CAU",
    },
    {
      heading: "Bernarr Dominik",
      subHeading: "Physician",
      comment: "Thank you, very useful article!",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xdxVILjN9aYnozgR6l5Y3eF6DWxi0Z_l0w&usqp=CAU",
    },
    {
      heading: "Bernarr Dominik",
      subHeading: "Physician",
      comment: "Thank you, very useful article!",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xdxVILjN9aYnozgR6l5Y3eF6DWxi0Z_l0w&usqp=CAU",
    },
    {
      heading: "Bernarr Dominik",
      subHeading: "Physician",
      comment: "Thank you, very useful article!",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xdxVILjN9aYnozgR6l5Y3eF6DWxi0Z_l0w&usqp=CAU",
    },
  ];

  constructor() {
    super();
    this.state = {
      CommentCard: this.CommentCard,
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

          {/* heading  */}
          <div className="haeding">
            <div className="m-2">
              <ArticalBookmark
                heading="Bernarr Dominik"
                subHeading="Physician"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xdxVILjN9aYnozgR6l5Y3eF6DWxi0Z_l0w&usqp=CAU"
              />
            </div>
            <div className="text-muted m-4">
              <h5>25 May, 2020</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
              </p>
            </div>
            <div className="bottom m-2">
              <span
                className="px-2 py-1 rounded mx-1"
                style={{
                  width: "fit-content",
                  backgroundColor: "rgb(214 216 237)",
                  color: "rgb(97 105 197)",
                }}
              >
                #COVID-19
              </span>
              <span
                className="px-2 py-1 rounded mx-1"
                style={{
                  width: "fit-content",
                  backgroundColor: "rgb(214 216 237)",
                  color: "rgb(97 105 197)",
                }}
              >
                #Coronavirus
              </span>
              <span
                className="px-2 py-1 rounded mx-1"
                style={{
                  width: "fit-content",
                  backgroundColor: "rgb(214 216 237)",
                  color: "rgb(97 105 197)",
                }}
              >
                #Pandemic
              </span>
            </div>
            <hr />
            {/* comment section  */}
            <div className="comment m-2">
              <h5 className="m-2">Write your comment</h5>
              <div className="text-center my-2">
                <input
                  className="p-1 rounded m-2"
                  type="text"
                  placeholder="Comment"
                  style={{ border: "1px solid lightblue", width: "90%" }}
                />
              </div>
              {this.state.CommentCard.map((e) => {
                return (
                  <CommentCard
                    heading={e.heading}
                    subHeading={e.subHeading}
                    comment={e.comment}
                    src={e.src}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
