import prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import darkTheme from 'prismjs/themes/prism-okaidia.css';
import lightTheme from 'prismjs/themes/prism.css';

export { lightTheme, darkTheme };

let styleNode: HTMLStyleElement | undefined;

if (typeof window !== 'undefined') {
	styleNode = document.createElement('style');
	styleNode.setAttribute('data-prism', 'true');

	if (document.head) {
		document.head.appendChild(styleNode);
	}
}

export function setPrismTheme(theme: string) {
	styleNode.textContent = theme;
}

export default prism;
