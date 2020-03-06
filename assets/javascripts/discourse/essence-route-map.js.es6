export default function(){
  this.route('enssence', function(){
    this.route('hello', {path: '/hello' }, function(){
      this.route('show', {path: '/'});
    });
  });
};