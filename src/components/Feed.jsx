import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "../firebase";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // snapshot always listens to any changes and re-render to reflect that change
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  return (
    <div className="feed">
      <div id="parent">
        <div id="child">
          <StoryReel />
          <MessageSender />
          {posts.map((post) => (
            <Post
              key={post.id}
              profilePic={post.data.profilePic}
              image={post.data.image}
              message={post.data.message}
              timestamp={post.data.timestamp}
              username={post.data.username}
              likes={post.data.likes}
              id={post.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
