const sanitizeString = (string) => {
	const nonAlphanumericRegex = /[^\p{L}\p{N}]+/gu;
	return string.replace(nonAlphanumericRegex, ' ').trim();
};

export const toKebabCase = (string) => sanitizeString(string).toLowerCase().replaceAll(' ', '-');
