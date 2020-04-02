import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import New from "./components/New";
import Edit from "./components/Edit";
import View from "./components/View";

import { CssBaseline, Container } from "@material-ui/core";

function App() {
  const [articles, setArticle] = React.useState([
    {
      id: "1",
      date: "date",
      title: "title",
      content: "content",
      like: 1,
      dislike: 2
    },
    {
      id: "2",
      date: "date",
      title: "title",
      content: "content 2",
      like: 2,
      dislike: 3
    }
  ]);

  const handleSetArticle = article => {
    setArticle([article, ...articles]);
  };

  const handleUpdateArticle = updateArticle => {
    const _articles = articles.map(article =>
      article.id === updateArticle.id ? updateArticle : article
    );
    setArticle(_articles);
  };

  const handleDeleteArticle = id => {
    const _articles = articles.filter(article => article.id !== id);
    setArticle(_articles);
  };

  const handleGetArticle = id => {
    return articles.find(article => article.id === id);
  };

  return (
    <>
      <CssBaseline />
      <Router>
        <NavBar />
        <Container maxWidth="sm" style={{ marginTop: 24 }}>
          <Switch>
            <Route path="/" exact>
              <Main
                articles={articles}
                handleDeleteArticle={handleDeleteArticle}
              />
            </Route>
            <Route path="/new" exact>
              <New handleSetArticle={handleSetArticle} />
            </Route>
            <Route path="/edit/:id" exact>
              <Edit
                handleGetArticle={handleGetArticle}
                handleUpdateArticle={handleUpdateArticle}
              />
            </Route>
            <Route path="/view/:id" exact>
              <View handleGetArticle={handleGetArticle} />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
