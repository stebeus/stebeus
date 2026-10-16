import { toKebabCase } from '../utils/formatters.js';

export const Icon = ({ title }) => `
  <svg class="icon" width="40" height="40" fill="currentColor">
  	<title>${title}</title>
		<use href="public/icons.svg#${toKebabCase(title)}-icon" />
  </svg>
`;
