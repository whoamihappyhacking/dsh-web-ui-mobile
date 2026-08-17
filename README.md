# dsh-web-ui-mobile

`dsh-web-ui-mobile` adds responsive phone and foldable layouts to the official DeepSeek Harness Web UI. It is a standalone DSH bundle and does not modify DeepSeek Harness source files.

## Features

- At widths up to 760px, the official sidebar and details columns open as overlays so the conversation retains the full usable width.
- At widths up to 600px, the collapsed sidebar occupies no layout space. In-flow sidebar and settings buttons appear beside the conversation title and in the empty conversation header.
- On phones, the sidebar slides over the conversation when opened, closes after a session is selected, and settings provide an in-flow back button.
- A collapsed details panel is removed from the phone layout, so its empty placeholder cannot cover the conversation.
- Phone settings use a full-screen vertical layout without horizontal page scrolling.
- Model and context popups stay inside the visible viewport. The composer uses a compact model label while retaining the full name as accessible text.
- Layouts wider than 760px retain the official tablet and desktop behavior.

## Install

Add a local checkout to an existing profile:

```sh
dsh plugin --profile web add ./dsh-web-ui-mobile
```

After the package is published to npm, install it by package name:

```sh
dsh plugin --profile web add dsh-web-ui-mobile
```

Restart the profile after installation. No separate build step is required because the browser entry is distributed as source JavaScript.

## Remove

```sh
dsh plugin --profile web remove dsh-web-ui-mobile
```

Restart the profile after removal.

## Development

Run the package checks before installing a checkout:

```sh
npm run check
```

The browser implementation is in `src/client.js`; `src/index.js` is the DSH host entry point. `cordis.patch.yml` mounts the plugin in the selected profile.

The plugin integrates with DOM slots exposed by the official Web UI. Changes to those slots may require a matching plugin update.

## License

MIT
