let btn=document.querySelector('#new');
let quote=document.querySelector('.quote');
let author=document.querySelector('.author');
const quotes=[{
    "quote": "Believe you can and you're halfway there.",
    "author": "Theodore Roosevelt"
},{
    "quote": "The way to get started is to quit talking and begin doing.",
    "author": "Walt Disney"
},{
    "quote": "Success is not final, failure is not fatal: It is the courage to achieve dreams.",
    "author": "Winston Churchill"
},{
    "quote": "Don't watch the clock; do what it does. Keep going.",
    "author": "Sam Levenson"
},{
    "quote": "You miss 100% of the shots you don't take.",
    "author": "Wayne Gretzky"
},{
    "quote": "I have not failed. I've just found 10,000 ways that leads to success.",
    "author": "Thomas Edison"
},{
    "quote": "You are never too old to set another goal or to dream a new dream.",
    "author": "C.S. Lewis"
},{
    "quote": "The best way to predict your future is to create it.",
    "author": "Abraham Lincoln"
},{
    "quote": "You don't have to be great to start, but you have to start.",
    "author": "Dolly Parton"
},{
    "quote": "The only way to do great work is to love what you do.",
    "author": "Steve Jobs"
}];
btn.addEventListener('click',function(){
    let random=Math.floor(Math.random()*quotes.length);
    quote.textContent=quotes[random].quote;
    author.textContent=quotes[random].author;
})

