import { withPluginApi } from "discourse/lib/plugin-api";
import { mapRoutes } from "discourse/mapping-router";

function initialize(api) {
	alert("test2")


}


export default {
  name: "essence_map",
  initialize(container, app) {

  	alert("test11111")
    app.unregister("router:main");
    app.register("router:main", mapRoutes());
  }
};
