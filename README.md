# Ankhorage UI

## Quickstart

Setup Ankhorage CMS and provide a `./config.ts`. If this file is not found a default configuration will be used, which is recommended if you're new.

`ankh-ui` will be copied to `./next/src/app/_uis/` during the initialization phase.

```bash
pnpm dlx ankh-cms@latest
```

You can also just install the UI framework and e.g. start storybook:

```bash
pnpm add ankh-ui
pnpm run storybook
```

## Auth Roles

This chapter may change very soon, it's a first approach to separate user (read-only) and CMS admin.

In `lib/auth/Auth.tsx` replace the `tmpRoleDefinition` by serverside evaluated roles.

⚠️ For demo purposes everyone is granted CMS admin atm.

- Auth.ReadRole: Default role to get view privilegues.
- Auth.WriteRole: Admin role to modify the webapp (CMS)

## AnkhUI's (Components)

| Name | Description |
|------|-------------|
| AnkhUiAccordion | Native HTML5 accordion using `<details>` and `<summary>` |
| AnkhUiButton | Native `<button>` element |
| AnkhUiCard | Card component
| AnkhUiCharts | Pie chart available atm |
| AnkhUiColorHues | Color Hue generator (e.g. primary-100 to primary-900 using different tones) |
| AnkhUiColorPicker | Simple Color 'Chooser' (not pickable yet) |
| AnkhUiDialog | Native `<dialog>` element (under construction) |
| AnkhUiForm | Form generator & Input components (under construction) |
| AnkhUiGallery | Using `react-grid-gallery` |
| AnkhUiGrid | Customizable CSS Grid layout |
| AnkhUiHeading | Headings | `h1`, `h2`, etc. |
| AnkhUiHtml | Any kind of HTML element, `tagName` available as prop |
| AnkhUiIcon | Uses `lucide-react` library |
| AnkhUiImage | NextImage component used bts |
| AnkhUiList | List things (under construction) |
| AnkhUiNav | Native `<nav>` element used for routing |
| AnkhUiPagination | Customizable pagination component |
| AnkhUiPanelGroup<br>AnkhUiPanel<br>AnkhUiPanelHandle | Resizable spaces |
| AnkhUiCircle<br>AnkhUiCircles | Circle(s), e.g. show a color palette |
| AnkhUiTag | `#this 🄧` or `#other 🄧` |

## Libraries

There are multiple packages I've built, which are MIT and usable standalone, they will be listed here, let's start with:

- [ankh-hooks](https://github.com/artiphishle/ankh-hooks)