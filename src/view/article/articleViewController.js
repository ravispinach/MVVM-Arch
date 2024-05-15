import { useCallback, useEffect, useState } from "react";
import useArticleViewModel from "./useArticleViewModel";

/**
 * Custom hook for managing the view logic of articles, including fetching articles, creating new ones, and handling name changes.
 */
const useArticlesViewController = () => {
  const [articleName, setArticleName] = useState("");

  // Destructuring properties from the custom hook for managing the article view model
  const { articles, createArticle, getArticles } = useArticleViewModel();

  /**
   * Callback function to create a new article when the "Create article" button is clicked.
   * It uses the `createArticle` function from the article view model with the current article name.
   */
  const onCreateArticleClick = useCallback(async () => {
    const newData = {
      postId: articles.length + 1,
      id: articles.length + 1,
      name: articleName,
      email: "abc@gmail.com",
      body: "laudantium enim quasi est quide",
    };
    await createArticle(newData);
    setArticleName("");
  }, [createArticle, articleName]);

  /**
   * Effect hook to fetch articles whenever the `getArticles` function changes.
   * This ensures that the articles are re-fetched whenever the view model changes.
   */
  useEffect(() => {
    getArticles();
  }, [getArticles]);

  // Returning the state and functions needed by the ArticlesView component
  return {
    articleName,
    articles,
    onCreateArticleClick,
    setArticleName,
  };
};

export default useArticlesViewController;
