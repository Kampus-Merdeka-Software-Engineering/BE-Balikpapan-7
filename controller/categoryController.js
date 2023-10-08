const categoryService = require("../service/categoryService");

// get all articles in blog
async function getCategory(req, res) {
  try {
    const articles = await categoryService.getCategory();
    res.status(200).json({
      message: "Successfully fetched all articles in blog",
      data: Category,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Get an article by ID
async function getCategoryById(req, res) {
  const { CategoryId } = req.params;
  try {
    const Category = await categoryService.getCategoryById(CategoryId);
    if (!Category) {
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
  getCategory,
  getCategoryById,
};
