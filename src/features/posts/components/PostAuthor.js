import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PostAuthor = ({ userId }) => {
  const author = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );
  return (
    <span>
      by{" "}
      <Link to={`/users/${author.id}`}>
        {author ? author.name : "Unknown author"}
      </Link>
    </span>
  );
};

export default PostAuthor;
