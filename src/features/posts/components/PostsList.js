import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectAllPosts } from "../postsSlice";

import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => {
    return (
      <article className="post-excerpt" key={post.id}>
        <h3>{post.title}</h3>
        <p className="space-between">
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </p>

        <p>{post.content}</p>

        <ReactionButtons post={post} />

        <Link to={`/posts/${post.id}`} className="button muted-button">
          View Post
        </Link>
      </article>
    );
  });

  return (
    <section>
      <h2>Posts</h2>

      {renderedPosts}
    </section>
  );
};

export default PostsList;
