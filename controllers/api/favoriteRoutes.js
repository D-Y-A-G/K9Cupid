const router = require("express").Router();
const { User, Pet, Favorite } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", async (req, res) => {
  try {
    const newFavorite = await Favorite.create({
      // id: //what to put here//
      favorite_pet_id: req.body.id //TODO:fix this later
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

module.exports = router;
