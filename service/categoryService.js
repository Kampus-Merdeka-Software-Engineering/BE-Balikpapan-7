const { prisma } = require("../config/prisma");

//get all Category
async function getCategory() {
  try {
    const Category = await prisma.Category.findMany();
    return Category;
  } catch (error) {
    console.log(error);
  }
}

// get an Category by id
async function getCategoryById(articleId) {
  try {
    const getCategory = await prisma.Category.findUnique({
      where: {
        id: Number(CategoryId),
      },
    });
    return getCategory;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  getCategory,
  getCategoryById,
};
