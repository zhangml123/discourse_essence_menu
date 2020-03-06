import { ajax } from "discourse/lib/ajax";
alert("essence.js.es6")


export default Discourse.Route.extend({
  model() {
  	alert("essence.js.es61")
  	  //return ajax("/test.json").then(result => (alert(result)));
    return "worked";
  }
});
