# Material UI Icon Usage

This document provides guidelines on how to use Material UI Icons in the project.

## Package Used

The project uses the `@mui/icons-material` package for Material UI Icons.

## Importing Icons

You can import the icons you need from the `@mui/icons-material` package. For example, to import the `DarkModeIcon` and `ContrastIcon`, you can do the following:

```typescript
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ContrastIcon from '@mui/icons-material/Contrast';

export {
  DarkModeIcon,
  ContrastIcon
};
```

Icons should be imported into the project in the `MaterialUIIcons.ts` file and imported into pages from there.

## Using Icons in Components

Once you have imported the icons, you can use them in your components. Here is an example of how to use the `DarkModeIcon` and `ContrastIcon` in a button to toggle themes:

```tsx
import React from 'react';
import { Button } from '@mui/material';
import { DarkModeIcon, ContrastIcon } from './imports/MaterialUIIcons';

const ThemeToggleButton = ({ darkMode, toggleTheme }) => (
  <Button onClick={toggleTheme}>
    {darkMode ? <DarkModeIcon /> : <ContrastIcon />} Toggle Theme
  </Button>
);

export default ThemeToggleButton;
```

By following these steps, you can effectively use Material UI Icons in your project.
