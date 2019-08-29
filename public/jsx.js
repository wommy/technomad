function $(node, props) {
	const element = node === $ ? document.createDocumentFragment() : node instanceof Node ? node : document.createElement(node);
	for (const prop in Object(props)) /^on/.test(prop) ? element.addEventListener(prop.slice(2), props[prop]) : e.setAttribute(prop, props[prop]);
	for (let child = Array.prototype.slice.call(arguments, 2), i = -1; ++i in child; ) element.appendChild(typeof child[i] === 'string' ? document.createTextNode(child[i]) : child[i]);
	return element;
}