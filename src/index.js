import { App } from './app.js';

const root = document.querySelector('#root');
if (root == null) throw new Error('Element with id `#root` is missing');

root.innerHTML = await App();
