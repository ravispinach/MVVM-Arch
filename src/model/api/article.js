const API_URL = "https://jsonplaceholder.typicode.com";

export const getAllArticles = async () => {
  const response = await fetch(`${API_URL}/comments`);
  if (!response.ok) {
    throw new Error("Failed to get all articles");
  }
  const data = await response.json();
  return data;
};

export const postArticle = async (createData) => {
  const response = await fetch(`${API_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createData),
  });
  if (!response.ok) {
    throw new Error("Failed to create article");
  }
  const data = await response.json();
  return data;
};
