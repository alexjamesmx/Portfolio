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
		imgSrc: 'img/portfolio/olostep.png',
		title: 'Browser AI Agent',
		skills: ['Express', 'React', 'MongoDB', 'Playwright', 'Python'],
		repoURL:
			'https://github.com/alexjamesmx/Hackathon-Browser-AI-Agent-Back',
		demoURL: 'https://olostep-hackathon-front.vercel.app/',
		Youtube: 'https://www.youtube.com/watch?v=BpNsOKiePzs&t=7s',
		anim: 'fade-up',
		descripcion:
			'Hackathon | Tool that web scrapes and uses AI to group and retrieve the most relevant information of any website.',
		averageBrightness: 0.3,
	},
	{
		imgSrc: 'img/portfolio/pinterest.png',
		title: 'Pinterest Like App',
		skills: ['PWA', 'Express', 'React', 'Tailwind', 'MongoDB', 'Firebase'],
		repoURL: 'https://github.com/alexjamesmx/Pinterest-Like-Frontend',
		demoURL: 'https://pinterest-like-frontend.vercel.app/',
		Youtube: 'https://www.youtube.com/watch?v=IJ2urwio_v4',
		anim: 'fade-up',
		descripcion:
			'Clone of Pinterest App (PWA + Service Worker). Consumes Unsplashed API for images. Authentication, infinite scroll, favorites + libraries.',
		averageBrightness: 0.3,
	},
	{
		imgSrc: 'img/portfolio/ratemyprofessor.png',
		title: 'Rate My Professor',
		skills: ['NextJS', 'OpenAI', 'Clerk', 'AI'],
		repoURL: 'https://github.com/alexjamesmx/Rate-My-Professor',
		demoURL: 'https://rate-my-professor-ps1e.vercel.app/',
		Youtube: 'https://www.youtube.com/watch?v=tLP4KK5v5Ek',
		anim: 'fade-up',
		descripcion:
			'Web app that uses OpenAI + Pinecone (vector database) + RAG concept to generate reviews for professors. It uses Clerk for authentication and NextJS for the frontend.',
		averageBrightness: 0.3,
	},
	{
		imgSrc: 'img/portfolio/inventory.png',
		title: 'Inventory Managment AI',
		skills: ['NextJS', 'MaterialUI', 'React', 'Firebase', 'OpenAI'],
		repoURL: 'https://github.com/alexjamesmx/Inventory-Management-System',
		demoURL: 'https://inventory-management-system-three-flax.vercel.app/',
		Youtube: 'https://www.youtube.com/watch?v=IZGCvlt2FrI',
		anim: 'fade-up',
		descripcion:
			'System powered with OpenAI. Camera + Image recognition. Recipe AI Generator. It uses Firebase for authentication and Firestore for the database. It has CRUD operations and a search bar with autocomplete.',
		averageBrightness: 0.3,
	},

	{
		imgSrc: 'img/portfolio/icebreaker.png',
		title: 'Ice Breaker SaaS demo',
		skills: ['NextJS', 'Tailwind', 'React', 'MySQL', 'Vercel'],
		repoURL: 'https://github.com/alexjamesmx/Hackathon-IceBreaker',
		demoURL: 'https://the-ice-breaker.vercel.app/',
		Youtube: 'https://www.youtube.com/watch?v=_u_-baDNG0o&t=2s',
		anim: 'fade-up',
		descripcion:
			'Hackathon | Improve networking, social interaction, and events both fun and effortless 👨‍🏭🧕. Our vision is to create a relaxed environment where participants can easily connect through interactive games, similar to Kahoot.',
		averageBrightness: 0.3,
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
	MaterialUI: 'mdi:material-ui',
	Firebase: 'devicon:firebase',
	OpenAI: 'mingcute:openai-fill',
	PWA: 'simple-icons:pwa',
	Express: 'skill-icons:expressjs-light',
	Playwright: 'logos:playwright',
	Clerk: 'simple-icons:clerk',
	AI: 'tabler:ai',
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
