import { withPluginApi } from "discourse/lib/plugin-api";
import { h } from "virtual-dom";
import { ajax } from "discourse/lib/ajax";
function initialize(api) {
	api.addNavigationBarItem({
      name: "essence",
      displayName: "essence",
      href: "https://www.discourse.org",
    })
}


export default {
  name: "essence_menu",
  initialize() {
    withPluginApi("0.8.7", initialize);
  }
};
