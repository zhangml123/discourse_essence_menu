import { ajax } from "discourse/lib/ajax";
alert("essence.js.es6")


export default Discourse.Route.extend({
  model() {
    //return ajax("/about.json").then(result => result.about);
    return "worked";
  }
});
