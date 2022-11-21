let buttonSearch = document.querySelector(".Submit__button");
buttonSearch.addEventListener("click", checkAfterSubmit);

function checkAfterSubmit() {
  let inputName = document.querySelector("#input-first");
  let inputSName = document.querySelector("#input-second");
  let inputStreet = document.querySelector("#input-street");
  let inputHouse = document.querySelector("#input-house");
  let inputFlat = document.querySelector("#input-flat");
  //let thankForOreder = document.querySelector("#comlete");
  // console.log(thankForOreder);

  let form = document.querySelector("#form-user");
  form.innerHTML = `Thank you for your order, ${inputName.value.toUpperCase()} ${inputSName.value.toUpperCase()}! 

  We will deliver your order very soon to this Address: ${
    inputFlat.value
  } ap, ${inputHouse.value}, ${inputStreet.value.toUpperCase()} St.`;
}
