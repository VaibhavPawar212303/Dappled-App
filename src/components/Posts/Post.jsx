import React from "react";
import { PostData } from "../../Data/PostData";
import Card from "../Card/Card";

function post() {
  return (
    <>
      <div>
        {PostData.map((post) => {
          return (
            <>
            <div className="space-y-4 mt-10">
              <h1 className="flex flex-col items-center text-4xl ml-5 mr-12">{post.heading}</h1>
              <h4 className="flex flex-col items-center text-2xl ml-5 mr-12">{post.title}</h4>
              <p className="ml-5 mr-10">{post.intrduction}</p>
              <p className="ml-4 mr-3">{post.codeSnippet1}</p>
              <p className=" ml-5 mr-10">{post.posDesc1}</p>
              <p className="ml-4 mr-3">{post.codeSnippet2}</p>
              <p className="ml-4 mr-3">{post.codeSnippet3}</p>
            </div>
          <div className="user-card">
            <Card />
          </div>
          </>
            );
        })}
      </div>
    </>
  );
}

export default post;
