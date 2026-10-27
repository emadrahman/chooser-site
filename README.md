# Chooser site

Three static pages for the Chooser iPhone and iPad app: a landing page, a
support page, and the privacy policy. No build step, no dependencies: plain HTML
with one shared stylesheet, light and dark, the same as the What Now and FeltIt
sites. English only.

They exist for two App Store requirements:

- **Guideline 5.1.1(i)**: a privacy policy link reachable inside the app.
- **Guideline 1.5**: a Support URL in App Store Connect, which must be a web
  page (a `mailto:` address isn't accepted in that field).

Published with GitHub Pages from `emadrahman/chooser-site`, branch `main`,
folder `/ (root)`.

## URLs

| Page | URL | Where it goes |
|---|---|---|
| Landing | `https://emadrahman.github.io/chooser-site/` | App Store Connect *Marketing URL* (optional) |
| Support | `https://emadrahman.github.io/chooser-site/support.html` | App Store Connect *Support URL* |
| Privacy policy | `https://emadrahman.github.io/chooser-site/privacy.html` | `SettingsView.privacyPolicyURL` in the app, and the App Store Connect *Privacy Policy URL* |

The privacy policy URL is compiled into the app, so moving it means shipping a
new build. If a custom domain is likely, point it at this repository first.

## Languages

The privacy policy is also translated into the app's other five languages, one
folder each (`de/`, `fr/`, `es/`, `pt-BR/`, `ja/`) — exactly the set in the app's
String Catalog, and the same design as the FeltIt site. **English is the legally
binding version**; every translated page says so and links back to it. The
landing and support pages are English only.

A globe menu on each policy page switches language. `lang.js` does two things:

- On the **English** policy only (marked `data-autolang`), a first-time visitor
  is forwarded to their browser's language. The app compiles in the English URL
  and opens it in Safari's in-app browser, which sends the device language, so
  a Japanese user lands on `ja/privacy.html` without a new build. Any
  Portuguese goes to `pt-BR`, as in the app.
- A language picked from the menu is saved in `localStorage` and always beats
  the browser language — including picking English, which stops the forward.

Translated pages never redirect, so a direct link to one always shows it.
Without JavaScript every page still works; only the automatic forward is lost.

In-app labels quoted in the policy (Settings › Privacy › Share Anonymous Usage,
tab and tool names, Tip Jar, What's New) use the app's own translations from
`Finger Chooser/Localizable.xcstrings`, so they match what the user sees on
screen. iOS's own settings names (Share With App Developers, Analytics &
Improvements) use Apple's translations. The translations use the formal
register (Sie, usted, vous), as legal pages conventionally do, even though the
app's UI is informal.

## Maintenance

Update the "Last updated" date at the top of `privacy.html` — and in all five
translations — whenever its substance changes, and note material changes in the app's What's New. Section 4
lists every analytics event the app sends (`Helpers/Analytics.swift` in the app
repo), so adding, removing, or changing an event means updating it here too, in every
language.
