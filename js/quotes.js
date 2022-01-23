const quotes = [
  {
    quote:
      "There are two kinds of people in this world: those who want to get things done and those who don’t want to make mistakes.",
    author: "John Maxwell",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    quote:
      "Winners embrace hard work. They love the discipline of it, the trade-off they're making to win. Losers, on the other hand, see it as punishment. And that’s the difference.",
    author: "Lou Holtz",
  },
  {
    quote:
      "As a general rule, the most successful man in life is the man who has the best information.",
    author: "Benjamin Disraeli",
  },
  {
    quote: "The secret of success is to do the common things uncommonly well.",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "If people only knew how hard I’ve worked to gain my mastery, it wouldn’t seem so wonderful at all.",
    author: "Michelangelo",
  },
  { quote: "There is no substitute for hard work.", author: "Thomas Edison" },
  {
    quote: "There are no shortcuts to any place worth going.",
    author: "Beverly Sills",
  },
  {
    quote:
      "I don't love studying. I hate studying. I like learning. Learning is beautiful.",
    author: "Natalie Portman, actress.",
  },
  {
    quote:
      "Successful people begin where failures leave off. Never settle for ‘just getting the job done.’ Excel!",
    author: "Tom Hopkins, motivational speaker.",
  },
  {
    quote: "Success is the sum of small efforts, repeated day in and day out.",
    author: "Robert Collier",
  },
  { quote: "Without studying the soul sick.", author: "Seneca" },
  {
    quote:
      "If you work hard enough and assert yourself, and use your mind and imagination, you can shape the world to your desires.",
    author: "Malcolm Gladwell",
  },
  {
    quote:
      "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
    author: "Pele",
  },
  {
    quote: "An investment in knowledge pays the best interest",
    author: "Benjamin Franklin, writer and polymath.",
  },
  {
    quote:
      "Continuous learning is the minimum requirement for success in any field.",
    author: "Brian tracy",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi, activist.",
  },
  {
    quote:
      "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.",
    author: "Brian Herbert, author.",
  },
  {
    quote:
      "Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential.",
    author: "John Maxwell",
  },
  {
    quote:
      "The difference between ordinary and extraordinary is that little “extra”.",
    author: "Jimmy johnson",
  },
  {
    quote:
      "Learning is the only thing the mind never exhausts, never fears, and never regrets.",
    author: "Leonardo da Vinci",
  },
  {
    quote:
      "The dictionary is the only place that success comes before work. Work is the key to success, and hard work can help you accomplish anything.",
    author: "Vince Lombardi",
  },
  {
    quote: "Study the past if you want to intuit the future.",
    author: "Kong Qiu",
  },
  {
    quote:
      "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work.",
    author: "Stephen King",
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    quote:
      "Some people dream of accomplishing great things. Others stay awake and make it happen.",
    author: "Mohsin jameel",
  },
  {
    quote:
      "I do not know anyone who has got to the top without hard work. That is the recipe. It will not always get you to the top, but it should get you pretty near.",
    author: "Margaret Thatcher",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const quoteOfToday = quotes[Math.floor(Math.random() * quotes.length)];

console.log(`Quote: ${quoteOfToday.quote}`);
console.log(`Author: ${quoteOfToday.author}`);

quote.innerText = `\"${quoteOfToday.quote}\"`;
author.innerText = quoteOfToday.author;
