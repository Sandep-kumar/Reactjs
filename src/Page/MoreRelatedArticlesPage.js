import React, { Component } from "react";
import AdCard from "../components/HomeComp/AdCard";
import Card from "../components/HomeComp/Card";

export default class MoreRelatedArticlesPage extends Component {
  AdCard = [
    {
      heading: "A small river named Duden",
      subHeading: "2 hours ago",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xdxVILjN9aYnozgR6l5Y3eF6DWxi0Z_l0w&usqp=CAU",
    },
    {
      heading: "A small river named Duden",
      subHeading: "2 hours ago",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xdxVILjN9aYnozgR6l5Y3eF6DWxi0Z_l0w&usqp=CAU",
    },
    {
      heading: "A small river named Duden",
      subHeading: "2 hours ago",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xdxVILjN9aYnozgR6l5Y3eF6DWxi0Z_l0w&usqp=CAU",
    },
    {
      heading: "A small river named Duden",
      subHeading: "2 hours ago",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xdxVILjN9aYnozgR6l5Y3eF6DWxi0Z_l0w&usqp=CAU",
    },
  ];
  constructor() {
    super();
    this.state = {
      AdCard: this.AdCard,
      loading: false,
    };
  }
  render() {
    return (
      <>
        <div
          className="box mb-5"
          style={{ width: "100%", backgroundColor: "#e2ecef" }}
        >
          <div className="head py-2">
            <div className="row m-4 ">
              <div className="col-2">
                {" "}
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </div>
              <div className="col-8 h5">Related Articles</div>
              <div className="col-2">
                <i className="fa fa-filter" aria-hidden="true"></i>
              </div>
            </div>

            <div className="input-group justify-content-center">
              <div className="form-outline">
                <input
                  type="search"
                  id="form1"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
              <button type="button" className="btn ">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
          <hr />
          <div className="row m-4">
            <div className="col-8">
              <h5>Hot Themes </h5>
            </div>
            <div className="col-4 text-end text-muted">See all</div>
          </div>
          <div className="m-2">
            <Card
              heading="Far far away, behind the word mountains"
              subHeading="2 hours ago"
              likes="155"
              time="30"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xdxVILjN9aYnozgR6l5Y3eF6DWxi0Z_l0w&usqp=CAU"
            />
          </div>
          <div className="row m-4">
            <div className="col-12">
              <h5>All Stories</h5>
            </div>
          </div>
          {this.state.AdCard.map((e) => {
            return (
              <div className="m-2">
                <AdCard
                  heading={e.heading}
                  subHeading={e.subHeading}
                  src={e.src}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
