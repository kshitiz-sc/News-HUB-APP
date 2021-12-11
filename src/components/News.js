import React from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState , useEffect} from "react";

const News = (props)=>{

  const [articles, setarticles] = useState([]);
  const [totalcards, settotalcards] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(true);


   useEffect(async () => {
    props.setprogressbar(10);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=7f50577e05c84ae086b154b4659aadb1&page=1&pageSize=16`;
    let data = await fetch(url);
    props.setprogressbar(30);
    let newdata = await data.json();
    props.setprogressbar(70);
    setarticles(newdata.articles)
    settotalcards(newdata.totalResults)
    setloading(false)
    props.setprogressbar(100);
  },[])
  // handlenextclick = async () => {
  //   if (Math.ceil(this.state.totalcards / 16) < this.state.page + 1) {
  //   } else {
  //     this.props.setprogressbar(10);
  //     this.setState({ loading: true });
  //     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
  //       this.props.category
  //     }&apiKey=7f50577e05c84ae086b154b4659aadb1&page=${
  //       this.state.page + 1
  //     }&pageSize=16`;
  //     this.props.setprogressbar(30);
  //     let data = await fetch(url);
  //     let newdata = await data.json();
  //     this.props.setprogressbar(70);
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: newdata.articles,
  //       loading: false,
  //     });
  //     this.props.setprogressbar(100);
  //   }
  // };

  // handlepreviousclick = async () => {
  //   this.props.setprogressbar(10);
  //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
  //     this.props.category
  //   }&apiKey=7f50577e05c84ae086b154b4659aadb1&page=${
  //     this.state.page - 1
  //   }&pageSize=16`;
  //   this.setState({ loading: true });
  //   this.props.setprogressbar(30);
  //   let data = await fetch(url);
  //   let newdata = await data.json();
  //   this.props.setprogressbar(70);
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: newdata.articles,
  //     loading: false,
  //   });
  //   this.props.setprogressbar(100);
  // };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=7f50577e05c84ae086b154b4659aadb1&page=${page+1}&pageSize=16`;
    setpage(page+1);
    setloading(true);
    let data = await fetch(url);
    let newdata = await data.json();
    setarticles(articles.concat(newdata.articles));
    setloading(false);
  };

  
    return (
      <>
        <div className="container my-3 ">
          <h1 style={{marginTop: '70px',marginBottom: '20px',marginLeft:'20px'}}>News-Hub Headlines</h1>

          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={totalcards !== articles.length}
            loader={loading && <Spinner />}
          >
            <div className="row container">
              {
                articles.map((element) => {
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
          </InfiniteScroll>
          <hr />
          {/* <div className="container d-flex justify-content-between">
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
              disabled={
                this.state.page === Math.ceil(this.state.totalcards / 16)
              }
            >
              Next
            </button>
          </div> */}
        </div>
      </>
    );
  
}

export default News;
