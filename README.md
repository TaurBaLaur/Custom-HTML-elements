# Custom-HTML-elements
Some HTML input elements appear differently across browsers. The elements defined in this repo ensure your design remains consistent across all of them.

**Once in a while, check out this repo to see if you use the latest version.**

## Table of Contents
- [CustomCheckbox](#customcheckbox)

## CustomCheckbox

### How to use
Include this in the `<head>` section of your HTML file:
```html
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/TaurBaLaur/Custom-HTML-elements@1.0.0/custom-checkbox/custom-checkbox-styles.css">
	<script src="https://cdn.jsdelivr.net/gh/TaurBaLaur/Custom-HTML-elements@1.0.0/custom-checkbox/custom-checkbox-script.js"></script>
```

### Fields
- checkbox(`HTMLElement`): a reference to the element that represents the checkbox

### constructor
Parameters:
- parent(`HTMLElement`): the element where you want to insert the custom checkbox. Does not work on self closing tags, like img, input;
- index(`number`): the position in the parent where you want to insert the custom checkbox (0 for first etc.);
- checked(`boolean`, optional): check/uncheck the checkbox. Default: `false`;
- disabled(`boolean`, optional): enable/disable the checkbox. Default: `false`.

Examples:
```js
	const myCheckbox = new CustomCheckbox(document.getElementById('container'),0);
	const myCheckbox = new CustomCheckbox(document.getElementById('container'), 0, checked = true, disabled = true);
```

### isChecked
Returns `true` if the checkbox is checked, `false` otherwise.

### toggleChecked
Checks/unchecks the checkbox.

### isDisabled
Returns `true` if the checkbox is disabled, `false` otherwise.

### toggleDisabled
Enables/disables the checkbox.
