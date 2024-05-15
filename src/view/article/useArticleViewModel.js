import useArticleModel from "../../model/useArticleModel";

/**
 * Custom hook for managing the view model of articles.
 */
const useArticleViewModel = () => {
  const { article, articles, createArticle, getArticles } = useArticleModel();

  return {
    article,
    articles,
    createArticle,
    getArticles,
  };
};

export default useArticleViewModel;
