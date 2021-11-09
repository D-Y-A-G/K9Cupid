const router = require("express").Router();
const { User, Pet } = require("../models");
// const Pet = require("../models/pet");
//const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] }
    });

    const users = userData.map((user) => user.get({ plain: true }));

    res.render("homepage", {
      users,
      logged_in: req.session.logged_in
      // text: "We 💗 dogs!!!"
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) =>
  res.render("homepage", { logged_in: req.session.logged_in })
);

router.get("/register", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile"); //profile
    return;
  }

  res.render("register");
});

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile"); //profile
    return;
  }

  res.render("login");
});

router.get("/profile", async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("profile");
});

router.get("/results", async (req, res) => {
  try {
    const profileData = await Pet.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"]
        }
      ]
    });

    const profile = profileData.get({ plain: true });

    res.render("results", {
      ...profile,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
