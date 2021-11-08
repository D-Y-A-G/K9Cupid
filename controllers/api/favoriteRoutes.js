const router = require("express").Router();
const { User, Pet, Favorite } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/:id", async (req, res) => {
  try {
    const newFavorite = await Favorite.create({
      favorite_pet_id: req.body.pet.id,
      owner_id: req.session.user_id //TODO:fix this later
    });
    res.status(200).json(newFavorite);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const delFavorite = await Favorite.destroy({
      where: {
        id: req.body.id
      }
    });
    if (!delFavorite) {
      res.status(404).json("This pet doesn't exist");
      return;
    }
    res.status(200).json(delFavorite);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", (req, res) => {
  // find all favorited pets

  Favorite.findAll({
    where: {
      owner_id: req.session.user_id
    }
  }).then((favorite) => res.json(favorite));
});

module.exports = router;
