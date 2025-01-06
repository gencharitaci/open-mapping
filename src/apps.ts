import "./app.postcss";
import "./lib/registerServiceWorker";

import AssetList from "./lib/AssetList.svelte";
import FossProjects from "./lib/FOSSProjects.svelte";



const appsElement = document.getElementById("apps")!;
const app = new AssetList({
  target: appsElement,
  props: {
    jsonFile: './json/apps.json',
  }
});

const projectsElement = document.getElementById("apps")!;
const projects = new FossProjects({
  target: projectsElement,
  props: {
    jsonFile: "./json/projects.json",
  }
});