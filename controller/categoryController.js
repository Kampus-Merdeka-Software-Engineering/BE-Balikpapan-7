const categoryService = require("../service/categoryService");

// get all articles in blog
async function getArticles(req, res) {
  try {
    const articles = await categoryService.getArticles();
    res.status(200).json({
      message: "Successfully fetched all articles in blog",
      data: articles,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Get an article by ID
async function getArticleById(req, res) {
  const { articleId } = req.params;
  try {
    const article = await categoryService.getArticleById(articleId);
    if (!article) {
      return res.status(404).json({ error: "article not found" });
    }
    res.status(200).json({
      message: "Successfully fetched article",
      data: article,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
module.exports = {
  getArticles,
  getArticleById,
};
