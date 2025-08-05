# Custom-HTML-elements
Some HTML input elements appear differently across browsers. The elements defined in this repo ensure your design remains consistent across all of them.

## CustomCheckbox
### constructor
Parameters:
- parent(HTMLElement): the element where you want to insert the custom checkbox. Does not work on self closing tags, like img, input.
- index(number: the position in the parent where you want to insert the custom checkbox (0 for first etc.)
- checked(boolean, optional): check/uncheck the checkbox. Default value `false`
- disabled(boolean, optional): enable/disable the checkbox. Default value `false`

Examples:
```js
	const myCheckbox = new CustomCheckbox(document.getElementById('container'),0);
	const myCheckbox = new CustomCheckbox(document.getElementById('container'), 0, checked = true, disabled = true);
```
