const quotes = [
  {
    quote:
      "Compare yourself to who you were yesterday, not to who someone else is today.",
    author: "Jordan B. Peterson",
  },
  {
    quote:
      "I can accept failure, everyone fails at something. But I can't accept not trying.",
    author: "Michael Jordan",
  },
  {
    quote: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey",
  },
  {
    quote: "Learn the rules like a pro, so you can break them like an artist.",
    author: "Pablo Picasso",
  },
  {
    quote:
      "Remember that no matter how cool you think you may be, you're not cool enough to look down on anyone...ever.",
    author: "Paul Walker",
  },
  {
    quote:
      "Everyone thinks of changing the world, but no one thinks of changing himself.",
    author: "Lev Tolstoy",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    author: "Mark Twain",
  },
  {
    quote:
      "두려워하지 말라 내가 너와 함께 함이라 놀라지 말라 나는 네 하나님이 됨이라 내가 너를 굳세게 하리라 참으로 너를 도와 주리라 참으로 나의 의로운 오른손으로 너를 붙들리라",
    author: "이사야 41:10",
  },
  {
    quote: "사랑엔 거짓이 없나니 악을 미워하고 선에 속하라",
    author: "로마서 12:9",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
