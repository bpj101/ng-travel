document.addEventListener('DOMContentLoaded', function() {
  // Sidenav
  const side_nav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(side_nav);

  // Modal
  const modal = document.querySelectorAll('.modal');
  M.Modal.init(modal);

  // Materialbox
  const mBox = document.querySelectorAll('.materialboxed');
  M.Materialbox.init(mBox);

  // Parallax
  const parallax = document.querySelectorAll('.parallax');
  M.Parallax.init(parallax);

  // Tabs
  const tabs = document.querySelectorAll('.tabs');
  M.Tabs.init(tabs);

  // Datepicker
  const date_options = { disableWeekends: true };
  const date_picker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(date_picker, date_options);

  // Tooltip
  const tool_options = { position: 'bottom' }
  const tool = document.querySelectorAll('.tooltipped');
  M.Tooltip.init(tool, tool_options);

  // Scrollspy
  const scroll = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(scroll);

  // Slider
  const slider_options = {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
  };
  const slider = document.querySelectorAll('.slider');
  M.Slider.init(slider, slider_options);

  // Autocomplete
  const autoOptions = {
    data: {
      "Aruba": null,
      "Cancun Mexico": null,
      "Hawaii": null,
      "Florida": null,
      "California": null,
      "Jamacia": null,
      "Europe": null,
    }
  }
  const autoComplete = document.querySelector('.autocomplete');
  M.Autocomplete.init(autoComplete, autoOptions);

});


// REMOVE options if not used!!!
