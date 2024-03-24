// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector('.quote');
let person = document.querySelector(".person");
let arquote = document.querySelector(".arquote")

const quotes = [{
    arquote: '"من عاش بالمكر مات بالفقر"'
    , quote: '"Barang siapa yang hidup dengan membuat makar maka dia akan mati dalam keadaan fakir"'
    , person: "Al-Imam Ibnul Qayyim - rahimahullah"
}, {
    arquote: '""',
    quote: `""`,
    person: "Unknown"
}, {
    arquote: '""',
    quote: `""`,
    person: "Unknown"
}
];

btn.addEventListener('click', () => {

    let random = Math.floor(Math.random() * quotes.length);

    arquote.innerText = quotes[random].arquote;
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    arquote.classList.add('effect');
    quote.classList.add('effect');
    person.classList.add('effect');
    setTimeout(function () {
        arquote.classList.remove('effect');
        quote.classList.remove('effect');
        person.classList.remove('effect');
    }, 500)


})