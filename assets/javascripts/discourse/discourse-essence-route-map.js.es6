export default function(){
  this.route('discourse-enssence', function(){
    this.route('hello', {path: '/hello' }, function(){
      this.route('show', {path: '/'});
    });
  });
};