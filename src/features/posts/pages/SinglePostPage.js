import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectPostById } from "../postsSlice";

import PostAuthor from "../components/PostAuthor";
import TimeAgo from "../components/TimeAgo";

const SinglePostPage = ({ match }) => {
  const { postId } = match.params;

  const post = useSelector((state) => selectPostById(state, postId));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="space-between">
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </p>
        <div className="post-content" style={{ marginBottom: 20 }}>
          {post.content}
        </div>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  );
};

export default SinglePostPage;
