export default function(){
  this.route('discourse-essence', function(){
    this.route('hello', {path: '/hello' }, function(){
      this.route('show', {path: '/'});
    });
  });
};