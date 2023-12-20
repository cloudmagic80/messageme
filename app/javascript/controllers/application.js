import { Application } from "@hotwired/stimulus";

import "@doabit/semantic-ui-sass";

$(document).on("turbolinks:load", function () {
  $(".ui.dropdown").dropdown();
});

const application = Application.start();

// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;

export { application };
