const router = require("express").Router();
const { User } = require("../models");
//const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] }
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      users,
      logged_in: req.session.logged_in
      // text: "i am working"
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// router.get("/", async (req, res) =>
//   res.render("homepage", { text: "i am working" })
// );

router.get("/register", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("register");
});

module.exports = router;

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
