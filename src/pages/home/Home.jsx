import "./home.styles.css";
import { Grid, Modal, Box, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CREATEPOST, GETPOSTS } from "../../ApiUrl";
import { Card } from "../../components";

const Home = ({ isLogged }) => {
  const [allposts, setAllPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [created, setCreated] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchPosts = async () => {
        const getPosts = await axios.get(GETPOSTS);
        const response = getPosts.data;

        setAllPosts(response);
      };
      fetchPosts();
    } catch (err) {
      console.log("Err", err.message);
    }
  }, []);

  const handleOpen = () => {
    if (!isLogged) {
      navigate("/login");
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const newPost = async () => {
    try {
      await axios
        .post(CREATEPOST, {
          title,
          body,
        })
        .then((response) => {
          let newpost = response.data;
          let newBlogPosts = [...allposts, newpost];
          setAllPosts(newBlogPosts);
          setCreated(true);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (err) {
      console.log("err", err.message);
    }
    handleClose();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCreated(false);
    }, 4000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="head">
      {created && (
        <h6 className="created">A new blog post has been created.</h6>
      )}
      <div>
        <div className="titleDiv">
          <div>
            <span className="text">Popular posts from BlogDaily</span>
          </div>
          <div>
            <button className="buttonStyles" onClick={handleOpen}>
              Create New Post
            </button>
          </div>
        </div>

        <Modal open={open} onClose={handleClose}>
          <Box className="modalstyle">
            <div className="textDiv">
              <Typography className="spaceY" variant="h5">
                Title
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Typography className="spaceY" variant="h5">
                Body
              </Typography>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={10}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="write a post..."
                className="input"
              />
            </div>
            <div>
              <button
                type="submit"
                variant="contained"
                className="buttonStyles"
                onClick={newPost}
              >
                Create Post
              </button>
            </div>
          </Box>
        </Modal>
      </div>
      <Grid container className="container">
        {allposts.map((post) => (
          <Grid item lg={4} xs={12} md={6} key={post.id}>
            <Card id={post.id} title={post.title} body={post.body} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
