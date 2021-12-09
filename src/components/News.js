import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalcards: [],
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=7f50577e05c84ae086b154b4659aadb1&page=1&pageSize=16`;
    let data = await fetch(url);
    let newdata = await data.json();
    this.setState({
      articles: newdata.articles,
      totalcards: newdata.totalResults,
      loading: false,
    });
    document.title = `News-hub | ${this.props.category} news`;
  }
  handlenextclick = async () => {
    if (Math.ceil(this.state.totalcards / 16) < this.state.page + 1) {
    } else {
      this.setState({ loading: true });
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
        this.props.category
      }&apiKey=7f50577e05c84ae086b154b4659aadb1&page=${
        this.state.page + 1
      }&pageSize=16`;
      let data = await fetch(url);
      let newdata = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: newdata.articles,
        loading: false,
      });
    }
  };

  handlepreviousclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=7f50577e05c84ae086b154b4659aadb1&page=${
      this.state.page - 1
    }&pageSize=16`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let newdata = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: newdata.articles,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3 ">
        <h1 className="my-5">News-Hub Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!(this.state.loading) && this.state.articles.map((element) => {
            return (
              <div className="col md-4" key={element.url}>
                <Newsitem
                  title={element.title}
                  description={element.description}
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                  author={element.author}
                />
              </div>
            );
          })}
        </div>
        <hr />
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.handlepreviousclick}
            className="btn btn-primary mx-3"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={this.handlenextclick}
            className="btn btn-primary"
            disabled={this.state.page === Math.ceil(this.state.totalcards / 16)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
