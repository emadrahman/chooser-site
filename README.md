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

## Maintenance

Update the "Last updated" date at the top of `privacy.html` whenever its
substance changes, and note material changes in the app's What's New. Section 4
lists every analytics event the app sends (`Helpers/Analytics.swift` in the app
repo), so adding, removing, or changing an event means updating it here too.
