document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var side_instances = M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var modal_instances = M.Modal.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var materialboxed_instances = M.Materialbox.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var parallax_instances = M.Parallax.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tabs');
  var tabs_instances = M.Tabs.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var options = { disableWeekends: true };
  var elems = document.querySelectorAll('.datepicker');
  var datepicker_instances = M.Datepicker.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  var options = { position: 'bottom' }
  var elems = document.querySelectorAll('.tooltipped');
  var tooltip_instances = M.Tooltip.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.scrollspy');
  var scroll_instances = M.ScrollSpy.init(elems);
});


// REMOVE options if not used!!!
