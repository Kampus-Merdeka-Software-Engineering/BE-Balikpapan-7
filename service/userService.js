const { prisma } = require("../config/prisma");

//create user (for sign up)
async function newUser(user) {
  try {
    const userCreated = await prisma.user.create({
      data: {
        email: user.email,
        password: user.password,
        confpass: confirm.pass,
      },
    });
    return userCreated;
  } catch (error) {
    throw new Error(error);
  }
}

//get all users
async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.log(error);
  }
}

// get user by email (for log in)
async function getSpecificUser(email, password) {
  try {
    const userEmail = await prisma.user.findUnique({
      where: {
        email: String(email),
        password: String(password),
      },
    });
    return userEmail;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  getUsers,
  newUser,
  getSpecificUser,
};
