// Файл controllers/games.js

const sendAllGames = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  // Вернём найденные игры в формате JSON
  res.end(JSON.stringify(req.gamesArray));
};

const sendGameCreated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.game));
};

const sendGameById = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.game));
};

const sendGameUpdated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(JSON.stringify(req.game));
};
const sendGameDeleted = (req, res) => {
  res.setHeader("COntent-Type", "application/json");
  res.end(JSON.stringify(req.game));
};

module.exports = {
  sendAllGames,
  sendGameCreated,
  sendGameById,
  sendGameUpdated,
  sendGameDeleted,
};
