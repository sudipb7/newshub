import React from "react";
import banner from "../assets/banner.jpg";

const NewsWidget = (props) => {
  const { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="rounded-md bg-gray-800 cursor-pointer max-h-[500px] w-[320px] flex flex-col justify-center items-center gap-y-2 shadow-sm shadow-gray-700">
      <img
        src={!imageUrl ? banner : imageUrl}
        alt=""
        className="w-full overflow-hidden rounded-t-md h-full hover:opacity-95 transition-all ease-linear duration-200"
      />
      <div className="flex flex-col gap-y-2 items-start justify-center py-3 px-5 ">
        <h5 className="text-lg text-white font-medium w-full">{title}</h5>
        <p className="text text-gray-300 w-full">{description}</p>
        <p className="text-sm text-gray-300 w-full">
          Date: {new Date(date).toGMTString()}
        </p>
        <p className="text-sm text-gray-300 w-full">
          Author: {!author ? "Unknown" : author}
        </p>
        <a
          href={newsUrl}
          target="_blank"
          className="font-medium px-5 py-2 rounded bg-violet-600 text-white cursor-pointer hover:bg-violet-700 transition-all ease-linear duration-200"
        >
          Read
        </a>
        <span className="text-xs text-violet-600 w-full">
          Source: {!source ? "Unknown" : source}
        </span>
      </div>
    </div>
  );
};

export default NewsWidget;
