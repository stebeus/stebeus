import { toKebabCase } from '../utils/formatters.js';

export const Icon = ({ title }) => `
  <svg width="24" height="24" fill="currentColor">
  	<title>${title}</title>
		<use href="icons.svg#${toKebabCase(title)}-icon" />
  </svg>
`;
