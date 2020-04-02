import React from "react";
import Typography from "@material-ui/core/Typography";

export default function View(props) {
  const [article, setArticle] = React.useState("");

  //   React.useEffect(() => {
  //     const { handleGetArticle, match } = props;
  //     const _article = handleGetArticle(match.params.id);
  //     setArticle(_article);
  //   }, []);

  return (
    <>
      <Typography variant="h6">Article ID: {article.id}</Typography>
      <Typography variant="h6" gutterBottom>
        {article.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {article.content}
      </Typography>
    </>
  );
}
