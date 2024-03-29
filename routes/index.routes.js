const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const authRoutes = require("./auth.routes");
router.use("/auth", authRoutes);

const postRoutes = require("./post.routes");
router.use("/destinations", postRoutes);

const profileRoutes = require("./profile.routes");
router.use("/profile", profileRoutes);

const uploadRoutes = require("./upload.routes");
router.use("/upload", uploadRoutes);

module.exports = router;
