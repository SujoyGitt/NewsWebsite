import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
let News = (props) => {
  let [articles, setarticles] = useState([]);
  let [loading, setloading] = useState(true);
  let [page, setpage] = useState(1);
  let [totalResults, settotalResults] = useState(0);

  let captalizefunction = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  document.title = ` ${captalizefunction(props.category)} - News Monkey`;
    const updatenews = async () => {
    props.setprogress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
    setloading(true);
    let data = await fetch(url);
    props.setprogress(30);
    let parseData = await data.json();
    props.setprogress(70);
    console.log(data);
    setarticles(parseData.articles);
    settotalResults(parseData.totalResults);
    props.setprogress(100);
    setloading(false);
  };
  useEffect(() => {
    updatenews();
  }, []);
  let fetchMoreData = async () => {
    setpage( page + 1 );
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page+1}&pagesize=${props.pagesize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setarticles(articles.concat(parseData.articles));
    settotalResults(parseData.totalResults);
  };
  return (
    <>
      <h2 className="text-center mb-4 " style={{marginTop:'70px'}}>
        NewsMonkey - Top {captalizefunction(props.category)}
        Headlines
      </h2>
      { loading && <Spinner /> }
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container mb-3">
          <div className="row justify-content-center justify-content-sm-between g-3">
            {articles.map((element) => {
              return (
                <div
                  className="col-lg-3 col-md-4 col-10 col-sm-6 "
                  key={element.url}
                >
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : "no title"}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : "no description"
                    }
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
export default News;
News.defaultProps = {
  country: "in",
  pagesize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};




