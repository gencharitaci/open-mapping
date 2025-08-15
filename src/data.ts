import "./app.postcss"
import "./lib/registerServiceWorker"

import AssetList from "./lib/AssetList.svelte"


const appElement = document.getElementById("app")!;
const app = new AssetList({
  target: appElement,
  props: {
    jsonFile: "https://maps.mecklenburgcountync.gov/opendata/data.json"
  }
});
