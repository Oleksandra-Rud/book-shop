async function getBook() {
  await fetch("books.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

getBook();
