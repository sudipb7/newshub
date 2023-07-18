import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsWidget from "../components/NewsWidget";

const NewsPage = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${process.env.VITE_API_KEY}&page=${page}&pageSize=12`;
    let data = await fetch(url);
    props.setProgress(45);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=${process.env.VITE_API_KEY}&page=${page + 1}&pageSize=12`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <main className="flex flex-col justify-normal items-center p-2 gap-y-3">
      <header>
        <h1 className="text-2xl mt-2 mb-4 font-medium w-full text-violet-700 text-center">
          NewsHub - Top {capitalizeFirstLetter(props.category)}
        </h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader="Loading..."
        >
          <section className="grid p-2 gap-6 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {articles.map((data) => {
              return (
                <NewsWidget
                  title={data.title ? data.title : ""}
                  description={data.description ? data.description : ""}
                  imageUrl={data.urlToImage ? data.urlToImage : ""}
                  newsUrl={data.url ? data.url : ""}
                  author={data.author}
                  date={data.publishedAt}
                  source={data.source.name}
                  key={data.url ? data.url : ""}
                />
              );
            })}
          </section>
        </InfiniteScroll>
      </header>
    </main>
  );
};

export default NewsPage;
