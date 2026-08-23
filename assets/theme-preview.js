(function () {
  var LIGHT_LABEL = "Preview this section in dark mode";
  var DARK_LABEL = "Back to light mode";

  function init() {
    var panels = document.querySelectorAll(".theme-preview");
    Array.prototype.forEach.call(panels, function (panel) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "theme-preview-toggle";
      button.textContent = LIGHT_LABEL;
      button.setAttribute("aria-pressed", "false");

      button.addEventListener("click", function () {
        var dark = panel.classList.toggle("is-dark");
        button.textContent = dark ? DARK_LABEL : LIGHT_LABEL;
        button.setAttribute("aria-pressed", dark ? "true" : "false");
      });

      panel.insertAdjacentElement("afterend", button);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
