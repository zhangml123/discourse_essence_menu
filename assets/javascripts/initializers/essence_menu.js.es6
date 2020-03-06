import { withPluginApi } from "discourse/lib/plugin-api";
import { h } from "virtual-dom";
import { ajax } from "discourse/lib/ajax";
function initialize(api) {
	
  Discourse.NavItem.reopenClass({
    buildList : function(category, args) {
      var list = this._super(category, args);
      if(category && category.name == "Formations") {
        list.push(Discourse.ExternalNavItem.create({href: '/t/liste-2-0-des-formations-sur-lautosuffisance-et-la-consommation-ecoresponsable-en-2018/306', name: 'Liste'}));
      }
      return list;
    }
  });


}


export default {
  name: "theme",
  initialize() {
    withPluginApi("0.8.7", initialize);
  }
};
