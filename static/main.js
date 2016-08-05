// Generated by CoffeeScript 1.9.2
(function() {
  var handle;

  handle = function(serp, status, resp) {
    var rendered, template;
    template = $('#template').html();
    Mustache.parse(template);
    rendered = Mustache.render(template, serp);
    return $("#serp").html(rendered);
  };

  window.search = function() {
    var q;
    q = $('#q').val();
    $.getJSON('/api', {
      q: q
    }, handle);
    return true;
  };

}).call(this);
