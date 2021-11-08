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
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#add-pet")
  .addEventListener("submit", addPetFormHandler);
document
  .querySelector("#find-pet")
  .addEventListener("submit", findPetFormHandler);
