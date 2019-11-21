// All images required for the Carousel
import fureverHome from "./images/fureverHome.png";
import burger from "./images/burger.png";
import clicky from "./images/clicky.png";
import friendFinder from "./images/friendFinder.png";
import bamazon from "./images/bamazon.jpg";
import crystal from "./images/crystalcollector.png";
import fridgeChef from "./images/fridgechef.png";
import giftastic from "./images/giftastic.png";
import hangman from "./images/hangman.png";
import liri from "./images/liri-node-app.png";
import trainTimes from "./images/traintimes.png";
import trivia from "./images/trivia.png";

const items = [
	{
		id: 1,
		src: fureverHome,
		altText: "FurEver Home",
		caption: "Project Two. I was lucky enough to work with the same group as I did during Project One, and we grew even further as an adaptable team. We had the option to build the app in React, which we took upon ourselves to attempt. We are happy with the result but do believe that it requires further editing to reach its full potential. The idea for this app was birthed through a strong passion for helping animals and their adoption, as too many are forgotten in shelters. Please adopt!",
		link: "https://github.com/seanbelverstone/FurEver-Home",
		live: "https://furever-home-app.herokuapp.com/"
	},
	{
		id: 2,
		src: burger,
		altText: "Sequelized Burger",
		caption: "Using Sequelize, the user is able to name a burger, then devour it! A great project for demonstrating the much more logical version of MySQL, I found Sequelize easier to conquer after hours of practice.",
		link: "https://github.com/seanbelverstone/sequelizedBurger",
		live: "https://burger-sequelize-app.herokuapp.com/"
	},
	{
		id: 3,
		src: clicky,
		altText: "Halo Themed Clicky Game",
		caption: "I found this one very enjoyable! Built entirely in React, much like this portfolio, I was introduced to the complexities of working in almost an entirely new language. I'm hoping to make all further projects in React as it's very intuitive, logical and fun to work in!",
		link: "https://github.com/seanbelverstone/Clicky-Game",
		live: "https://clicky-game-sb.herokuapp.com/"
	},
	{
		id: 4,
		src: friendFinder,
		altText: "Friend Finder",
		caption: "This app is very similar to 'Which character are you most like?' quizzes that were popular during the Internet's first boom. I enjoyed making this as I got to utilise my favorite film series again - Lord of the Rings. The math required for this app to work properly was challenging but I'm glad to say I overcame it.",
		link: "https://github.com/seanbelverstone/Friend-Finder",
		live: "https://fellowship-finder-application.herokuapp.com/"
	},
	{
		id: 5,
		src: bamazon,
		altText: "Bamazon",
		caption: "A CLI shopping application much like the famous website with a similar name. Users are able to place orders and deplete stock inventory, all of which is stored on a MYSQL server. The app will also use inquirer (which I LOVE) to guide the user through their experience.",
		link: "https://github.com/seanbelverstone/Bamazon",
		live: "https://github.com/seanbelverstone/Bamazon"
	},
	{
		id: 6,
		src: liri,
		altText: "LIRI - Node App",
		caption: "LIRI is much like the iPhone's SIRI, but it uses language interpretation rather than speech! LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies and will work through Node's command line input. This was my first, purely back-end assignment. It opened my eyes to a wider world of programming.",
		link: "https://github.com/seanbelverstone/liri-node-app",
		live: "https://github.com/seanbelverstone/liri-node-app"
	},
	{
		id: 7,
		src: fridgeChef,
		altText: "Fridge Chef",
		caption: "Project one, what a blast. Myself and three fellow programmers created this website in just two weeks. Working in our amazing group made the whole project an absolute joy. We set off with the desire to incorporate as many of the technologies we had learnt on our first 9 weeks in the bootcamp, and we are all very satisfied with the end result. I predominantly worked on the Ingredient Entry page and had a lot of fun utilising local storage, however we all were happy to help each other when required. This page lets the user select common ingredients from their fridge and the website returns a recipe.",
		link: "https://github.com/seanbelverstone/Fridge-Chef",
		live: "https://seanbelverstone.github.io/Fridge-Chef/"
	},
	{
		id: 8,
		src: trivia,
		altText: "Lord of the Rings Trivia",
		caption: "A Lord of the Rings trivia quiz. With dynamically appending questions, countdown timers and a rating screen at the end, this was one of my favorite projects to work on. Not just because of the theme used, but also because this project was the first one with full creative freedom. My favorite piece of feedback from this was: 'Your UI is beautiful' So proud!",
		link: "https://github.com/seanbelverstone/TriviaGame",
		live: "https://seanbelverstone.github.io/TriviaGame/"
	},
	{
		id: 9,
		src: trainTimes,
		altText: "Train Times",
		caption: "This project contains my first ever use of the back-end service, Firebase. I am quite fond of Firebase and its intricacies and it was extremely exciting to utilize a server for the first time. I designed this page in the colors of my grandfather's favorite style of train, the Southern Railway King Arthur - Sir Lamiel.",
		link: "https://github.com/seanbelverstone/Train-Times",
		live: "https://seanbelverstone.github.io/Train-Times/"
	},
	{
		id: 10,
		src: giftastic,
		altText: "GifTastic",
		caption: "This is a gif display website! Simply write in the name of a video game, click your shiny new button and an assortment of related gifs will display. I included an option for an amount of gifs to display for further functionality. This website required the use of APIs and AJAX calls, which were very exciting.",
		link: "https://github.com/seanbelverstone/Giftastic",
		live: "https://seanbelverstone.github.io/Giftastic/"
	},
	{
		id: 11,
		src: crystal,
		altText: "Crystal Collector",
		caption: "A simple, yet addictive Crystal Collector game, where the user has to carefully select the crystals to reach the target number. Each crystal contains a value that is intially hidden but reveals itself on the first click. I showed this to my family back in the UK and they had a blast!",
		link: "https://github.com/seanbelverstone/unit-4-game",
		live: "https://seanbelverstone.github.io/unit-4-game/"
	},
	{
		id: 12,
		src: hangman,
		altText: "UK Hangman",
		caption: "This was my first website created during the bootcamp. I used a theme based on the wonderful United Kingdom and although I initially found certain parts of this application quite challenging, through perseverance and dedication I overcame those hurdles. I love revisiting this website because it's easy to see how far I've come since my first couple of weeks of the bootcamp!",
		link: "https://github.com/seanbelverstone/Word-Guess-Game",
		live: "https://seanbelverstone.github.io/Word-Guess-Game/"
	}
];

export default items;