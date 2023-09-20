import axios from "axios";
import "./post.styles.css";
import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { GETPOST } from "../../ApiUrl";

const PostDetails = () => {
  const [postdetails, setPostDetails] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const fetchPost = async (id) => {
      const getPost = await axios.get(GETPOST(id));
      const response = getPost.data;
      setPostDetails(response);
    };
    fetchPost(id);
  }, []);

  return (
    <div className="post">
      <div>
        <h2>{postdetails.title}</h2>
      </div>
      <div>{postdetails.body}</div>
    </div>
  );
};

export default PostDetails;
