import React from "react";
import { Link, withRouter } from "react-router-dom";
import { TextField, Button, Typography } from "@material-ui/core";

function New({ handleSetArticle, history }) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    var today = new Date();
    var date =
      today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();

    const newArticle = {
      date,
      title,
      content,
      like: 0,
      dislike: 0
    };
    handleSetArticle(newArticle);
    console.log(newArticle);
    history.push("/");
  };

  return (
    <div>
      <Typography variant="h6">New Article</Typography>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Title"
          fullWidth
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          id="standard-basic"
          label="Content"
          fullWidth
          value={content}
          onChange={e => setContent(e.target.value)}
          required
          multiline={true}
          margin="normal"
        />
        <Button component={Link} to="/">
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginLeft: 16 }}
        >
          Post
        </Button>
      </form>
    </div>
  );
}

export default withRouter(New);
