let body = document.getElementsByTagName("body");
let fragment = new DocumentFragment();
let nameBookShop = document.createElement("h1");
nameBookShop.innerText = "JS Book-Shop - We sell only JS books";
fragment.appendChild(nameBookShop);
document.body.appendChild(fragment);

//function h1 (text) {let h1 = document.createElement(`h1`);
//h1.appendChild(document.createTextNode(text));
//document.body.appendChild(h1);}

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
            <div class="book__button">
              <button type="button" class="add-to-bag">Add to Bag</button>
            </div> </div>`;
    booksEl.appendChild(bookEl);
  });
}
