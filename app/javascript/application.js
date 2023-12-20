// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

import "@doabit/semantic-ui-sass";

$(document).on("turbolinks:load", function () {
  $(".ui.dropdown").dropdown();
});
