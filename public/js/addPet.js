const addPetFormHandler = async (event) => {
  event.preventDefault();
  const petName = document.querySelector("#pet-name").value.trim();
  const petAge = document.querySelector("#pet-age").value.trim();
  const petBreed = document.querySelector("#pet-breed").value.trim();
  const petGender = document.querySelector("#pet-gender").value.trim();
  const petSized = document.querySelector("#pet-size").value.trim();
  const userId = sessionStorage.getItem("userId");
  console.log(userId);
};

document.querySelector("#add-pet").addEventListener("click", addPetFormHandler);
