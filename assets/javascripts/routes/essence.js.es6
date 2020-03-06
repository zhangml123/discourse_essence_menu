export default Discourse.Route.extend({
   model:function() {
   		alert("essence.js");
     return ajax('/test.json');
   }
 })