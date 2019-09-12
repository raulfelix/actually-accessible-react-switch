## Actually accessible react switch

A fully [WCAG2.1](https://www.w3.org/WAI/WCAG21/Understanding/) compliant switch component.

This includes full keyboard support and will work with the following screen reader pairings:
* Chrome/Windows + Jaws
* Safari/OSX + Voice over

The behaviour in other pairings is not catered for so may or may not function as expected. In general however, testing with NVDA has also yielded good results.

### Installation
```npm i actually-accessible-react-switch --save```

### Usage

```
import ReactDOM from 'react-dom';
import React from 'react';
import Switch from 'actually-accessible-react-switch';

ReactDOM.render(
  <Switch
    id="demo1"
    label="Select an option"
    onChange={o => console.log(o)}
  />,
  window.document.getElementById('demo')
);
```

### Props
**id** `required` - Unique control identifier

**label** `required` - Not visible by set as aria-label attribute

**value** `optional` - Boolean for the initial state of the control

**className** `optional` - A string for a custom CSS class name

**readonly** `optional` - Defaults to false. Pass true to make the field readonly

**onChange** `required` - A function called when a the switch state is toggled

### Accessibility

Keyboard interaction

`TAB` Moves keyboard focus to, and between, switches. Read-only object will still receive focus.

`SPACE` `ENTER` Toggles the switch option either true (on) or false (off).