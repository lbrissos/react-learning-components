import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>Are you sure you want to do this?</ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Lucky"
          timeAgo="Today at 4:45PM"
          avatar="https://source.unsplash.com/900x900/?cat"
          comment="Meowserz this is cool!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00PM"
          avatar="https://source.unsplash.com/900x900/?man"
          comment="Actually, this is not correct."
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 2:00AM"
          avatar="https://source.unsplash.com/900x900/?woman"
          comment="Thanks for writing this post and sharing your point of view."
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
