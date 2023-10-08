const categoryService = require("../service/categoryService");

// get all Category in blog
async function getCategory(req, res) {
  try {
    const Category = await categoryService.getCategory();
    res.status(200).json({
      message: "Successfully fetched all articles in blog",
      data: Category,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Get an Category by ID
async function getCategoryById(req, res) {
  const { CategoryId } = req.params;
  try {
    const Category = await categoryService.getCategoryById(CategoryId);
    if (!Category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json({
      message: "Successfully fetched Category",
      data: Category,
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
