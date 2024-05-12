const {
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail,
  checkIsUserExists,
} = require("./checkusers");

const { hashPassword, createUser, updateUser, deleteUser } = require("./users");

const { checkAuth, checkCookiesJWT } = require("./auth");

const { findAllUsers, findUserById } = require("./findUsers");

const {
  checkEmptyFields,
  checkIfCategoriesAvaliable,
  checkIfUsersAreSafe,
  checkIsGameExists,
} = require("./checkgames");

const {
  createGame,
  updateGame,
  deleteGame,
  checkIsVoteRequest,
} = require("./games");

const { findGameById, findAllGames } = require("./findgames");

const { checkIsCategoryExists, checkEmptyName } = require("./checkcategories");

const {
  createCategory,
  updateCategory,
  deleteCategory,
} = require("./categories");

const { findAllCategories, findCategoryById } = require("./findcategories");

module.exports = {
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail,
  checkIsUserExists,
  checkEmptyFields,
  checkIfCategoriesAvaliable,
  checkIfUsersAreSafe,
  checkIsGameExists,
  checkIsCategoryExists,
  checkEmptyName,
  findAllCategories,
  findCategoryById,
  findAllGames,
  findGameById,
  findAllUsers,
  findUserById,
  createGame,
  updateGame,
  deleteGame,
  checkIsVoteRequest,
  hashPassword,
  createUser,
  updateUser,
  deleteUser,
  createCategory,
  updateCategory,
  deleteCategory,
  checkAuth,
  checkCookiesJWT,
};
