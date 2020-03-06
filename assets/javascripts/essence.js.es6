(function(){

  Discourse.ExternalNavItem = Discourse.NavItem.extend({
    href : function() {
      return this.get('href');
    }.property('href')
  });

  I18n.translations.en.js.filters.bugs = { title: "Bugs", help: "Open Bugs" };
  I18n.translations.en.js.filters.google = { title: "Google", help: "Navigate to Google" };

  Discourse.NavItem.reopenClass({
    buildList : function(category, args) {
      var list = this._super(category, args);
      if(category && category.name == "Travel") {
        list.push(Discourse.ExternalNavItem.create({href: '/category/bug', name: 'bugs'}));
        list.push(Discourse.ExternalNavItem.create({href: 'https://google.com', name: 'google'}));
      }
      return list;
    }
  });

})();