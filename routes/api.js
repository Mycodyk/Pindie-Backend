const {
  usersRouter,
  gamesRouter,
  categoriesRouter,
  authRouter,
} = require("./index");

const apiRouter = require("express").Router();

apiRouter.use("/api", gamesRouter);
apiRouter.use("/api", usersRouter);
apiRouter.use("/api", categoriesRouter);
apiRouter.use("/api", authRouter);

module.exports = apiRouter;
