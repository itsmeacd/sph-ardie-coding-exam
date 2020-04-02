import React from "react";
import { Link, withRouter } from "react-router-dom";
import { TextField, Button, Typography } from "@material-ui/core";

function Edit(props) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [article, setArticle] = React.useState("");

  React.useEffect(() => {
    const { handleGetArticle, match } = props;
    const article = handleGetArticle(match.params.id);
    setTitle(article.title);
    setContent(article.content);
    setArticle(article);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    var today = new Date();
    var date =
      today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();

    const updateArticle = {
      id: article.id,
      date,
      title,
      content,
      like: article.like,
      dislike: article.dislike
    };

    props.handleUpdateArticle(updateArticle);
    console.log(updateArticle);
    props.history.push("/");
  };

  return (
    <div>
      <Typography variant="h6">Update Article</Typography>
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
          Update
        </Button>
      </form>
    </div>
  );
}

export default withRouter(Edit);
