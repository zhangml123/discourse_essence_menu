export default Discourse.Route.extend({
   model() {
    return ajax("/test.json").then(result => result.about);
  }
 })