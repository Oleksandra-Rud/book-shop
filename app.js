let body = document.getElementsByTagName("body");
let fragment = new DocumentFragment();
let nameBookShop = document.createElement("h1");
nameBookShop.innerHTML = `<div class="h1__name">JS Book-Shop - We sell only JS books</div>
<div class="h1__button">
              <button type="button" id="confirm-order">Confirm Order</button>
            </div>`;
fragment.appendChild(nameBookShop);
document.body.appendChild(fragment);

document.getElementById("confirm-order").onclick = function () {
  location.href = "form.html";
};

async function getBook() {
  await fetch("books.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      showBooks(data);
    });
}

getBook();

function showBooks(respData) {
  const booksEl = document.querySelector(".books");

  respData.forEach((book) => {
    const bookEl = document.createElement("div");
    bookEl.classList.add("book");
    bookEl.innerHTML = `<div class="book__cover-inner">
            <img
              src="${book.imageLink}"
              class="book__cover"
              style="width: 300px"
            />
            <div class="book__cover--darkened"></div>
          </div>

          <div class="book__info">
            <div class="book__title">${book.title}</div>
            <div class="book__author">${book.author}</div>
            <div class="book__price"><span class="priceN">${book.price}</span> $</div>
            <div class="buttons__together">
            <div class="info__button">
              <button type="button" class="modalButton">More Info</button>
            </div>
            <div class="book__button">
              <button type="button" class="add-to-bag">Add to Bag</button> </div>
            </div> </div>`;
    //const btnOpen = document.querySelector(".view-info");
    booksEl.addEventListener("click", () => openModal(book.title));

    booksEl.appendChild(bookEl);
  });
}

//modal element
const modalEl = document.querySelector(".modal");
async function openModal() {
  const resp = await fetch("books.json");
  const respData = await resp.json();
  respData.forEach((book) => {
    modalEl.classList.add("modal--show");

    modalEl.innerHTML = `
<div class="modal__card">
  <img src="${book.imageLink}" class="modal__book-backdrop" alt="">
  <h2>
    <span class="modal__book-title">${book.title}</span>
    <span class="modal__book-author">${book.author} </span>

  </h2> 
  <div class="modal__book-info">
    <div class="loader"></div>
    <div class="modal__book-overview">${book.description}</div>
  </div>
  <button type="button" class="modal__button-close">Close Description</button>
<div>`;
    const btnClose = document.querySelector(".modal__button-close");
    btnClose.addEventListener("click", () => closeModal());
  });
}

function closeModal() {
  modalEl.classList.remove("modal--show");
}
