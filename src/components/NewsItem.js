import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card my-3" style={{ width: "22rem", height: "30rem" }}>
          <img
            src={
              !imageUrl
                ? "https://media.cnn.com/api/v1/images/stellar/prod/230303194649-03-willow-project-tiktok-petition-movement-climate.jpg?c=16x9&q=w_800,c_fill"
                : imageUrl
            }
            className="card-img-top border-light-subtle"
            alt="..."
            style={{ width: "auto", height: "200px", border: "1px solid " }}
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
              <span
                className="position-absolute translate-middle badge bg-danger"
                style={{
                  left: "87%",
                  zIndex: "1",
                  width: "auto",
                  overflowX: "hidden",
                  top: "2px",
                  borderRadius: "6px",
                }}
              >
                {source}
              </span>
            </h5>
            <p className="card-text">
              {!description
                ? "Click on See More to see more about the News"
                : description}
            </p>
            <p className="card-text">
              <small>
                by <b>{!author ? "Unknown" : author}</b> on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href={newsUrl}
              className="btn btn-sm btn-danger"
            >
              See More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
