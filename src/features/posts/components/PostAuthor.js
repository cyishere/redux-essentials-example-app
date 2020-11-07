import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserById } from "../../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const author = useSelector((state) => selectUserById(state, userId));
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
