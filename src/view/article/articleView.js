import React from 'react';
// Importing custom hook for managing articles view logic
import useArticlesViewController from './articleViewController';

/**
 * Component for displaying a list of articles and providing functionality to add new articles.
 */
const ArticlesView = () => {
    // Destructuring properties from the custom hook to manage state and actions
    const {
        articleName,
        articles,
        setArticleName,
        onCreateArticleClick,
    } = useArticlesViewController();

    return (
        <div>
            {/* Conditionally rendering the list of articles if the articles array is not empty */}
            {!!articles &&
                articles.map(({ id, name }) => (
                    <div key={id}>
                        {name}
                    </div>
                ))}
            {/* Input field for adding a new article */}
            <div>
                <input
                    type="text"
                    onChange={(e)=>setArticleName(e.target.value)}
                    value={articleName}
                    placeholder="Add an article..."
                />
                {/* Button to create a new article */}
                <button onClick={onCreateArticleClick}>Create article</button>
            </div>
        </div>
    );
};

export default ArticlesView;
