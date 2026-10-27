// Language selection for the Chooser privacy policy.
//
// The app compiles in the English URL (privacy.html), so the English page
// forwards a first-time visitor to their browser's language. Once someone picks
// a language from the globe menu, that choice wins over the browser and is
// never overridden. Translated pages never redirect, so a direct link to one
// always shows it. Without JavaScript every page still works; only the
// automatic forward is lost.
//
// SUPPORTED matches the languages the app itself ships in (its String
// Catalog's knownRegions, minus English).
(function () {
  var KEY = "chooser.lang";
  var SUPPORTED = ["de", "fr", "es", "pt-BR", "ja"];

  function load() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  // Maps a BCP 47 browser tag to a shipped folder, "en", or null (no match).
  // Any Portuguese goes to pt-BR, as the app's catalog does.
  function match(tag) {
    tag = (tag || "").toLowerCase();
    var primary = tag.split("-")[0];
    if (primary === "en") return "en";
    if (primary === "pt") return "pt-BR";
    return SUPPORTED.indexOf(primary) >= 0 ? primary : null;
  }

  if (document.documentElement.hasAttribute("data-autolang")) {
    var target = load();
    if (!target) {
      var prefs = navigator.languages || [navigator.language];
      for (var i = 0; i < prefs.length && !target; i++) target = match(prefs[i]);
    }
    if (target && target !== "en" && SUPPORTED.indexOf(target) >= 0) {
      var page = location.pathname.split("/").pop() || "privacy.html";
      location.replace(target + "/" + page + location.hash);
    }
  }

  document.addEventListener("click", function (e) {
    var link = e.target.closest && e.target.closest("a[data-lang]");
    if (link) save(link.getAttribute("data-lang"));
    document.querySelectorAll("details.lang[open]").forEach(function (d) {
      if (!d.contains(e.target)) d.removeAttribute("open");
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    document.querySelectorAll("details.lang[open]").forEach(function (d) {
      d.removeAttribute("open");
      d.querySelector("summary").focus();
    });
  });
})();
