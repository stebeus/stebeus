export const List = ({ items, children }) => {
	const renderItem = (item) => `<li>${children(item)}</li>`;
	return `<ul>${items.map(renderItem).join('')}</ul>`;
};
