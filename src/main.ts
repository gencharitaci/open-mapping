import "./app.postcss"
import "./lib/registerServiceWorker"
import Disclaimer from './lib/Disclaimer.svelte'


const disclaimerElement = document.getElementById("disclaimer");
if (disclaimerElement) {
  new Disclaimer({
    target: disclaimerElement
  });
} 