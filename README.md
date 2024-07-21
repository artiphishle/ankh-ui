# Ankhorage UI

## Quickstart

```bash
# Install package
pnpm install ankh-ui

# Start storybook
pnpm run storybook
```

## Auth Roles

This chapter may change very soon, it's a first approach to separate user (read-only) and CMS admin.

In `lib/auth/Auth.tsx` replace the `tmpRoleDefinition` by serverside evaluated roles.

Attention: For demo purposes everything is granted now.

### Auth.ReadRole

Default role in normal webapps usually everyone gets, to display the UI's (components) in a read-only mode.

### Auth.WriteRole

Authenticated CMS editor should have the write role to be able to alter the UI's.

### Auth.DeleteRole

Not used atm. It will grant permission to delete a created UI component.

## Components

Available components:

### Accordion

Native HTML5 accordion using `<details>` and `<summary>`

### Button

Native `<button>` element

### Dialog

Native `<dialog>` element

### Grid

Customizable CSS Grid layout

### Nav

Native `<nav>` element used for routing

### Pagination

Customizable pagination component

### PanelGroup

Description to follow
