import { useCallback, useState } from "react";
// Importing API functions for fetching and posting articles
import { getAllArticles, postArticle } from "./api/article";

/**
 * Custom hook for managing the article model, including fetching all articles and creating new ones.
 */
const useArticleModel = () => {
  const [articlesData, setArticlesData] = useState(null);

  /**
   * Callback function to fetch all articles from the server.
   * It uses the `getAllArticles` API function and updates the local state with the fetched articles.
   */
  const getArticles = useCallback(async () => {
    const articles = await getAllArticles();
    setArticlesData(articles);
  }, []);

  /**
   * Callback function to create a new article.
   * It checks if the current articles data is an array, then posts the new article using the `postArticle` API function.
   * If the response is successful, it adds the new article to the local state.
   */
  const createArticle = useCallback(
    async (createData) => {
      if (Array.isArray(articlesData)) {
        const response = await postArticle(createData);

        if (response !== null) {
          setArticlesData([...articlesData, createData]);
        }
      }
    },
    [articlesData],
  );

  return {
    articles: articlesData,
    createArticle,
    getArticles,
  };
};

export default useArticleModel;
