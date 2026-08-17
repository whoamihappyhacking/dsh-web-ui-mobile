window.__ModuleLoader__.load({
  id: "dsh-web-ui-mobile",
  factory: () => {
    var module = { exports: {} };
    var exports = module.exports;

    var CSS = `
@media (max-width: 760px) {
  html,
  body,
  #root {
    min-height: 100%;
    min-height: 100dvh;
    overflow: hidden;
  }

  [data-dsh-mobile-frame] {
    grid-template-columns: 56px minmax(0, 1fr) 0 !important;
    min-height: 100dvh;
  }

  [data-dsh-mobile-frame]:not([data-sidebar-collapsed]) {
    grid-template-columns: 0 minmax(0, 1fr) 0 !important;
  }

  [data-dsh-mobile-frame]::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: 880;
    background: var(--dsw-alias-bg-mask-1, rgb(0 0 0 / 24%));
    backdrop-filter: var(--dsw-mask-blur, blur(2px));
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: opacity 220ms ease, visibility 0s linear 220ms;
  }

  [data-dsh-mobile-frame]:not([data-sidebar-collapsed])::before {
    opacity: 1;
    visibility: visible;
    transition-delay: 0s;
  }

  [data-dsh-mobile-frame]:not([data-sidebar-collapsed]) [data-dsh-mobile-pane="sidebar"] {
    position: fixed !important;
    inset: 0 auto 0 0 !important;
    z-index: 900 !important;
    width: min(86vw, 320px) !important;
    max-width: 100vw !important;
    overflow: visible !important;
    box-shadow: 12px 0 32px rgb(0 0 0 / 18%);
  }

  [data-dsh-mobile-frame]:not([data-sidebar-collapsed]) [data-dsh-mobile-pane="sidebar"] [data-slot="sidebar"] > * {
    width: 100% !important;
    max-width: 100% !important;
    height: 100dvh !important;
  }

  [data-dsh-mobile-frame]:not([data-details-collapsed]) [data-dsh-mobile-pane="details"] {
    position: fixed !important;
    inset: 0 0 0 56px !important;
    z-index: 870 !important;
    width: auto !important;
    min-width: 0 !important;
    overflow: hidden !important;
    background: var(--dsw-alias-bg-base, #fff);
  }

  [data-dsh-mobile-frame] [data-side="sidebar"],
  [data-dsh-mobile-frame] [data-side="details"] {
    display: none !important;
  }

  [data-dsh-mobile-frame][data-details-collapsed] [data-dsh-mobile-pane="details"] {
    display: none !important;
  }
}

@media (max-width: 600px) {
  [data-dsh-mobile-frame][data-sidebar-collapsed],
  [data-dsh-mobile-frame]:not([data-sidebar-collapsed]) {
    grid-template-columns: minmax(0, 1fr) !important;
  }

  [data-dsh-mobile-frame] [data-dsh-mobile-pane="conversation"] {
    grid-column: 1 !important;
    width: auto !important;
    min-width: 0 !important;
  }

  [data-dsh-mobile-frame][data-sidebar-collapsed] [data-dsh-mobile-pane="sidebar"] {
    border-right: 0 !important;
    overflow: hidden !important;
  }

  [data-dsh-mobile-header-actions] {
    position: static !important;
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    gap: 2px;
    margin-right: 4px;
  }

  [data-dsh-mobile-header-actions] > button {
    position: static !important;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    min-width: 28px;
    height: 28px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: transparent;
    color: var(--dsw-alias-label-primary, #101828);
    cursor: pointer;
  }

  [data-dsh-mobile-header-actions] > button:hover,
  [data-dsh-mobile-header-actions] > button:focus-visible {
    background: var(--dsw-alias-interactive-bg-hover, rgb(0 0 0 / 5%));
  }

  [data-dsh-mobile-header-actions] svg {
    flex: none;
  }

  [data-dsh-mobile-header-actions][data-dsh-mobile-hero-actions] {
    flex: 0 0 40px;
    height: 40px;
    margin-right: 0;
    padding: 6px 8px;
    box-sizing: border-box;
  }

  [data-dsh-mobile-frame]:not([data-sidebar-collapsed]) [data-dsh-mobile-pane="sidebar"] {
    width: 100vw !important;
    box-shadow: none;
  }

  [data-dsh-mobile-frame] [data-dsh-mobile-pane="sidebar"] {
    position: fixed !important;
    inset: 0 auto 0 0 !important;
    z-index: 900 !important;
    width: 100vw !important;
    max-width: 100vw !important;
    overflow: visible !important;
    transform: translate3d(-100%, 0, 0);
    visibility: hidden;
    transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
      visibility 0s linear 220ms;
    will-change: transform;
  }

  [data-dsh-mobile-frame]:not([data-sidebar-collapsed]) [data-dsh-mobile-pane="sidebar"] {
    transform: translate3d(0, 0, 0);
    visibility: visible;
    transition-delay: 0s;
  }

  [data-dsh-mobile-frame][data-sidebar-collapsed]
    [data-dsh-mobile-pane="sidebar"]:has([role="dialog"][aria-modal="true"]) {
    transform: none;
    visibility: visible;
    transition: none;
  }

  [data-dsh-mobile-frame]:not([data-details-collapsed]) [data-dsh-mobile-pane="details"] {
    inset: 0 !important;
  }

  [role="dialog"][aria-modal="true"]:has([data-slot="settings.header"]) {
    position: fixed !important;
    inset: 0 !important;
    display: flex !important;
    flex-direction: column !important;
    width: 100vw !important;
    min-width: 0 !important;
    max-width: none !important;
    height: 100vh !important;
    height: 100dvh !important;
    min-height: 0 !important;
    max-height: none !important;
    overflow: hidden !important;
    border-radius: 0 !important;
  }

  [role="dialog"][aria-modal="true"]:has([data-slot="settings.header"]) > nav {
    flex: 0 0 auto !important;
    width: auto !important;
    max-width: none !important;
    padding: calc(10px + env(safe-area-inset-top)) 12px 10px !important;
    border-right: 0 !important;
    border-bottom: 1px solid var(--dsw-alias-border-l2, #e5e6eb) !important;
  }

  [role="dialog"][aria-modal="true"]:has([data-slot="settings.header"]) > nav > div:first-child {
    display: flex !important;
    align-items: center !important;
    min-width: 0 !important;
    gap: 8px !important;
  }

  [data-dsh-mobile-settings-back] {
    flex: 0 0 32px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 32px !important;
    min-width: 32px !important;
    height: 32px !important;
    padding: 0 !important;
    border: 0 !important;
    border-radius: 50% !important;
    background: transparent !important;
    color: var(--dsw-alias-label-primary, #101828) !important;
    cursor: pointer;
  }

  [data-dsh-mobile-settings-back]:hover,
  [data-dsh-mobile-settings-back]:focus-visible {
    background: var(--dsw-alias-interactive-bg-hover, rgb(0 0 0 / 5%)) !important;
  }

  [data-dsh-mobile-settings-back] > span {
    font-size: 22px;
    line-height: 1;
  }

  [role="dialog"][aria-modal="true"]:has([data-slot="settings.header"]) > nav > div:last-child {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 6px !important;
    width: 100% !important;
  }

  [role="dialog"][aria-modal="true"]:has([data-slot="settings.header"]) > nav > div:last-child > button {
    justify-content: flex-start !important;
    width: 100% !important;
    min-width: 0 !important;
    height: 38px !important;
    padding: 8px 10px !important;
  }

  [role="dialog"][aria-modal="true"]:has([data-slot="settings.header"]) > nav + div {
    flex: 1 1 auto !important;
    width: 100% !important;
    min-width: 0 !important;
    min-height: 0 !important;
    overflow: hidden !important;
    padding-bottom: env(safe-area-inset-bottom) !important;
  }

  [role="dialog"][aria-modal="true"]:has([data-slot="settings.header"]) > nav + div > div:last-child {
    min-width: 0 !important;
    overflow-x: hidden !important;
    overflow-y: auto !important;
  }

  [data-slot="settings.general.item"] > div:has(> div:first-child + span:last-child),
  [data-slot="settings.general.item"] > div:has(> div:first-child + button:last-child) {
    align-items: stretch !important;
    flex-direction: column !important;
    gap: 12px !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box !important;
    overflow: hidden !important;
  }

  [data-slot="settings.general.item"] > div:has(> div:first-child + span:last-child) > div:first-child,
  [data-slot="settings.general.item"] > div:has(> div:first-child + button:last-child) > div:first-child {
    width: 100% !important;
    max-width: none !important;
    padding-right: 0 !important;
    box-sizing: border-box !important;
  }

  [data-slot="settings.general.item"] > div:has(> div:first-child + span:last-child) > span:last-child,
  [data-slot="settings.general.item"] > div:has(> div:first-child + button:last-child) > button:last-child {
    align-self: stretch !important;
    width: 100% !important;
  }

  [data-slot="settings.general.item"] > div:has(> div:first-child + span:last-child) > span:last-child > button,
  [data-slot="settings.general.item"] > div:has(> div:first-child + button:last-child) > button:last-child {
    justify-content: space-between !important;
    width: 100% !important;
    max-width: none !important;
  }

  [data-slot="settings.general.item"] div:has(> button[aria-pressed]) {
    display: grid !important;
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
    gap: 8px !important;
  }

  [data-slot="settings.general.item"] div:has(> button[aria-pressed]) > button {
    min-width: 0 !important;
  }

  [data-slot="conversation.session.header"] > header {
    padding: 8px 8px 0 !important;
  }

  [data-slot="conversation.session.header"] > header > div:first-child > div:last-child {
    margin-left: 4px !important;
  }

  [data-slot="conversation.session.header.actions"] > span {
    flex: 0 0 20px !important;
    width: 20px !important;
    max-width: 20px !important;
    overflow: hidden !important;
    gap: 0 !important;
    font-size: 0 !important;
  }

  [data-slot="conversation.session.header.utilities"] > button {
    justify-content: center !important;
    width: 36px !important;
    min-width: 36px !important;
    height: 32px !important;
    padding: 0 !important;
    gap: 0 !important;
  }

  [data-slot="conversation.session.header.utilities"] > button > span {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    margin: -1px !important;
    padding: 0 !important;
    overflow: hidden !important;
    clip: rect(0 0 0 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

  [data-slot="conversation.session.header"] nav[aria-label="Session hierarchy"] {
    min-width: 0 !important;
    overflow: hidden !important;
  }

  [data-slot="conversation.session.header"] nav[aria-label="Session hierarchy"] button {
    max-width: 100% !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
  }

  [data-slot="conversation.session.header"] [role="tablist"] {
    gap: 18px !important;
    padding-left: 4px !important;
    overflow-x: auto !important;
  }

  [data-slot="conversation.input.model"] > div > button {
    flex: 0 1 auto !important;
    width: clamp(104px, calc(100vw - 250px), 132px) !important;
    min-width: 0 !important;
    max-width: 132px !important;
    padding-inline: 6px !important;
    gap: 4px !important;
  }

  [data-composer-card] > div:last-child > div:last-child {
    gap: 6px !important;
  }

  [data-slot="conversation.input.model"] > div > button > span:first-child {
    flex: 1 1 auto !important;
    display: block !important;
    max-width: none !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
  }

  [data-slot="conversation.input.model"] > div > button > span:nth-child(2) {
    display: none !important;
  }

  [data-dsh-mobile-popup] {
    position: fixed !important;
    top: auto !important;
    right: 12px !important;
    bottom: var(--dsh-mobile-popup-bottom, 112px) !important;
    left: 12px !important;
    z-index: 1100 !important;
    box-sizing: border-box !important;
    width: auto !important;
    max-width: none !important;
    max-height: min(360px, var(--dsh-mobile-popup-max-height, 60dvh)) !important;
    transform: none !important;
  }

  [data-dsh-mobile-popup="context"] > div:first-child {
    flex-wrap: wrap !important;
  }

  [data-dsh-mobile-popup="model"] {
    left: auto !important;
    right: 12px !important;
    width: min(240px, calc(100vw - 24px)) !important;
    min-width: 0 !important;
  }

  div:has(> [data-slot="conversation.hero.workspace"]):has(> [data-slot="conversation.hero.agentPreset"]) {
    display: flex !important;
    align-items: flex-start !important;
    flex-direction: column !important;
    gap: 4px !important;
    width: 100% !important;
    padding-inline: 20px !important;
    box-sizing: border-box !important;
  }

  div:has(> [data-slot="conversation.hero.workspace"]):has(> [data-slot="conversation.hero.agentPreset"]) > button:first-child,
  [data-slot="conversation.hero.agentPreset"] button {
    min-width: 0 !important;
    max-width: 100% !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
  }

  [role="menu"],
  [role="listbox"] {
    max-width: calc(100vw - 24px) !important;
  }
}
`;

    function apply(ctx) {
      var tag = document.createElement("style");
      tag.dataset.plugin = "dsh-web-ui-mobile";
      tag.textContent = CSS;
      document.head.append(tag);

      var viewport = document.querySelector('meta[name="viewport"]');
      var originalViewport = viewport && viewport.getAttribute("content");
      if (viewport && originalViewport && !originalViewport.includes("viewport-fit=cover")) {
        viewport.setAttribute("content", originalViewport + ", viewport-fit=cover");
      }

      var phoneQuery = window.matchMedia("(max-width: 600px)");
      var headerActions = document.createElement("div");
      headerActions.setAttribute("data-dsh-mobile-header-actions", "");
      var headerSidebarButton = document.createElement("button");
      headerSidebarButton.type = "button";
      var headerSettingsButton = document.createElement("button");
      headerSettingsButton.type = "button";
      headerActions.append(headerSidebarButton, headerSettingsButton);
      var settingsBackButton = document.createElement("button");
      settingsBackButton.type = "button";
      settingsBackButton.dataset.dshMobileSettingsBack = "";
      settingsBackButton.innerHTML = '<span aria-hidden="true">&#8592;</span>';

      function annotateFrame() {
        var rootSlot = document.querySelector('[data-slot="root"]');
        var frame = rootSlot && rootSlot.firstElementChild;
        if (!(frame instanceof HTMLElement)) return null;

        frame.setAttribute("data-dsh-mobile-frame", "");
        var panes = {};
        ["sidebar", "conversation", "details"].forEach(function (slotName) {
          Array.from(frame.children).forEach(function (candidate) {
            var outlet = candidate.querySelector(':scope > [data-slot="' + slotName + '"]');
            if (outlet) {
              candidate.setAttribute("data-dsh-mobile-pane", slotName);
              panes[slotName] = candidate;
            }
          });
        });
        return { frame: frame, panes: panes };
      }

      function iconMarkup(source, prefix) {
        if (!(source instanceof SVGElement)) return "";
        var clone = source.cloneNode(true);
        var ids = {};
        Array.from(clone.querySelectorAll("[id]")).forEach(function (node, index) {
          var previous = node.getAttribute("id");
          if (!previous) return;
          var next = prefix + "-" + index;
          ids[previous] = next;
          node.setAttribute("id", next);
        });
        Array.from(clone.querySelectorAll("*")).forEach(function (node) {
          Array.from(node.attributes).forEach(function (attribute) {
            var value = attribute.value;
            Object.keys(ids).forEach(function (previous) {
              value = value.replaceAll("#" + previous, "#" + ids[previous]);
            });
            if (value !== attribute.value) node.setAttribute(attribute.name, value);
          });
        });
        return clone.outerHTML;
      }

      function syncHeaderActions(layout) {
        var sidebar = layout && layout.panes.sidebar;
        var conversation = layout && layout.panes.conversation;
        var originalSidebarButton = sidebar && sidebar.querySelector(
          '[data-slot="sidebar"] > * > div:first-child > button:last-child',
        );
        var originalSettingsButton = sidebar && sidebar.querySelector(
          '[data-slot="sidebar.settings"] button[aria-haspopup="dialog"]',
        );
        var header = conversation
          && conversation.querySelector('[data-slot="conversation.session.header"] > header');
        var titleRow = header && header.firstElementChild;
        var conversationRoot = conversation
          && conversation.querySelector(':scope > [data-slot="conversation"] > *');
        var target = titleRow instanceof HTMLElement ? titleRow : conversationRoot;
        var show = phoneQuery.matches
          && layout
          && layout.frame.hasAttribute("data-sidebar-collapsed")
          && target instanceof HTMLElement;
        if (!show) {
          headerActions.remove();
          return;
        }

        if (target === titleRow) headerActions.removeAttribute("data-dsh-mobile-hero-actions");
        else headerActions.setAttribute("data-dsh-mobile-hero-actions", "");
        if (headerActions.parentElement !== target) target.prepend(headerActions);

        var sidebarLabel = originalSidebarButton instanceof HTMLButtonElement
          ? originalSidebarButton.getAttribute("aria-label") || "Open sidebar"
          : "Open sidebar";
        headerSidebarButton.setAttribute("aria-label", sidebarLabel);
        headerSidebarButton.setAttribute("title", sidebarLabel);
        if (originalSidebarButton instanceof HTMLButtonElement) {
          var whale = originalSidebarButton.querySelector('[class*="_railFish"]')
            || originalSidebarButton.querySelector("svg");
          var whaleMarkup = iconMarkup(whale, "dsh-mobile-whale");
          if (whaleMarkup && headerSidebarButton.innerHTML !== whaleMarkup) {
            headerSidebarButton.innerHTML = whaleMarkup;
          }
        }

        var settingsLabel = document.documentElement.lang.toLowerCase().startsWith("zh")
          ? "设置"
          : "Settings";
        headerSettingsButton.setAttribute("aria-label", settingsLabel);
        headerSettingsButton.setAttribute("title", settingsLabel);
        if (originalSettingsButton instanceof HTMLButtonElement) {
          var settingsMarkup = iconMarkup(
            originalSettingsButton.querySelector("svg"),
            "dsh-mobile-settings",
          );
          if (settingsMarkup && headerSettingsButton.innerHTML !== settingsMarkup) {
            headerSettingsButton.innerHTML = settingsMarkup;
          }
        }
      }

      function syncSettingsBackButton() {
        var dialog = document.querySelector(
          '[role="dialog"][aria-modal="true"]:has([data-slot="settings.header"])',
        );
        var header = dialog && dialog.querySelector('[data-slot="settings.header"]');
        var target = header && header.parentElement;
        if (!phoneQuery.matches || !(target instanceof HTMLElement)) {
          settingsBackButton.remove();
          return;
        }

        var label = document.documentElement.lang.toLowerCase().startsWith("zh")
          ? "返回"
          : "Back";
        settingsBackButton.setAttribute("aria-label", label);
        settingsBackButton.setAttribute("title", label);
        if (settingsBackButton.parentElement !== target) target.prepend(settingsBackButton);
      }

      function syncMobileModelLabel() {
        var trigger = document.querySelector(
          '[data-slot="conversation.input.model"] > div > button',
        );
        var label = trigger && trigger.querySelector(":scope > span:first-child");
        if (!(trigger instanceof HTMLButtonElement) || !(label instanceof HTMLElement)) return;

        var fullLabel = trigger.getAttribute("title")?.split(" · ")[0] || label.textContent || "";
        var visibleLabel = phoneQuery.matches
          ? fullLabel.replace(/^DeepSeek-/, "")
          : fullLabel;
        if (label.textContent !== visibleLabel) label.textContent = visibleLabel;
      }

      function openSidebar() {
        var sidebar = document.querySelector('[data-dsh-mobile-pane="sidebar"]');
        var original = sidebar && sidebar.querySelector(
          '[data-slot="sidebar"] > * > div:first-child > button:last-child',
        );
        if (original instanceof HTMLButtonElement) original.click();
      }

      function openSettings() {
        var sidebar = document.querySelector('[data-dsh-mobile-pane="sidebar"]');
        var original = sidebar && sidebar.querySelector(
          '[data-slot="sidebar.settings"] button[aria-haspopup="dialog"]',
        );
        if (original instanceof HTMLButtonElement) original.click();
      }

      function closeSettings() {
        var dialog = document.querySelector(
          '[role="dialog"][aria-modal="true"]:has([data-slot="settings.header"])',
        );
        var slot = dialog && dialog.querySelector('[data-slot="settings.close"]');
        var original = slot && slot.closest("button");
        if (original instanceof HTMLButtonElement) original.click();
      }

      function closeSidebarAfterSessionSelect(event) {
        if (!phoneQuery.matches || !(event.target instanceof Element)) return;
        if (event.target.closest("button, a, [role=button]")) return;
        var row = event.target.closest(
          '[data-dsh-mobile-pane="sidebar"] [role="treeitem"][aria-selected]',
        );
        if (!(row instanceof HTMLElement)) return;

        var frame = document.querySelector("[data-dsh-mobile-frame]");
        if (!(frame instanceof HTMLElement) || frame.hasAttribute("data-sidebar-collapsed")) return;
        var sidebar = frame.querySelector('[data-dsh-mobile-pane="sidebar"]');
        var original = sidebar && sidebar.querySelector(
          '[data-slot="sidebar"] > * > div:first-child > button:last-child',
        );
        if (original instanceof HTMLButtonElement) original.click();
      }

      headerSidebarButton.addEventListener("click", openSidebar);
      headerSettingsButton.addEventListener("click", openSettings);
      settingsBackButton.addEventListener("click", closeSettings);
      document.addEventListener("click", closeSidebarAfterSessionSelect);

      function positionPopup(popup, trigger, kind) {
        var triggerRect = trigger.getBoundingClientRect();
        var viewportTop = window.visualViewport ? window.visualViewport.offsetTop : 0;
        var viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
        var viewportBottom = viewportTop + viewportHeight;
        var bottom = Math.max(12, viewportBottom - triggerRect.top + 8);
        var maxHeight = Math.max(160, triggerRect.top - viewportTop - 24);
        popup.setAttribute("data-dsh-mobile-popup", kind);
        popup.style.setProperty("--dsh-mobile-popup-bottom", bottom + "px");
        popup.style.setProperty("--dsh-mobile-popup-max-height", maxHeight + "px");
      }

      function annotatePopups() {
        if (!phoneQuery.matches) return;

        var modelSlot = document.querySelector('[data-slot="conversation.input.model"]');
        var modelTrigger = modelSlot && modelSlot.querySelector("button");
        var modelPopup = modelSlot && modelSlot.querySelector('[role="menu"]');
        if (modelTrigger instanceof HTMLElement && modelPopup instanceof HTMLElement) {
          positionPopup(modelPopup, modelTrigger, "model");
        }

        var composer = document.querySelector('[data-slot="conversation.composer.bar"]');
        if (!composer) return;
        Array.from(composer.querySelectorAll('button[aria-haspopup="dialog"]')).forEach(function (trigger) {
          var root = trigger.parentElement;
          while (root && root !== composer) {
            var panel = root.querySelector(':scope > [role="dialog"]');
            if (panel instanceof HTMLElement) {
              positionPopup(panel, trigger, "context");
              return;
            }
            root = root.parentElement;
          }
        });
      }

      function refresh() {
        var layout = annotateFrame();
        syncHeaderActions(layout);
        syncSettingsBackButton();
        syncMobileModelLabel();
        annotatePopups();
      }

      refresh();
      var observer = new MutationObserver(refresh);
      observer.observe(document.body, { childList: true, subtree: true });
      phoneQuery.addEventListener("change", refresh);
      window.addEventListener("resize", refresh);
      if (window.visualViewport) {
        window.visualViewport.addEventListener("resize", refresh);
        window.visualViewport.addEventListener("scroll", refresh);
      }

      ctx.effect(function () {
        return function () {
          observer.disconnect();
          phoneQuery.removeEventListener("change", refresh);
          window.removeEventListener("resize", refresh);
          if (window.visualViewport) {
            window.visualViewport.removeEventListener("resize", refresh);
            window.visualViewport.removeEventListener("scroll", refresh);
          }
          document.querySelectorAll("[data-dsh-mobile-frame]").forEach(function (node) {
            node.removeAttribute("data-dsh-mobile-frame");
          });
          document.querySelectorAll("[data-dsh-mobile-pane]").forEach(function (node) {
            node.removeAttribute("data-dsh-mobile-pane");
          });
          document.querySelectorAll("[data-dsh-mobile-popup]").forEach(function (node) {
            node.removeAttribute("data-dsh-mobile-popup");
            node.style.removeProperty("--dsh-mobile-popup-bottom");
            node.style.removeProperty("--dsh-mobile-popup-max-height");
          });
          headerSidebarButton.removeEventListener("click", openSidebar);
          headerSettingsButton.removeEventListener("click", openSettings);
          settingsBackButton.removeEventListener("click", closeSettings);
          document.removeEventListener("click", closeSidebarAfterSessionSelect);
          headerActions.remove();
          settingsBackButton.remove();
          tag.remove();
          if (viewport && originalViewport !== null) viewport.setAttribute("content", originalViewport);
        };
      });
    }

    exports.apply = apply;
    return module.exports;
  },
});
