import React, { Component } from 'react'
import NewsItem from "./NewsItem";
import Spinner from './loading';
import PropTypes  from 'prop-types'


export default class newsBar extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general"
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  CapitalLetter = (string) =>
  {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.CapitalLetter(this.props.category)} - NexterStores`;
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bca9baf3c4ee447c992d5b784800a1ce&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);

    let parseData = await data.json();
    // console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  handlePrevButton = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bca9baf3c4ee447c992d5b784800a1ce&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });
    let data = await fetch(url);

    let parseData = await data.json();
    console.log(parseData);

    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false,
    });
  };

  handleNextButton = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bca9baf3c4ee447c992d5b784800a1ce&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;

      this.setState({ loading: true });
      let data = await fetch(url);

      let parseData = await data.json();
      console.log(parseData);

      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h3 className="my-5 text-center h3Text">
            <b>Outbreak </b> - Top {this.CapitalLetter(this.props.category)} Headlines
          </h3>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 40) : ""}
                      description={element.description ? element.description.slice(0, 100) : "" }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })
            }
          </div>
          <div className="container d-flex justify-content-between my-3">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-primary"
              onClick={this.handlePrevButton}
            >
              {" "}
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-primary"
              onClick={this.handleNextButton}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}
