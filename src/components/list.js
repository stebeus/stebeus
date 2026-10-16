export const List = ({ items, children }) => {
	const renderItem = (item) => `<li>${children(item)}</li>`;
	return `<ul class="list">${items.map(renderItem).join('')}</ul>`;
};
