import { withPluginApi } from "discourse/lib/plugin-api";

function initialize(api) {
	alert("test5")

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
