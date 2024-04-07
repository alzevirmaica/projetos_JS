let quotes = [] // Declaração de uma variável para armazenar as citações

fetch('http://localhost:3000/quotes')
  .then(response => response.json())
  .then(data => {
    quotes = data; // Atribui os dados recebidos à variável quotes
    getQuote(); // Chama a função getQuote após obter as citações
  })
  .catch(error => console.error('Erro:', error));


const quoteBtn = document.getElementById("quoteBtn");
const quoteText = document.querySelector(".quote .text");
const quoteAuthor = document.querySelector(".quote .author");

function getQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[index].quote;
    quoteAuthor.textContent = "- " + quotes[index].author;
}

quoteBtn.addEventListener("click", getQuote);