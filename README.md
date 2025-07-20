# React Vite Component Library

This project is a modern React component library built with Vite and TypeScript. It supports per-component imports, per-component CSS, and a shared common CSS file for easy integration and tree-shaking.

## Usage

### 1. Install the Library

If published to npm:
```sh
npm install react-vite-lib
```

For local development/testing, see the **Local Development** section below.

### 2. Import Components and CSS

**Per-component import:**
```tsx
import Button from 'react-vite-lib/Button';
import 'react-vite-lib/Button/Button.css';

import Card from 'react-vite-lib/Card';
import 'react-vite-lib/Card/Card.css';

import Alert from 'react-vite-lib/Alert';
import 'react-vite-lib/Alert/Alert.css';
```

**Import shared/common styles:**
```tsx
import 'react-vite-lib/common.css';
```

### 3. TypeScript Support

All components include `.d.ts` type definitions for full TypeScript support.

### 4. External Peer Dependencies

This library does **not** bundle `react`, `react-dom`, or `react/jsx-runtime`. Make sure your project has compatible versions installed:
```sh
npm install react react-dom
```

---

## Local Development & Testing

To test this library in another local app **before publishing**:

### Option A: npm link (symlink)
1. In the library folder:
   ```sh
   npm run build
   npm link
   ```
2. In your test app folder:
   ```sh
   npm link react-vite-lib
   ```

### Option B: file: protocol
1. In your test app's `package.json`:
   ```json
   "dependencies": {
     "react-vite-lib": "file:../path/to/react-vite-lib"
   }
   ```
2. Then run:
   ```sh
   npm install
   ```

---

## Project Structure

- `src/components/Button/` — Button component and styles
- `src/components/Card/` — Card component and styles
- `src/components/Alert/` — Alert component and styles
- `src/components/common.css` — Shared/common styles

---

## Building the Library

```sh
npm run build
```
Outputs ES modules and CSS files for each component in `dist/`.

---

## License
MIT
