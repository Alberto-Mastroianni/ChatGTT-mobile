// Import Framework7
import Framework7 from './framework7-custom.js';

// Import Framework7-Svelte Plugin
import Framework7Svelte from 'framework7-svelte';

// Import Framework7 Styles
import '../css/framework7-custom.less';

// Import Icons and App Custom Styles

import '../css/app.less';

// Import App Component
import App from '../components/app.svelte';

// Init F7 Svelte Plugin
Framework7.use(Framework7Svelte)

// Mount Svelte App
const app = new App({
  target: document.getElementById('app'),
});