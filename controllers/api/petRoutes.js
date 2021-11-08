const router = require("express").Router();
const { User, Pet } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", async (req, res) => {
  try {
    const newPet = await Pet.create({
      pet_name: req.body.pet_name,
      age: req.body.age,
      breed: req.body.breed,
      gender: req.body.gender,
      size: req.body.size,
      owner_id: req.session.user_id
    });
    res.status(200).json(newPet);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const editPet = await Pet.update(req.body, {
      where: {
        id: req.body.id
      }
    });

    if (!editPet) {
      res.status(404).json("You cannot edit a pet that doesn't exist");
    }

    res.status(200).json(editPet);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const delPet = await Pet.destroy({
      where: {
        id: req.body.id
      }
    });
    if (!delPet) {
      res.status(404).json("This pet doesn't exist");
      return;
    }
    res.status(200).json(delPet);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", (req, res) => {
  // find all pets

  Pet.findAll({
    where: {
      age: req.body.age,
      breed: req.body.breed,
      gender: req.body.gender,
      size: req.body.size
    }
  }).then((pet) => res.json(pet));
});

module.exports = router;
