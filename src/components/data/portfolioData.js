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
		imgSrc: 'img/portfolio/telegram-bot.png',
		title: 'E-commerce Deals Bot',
		skills: ['Python', 'Telegram', 'MongoDB', 'Heroku'],
		descripcion:
			'Telegram Bot that sends the best deals from Mercado Libre (so far) Done by API/Web Scraping. It stores the offers on MongoDB Cloud. The bot is hosted on Heroku.',
		demoURL: 'https://t.me/superdescuentos_mx',
		repoURL:
			'https://github.com/alexjamesmx/e-commerce-offers-telegram-bot',
		anim: 'fade-right',
		averageBrightness: 0.3,
	},
	{
		imgSrc: 'img/portfolio/icebreaker.png',
		title: 'Ice Breaker (Hackathon Colab)',
		skills: ['NextJS', 'Tailwind', 'React', 'MySQL', 'Vercel'],
		repoURL: 'https://github.com/alexjamesmx/iceBreaker',
		demoURL: 'https://the-ice-breaker.vercel.app/',
		anim: 'fade-up',
		descripcion:
			'Improve networking, social interaction, and events both fun and effortless 👨‍🏭🧕. Our vision is to create a relaxed environment where participants can easily connect through interactive games, similar to Kahoot.',
		averageBrightness: 0.3,
	},
	{
		imgSrc: 'img/portfolio/num-guessing-game.png',
		title: 'Number Guessing Game',
		skills: ['Java', 'Android'],
		descripcion:
			'Android App that generates a random number and the user has to guess it. It has 3 levels of difficulty. It was made with Java and Android Studio.',
		demoURL: 'https://github.com/alexjamesmx/Num-Guesser-Game',
		repoURL: 'https://github.com/alexjamesmx/Num-Guesser-Game',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: 'img/portfolio/next-oauth.png',
		title: 'Auth0 NextJS ToDo App',
		skills: ['NextJS', 'MongoDB', 'Auth0', 'Tailwind'],
		descripcion:
			'Fullstack ToDo App with NextJS, MongoDB, and Auth0. It has authentication, authorization, and CRUD operations. It was deployed on Vercel pointing custom domain.',
		demoURL: 'https://project1.alexjamesmx.dev',
		repoURL: 'https://github.com/alexjamesmx/TODOs_next_mongo_Auth0',
		anim: 'fade-up',
		averageBrightness: 0.2,
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
	NextJS: 'devicon:nextjs',
	Auth0: 'simple-icons:auth0',
	MySQL: 'logos:mysql',
	Vercel: 'gg:vercel',
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
