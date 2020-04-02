import React from "react";
import { Link } from "react-router-dom";
import Article from "./Article";

import { Grid, Button } from "@material-ui/core";

export default function Main(props) {
  const { articles, handleDeleteArticle } = props;
  return (
    <>
      <Button variant="contained" color="primary" component={Link} to="/new">
        New
      </Button>

      <Grid container spacing={3} style={{ marginTop: 16 }}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Article
              article={article}
              handleDeleteArticle={handleDeleteArticle}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
