const addPetFormHandler = async (event) => {
  event.preventDefault();
  const petName = document.querySelector("#pet-name").value.trim();
  const petAge = document.querySelector("#pet-age").value.trim();
  const petBreed = document.querySelector("#pet-breed").value.trim();
  const petGender = document.querySelector("#pet-gender").value.trim();
  const petSize = document.querySelector("#pet-size").value.trim();

  if (petName && petAge && petBreed && petGender && petSize) {
    const response = await fetch("/api/pets", {
      method: "POST",
      body: JSON.stringify({
        pet_name: petName,
        age: petAge,
        breed: petBreed,
        gender: petGender,
        size: petSize
      }),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

const findPetFormHandler = async (event) => {
  event.preventDefault();
  const petName = document.querySelector("#pet-name").value.trim();
  const petAge = document.querySelector("#pet-age").value.trim();
  const petBreed = document.querySelector("#pet-breed").value.trim();
  const petGender = document.querySelector("#pet-gender").value.trim();
  const petSize = document.querySelector("#pet-size").value.trim();

  if (petName && petAge && petBreed && petGender && petSize) {
    const response = await fetch("/api/pets", {
      method: "GET",
      body: JSON.stringify({
        pet_name: petName,
        age: petAge,
        breed: petBreed,
        gender: petGender,
        size: petSize
      }),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

const addFavorite = async (event) => {
  event.preventDefault();

  if (owner_id) {
    const response = await fetch("/api/favorites", {
      method: "POST",
      body: JSON.stringify({ owner_id: req.session.user_id }),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};
const delFavorite = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute("id")) {
    const id = event.target.getAttribute("id");

    const response = await fetch(`/api/favorites/${id}`, {
      method: "DELETE"
    });

    if (response.ok) {
      document.location.replace("/profile");
    }
  }
};
const delPet = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute("id")) {
    const id = event.target.getAttribute("id");

    const response = await fetch(`/api/pets/${id}`, {
      method: "DELETE"
    });

    if (response.ok) {
      document.location.replace("/profile");
    }
  }
};

document.querySelector("#add-pet").addEventListener("click", addPetFormHandler);
document
  .querySelector("#find-pet")
  .addEventListener("click", findPetFormHandler);
document.querySelector("#add-favorite").addEventListener("click", addFavorite);
document.querySelector("#del-favorite").addEventListener("click", delFavorite);
document.querySelector("#del-pet").addEventListener("click", delPet);
