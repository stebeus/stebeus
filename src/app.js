import { Card, ExternalLink, Icon, List } from './components/index.js';
import { username } from './constants.js';
import { getProfile, getProjects } from './utils/fetch.js';

const socials = [
	{
		title: 'GitHub',
		href: `https://github.com/${username}`,
	},
];

export const App = async () => {
	try {
		const [profile, projects] = await Promise.all([await getProfile(), await getProjects()]);

		return `
			<header>
				<img width="128" height="128" src="${profile.avatar_url}" alt="Avatar">
				<h1>${profile.name}</h1>
				<p>${profile.bio}</p>
				${List({
					items: socials,
					children: ({ title, href }) => ExternalLink({ href, children: Icon({ title }) }),
				})}
			</header>
			<main>
				<h2>Projects</h2>
				${List({
					items: projects,
					children: ({ author, name, description }) =>
						Card({
							title: ExternalLink({
								href: `https://github.com/${author}/${name}`,
								children: name,
							}),
							description,
						}),
				})}
			</main>
		`;
	} catch ({ message }) {
		return `
      <p>${message}</p>
      <button type="button" onclick="window.location.reload(true)">Reload</button>
    `;
	}
};
