/**
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: 'img/telegram-bot.png',
		title: 'E-commerce Deals Bot',
		skills: ['Python', 'Telegram', 'MongoDB', 'Heroku'],
		descripcion:
			'Telegram Bot that sends the best deals from Mercado Libre (so far) Done by API/Web Scraping. It stores the offers on MongoDB Cloud. The bot is hosted on Heroku.',
		demoURL: 'https://t.me/superdescuentos_mx',
		repoURL:
			'https://github.com/alexjamesmx/e-commerce-offers-telegram-bot',
		anim: 'fade-right',
	},
	{
		imgSrc: 'img/num-guessing-game.png',
		title: 'Number Guessing Game',
		skills: ['Java', 'Android'],
		descripcion:
			'Android App that generates a random number and the user has to guess it. It has 3 levels of difficulty. It was made with Java and Android Studio.',
		demoURL: 'https://github.com/alexjamesmx/Num-Guesser-Game',
		repoURL: 'https://github.com/alexjamesmx/Num-Guesser-Game',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	Python: 'logos:python',
	Telegram: 'logos:telegram',
	MongoDB: 'devicon:mongodb-wordmark',
	Heroku: 'logos:heroku-icon',
	Java: 'logos:java',
	Android: 'openmoji:android',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
