export default Discourse.Route.extend({
   model:function() {
     return ajax('/test.json');
   }
 })