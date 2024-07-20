# Ankhorage UI

## Quickstart

```bash
pnpm install ankh-ui
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

Description to follow

### Accordion

Description to follow

### Article

Description to follow

### Button

Description to follow

### Dialog

Description to follow

### Grid

Description to follow

### Nav

Description to follow

### Pagination

Description to follow

### PanelGroup

Description to follow
