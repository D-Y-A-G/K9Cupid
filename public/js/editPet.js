session.user_id

const editPetFormHandler = async (event) => {
  event.preventDefault();
  const petName = document.querySelector("#pet-name").value.trim();
  const petAge = document.querySelector("#pet-age").value.trim();
  const petBreed = document.querySelector("#pet-breed").value.trim();
  const petGender = document.querySelector("#pet-gender").value.trim();
  const petSize = document.querySelector("#pet-size").value.trim();
  const petImage = document.querySelector("#pet-image").value.trim();

  if (petName && petAge && petBreed && petGender && petSize) {
    const response = await fetch(`/api/pets/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        pet_name: petName,
        age: petAge,
        breed: petBreed,
        gender: petGender,
        size: petSize,
        image: petImage
      }),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      document.location.replace("/pets/:id");
    } else {
      alert(response.statusText);
    }
  }
};
