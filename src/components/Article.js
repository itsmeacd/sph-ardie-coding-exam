import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Badge
} from "@material-ui/core";
import LikeIcon from "@material-ui/icons/ThumbUp";
import DisLikeIcon from "@material-ui/icons/ThumbDown";

export default function Article({ article, handleDeleteArticle }) {
  const handleDelete = id => {
    handleDeleteArticle(id);
  };

  return (
    <Card>
      <CardContent>
        <div style={{ marginBottom: 24 }}>
          <Badge
            badgeContent={article.like}
            color="primary"
            style={{ marginRight: 16 }}
          >
            <LikeIcon />
          </Badge>
          <Badge badgeContent={article.dislike} color="primary">
            <DisLikeIcon />
          </Badge>
        </div>
        <Typography color="textSecondary" variant="caption">
          {article.date}
        </Typography>
        <Typography variant="h5" component="h2">
          {article.title}
        </Typography>
        <Typography variant="body2">{article.content}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/view/${article.id}`}>
          View
        </Button>
        <Button
          size="small"
          color="primary"
          component={Link}
          to={`/edit/${article.id}`}
        >
          Edit
        </Button>
        <Button
          size="small"
          color="secondary"
          onClick={() => handleDelete(article.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
