import { ajax } from "discourse/lib/ajax";
export default Discourse.Route.extend({
   model() {
   alert("test.js.es6")
    return ajax("/test.json").then(result => result.about);
    //return "test";
  }
 })