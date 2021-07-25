# Next Auth

Next Auth starter project

## Development

### Local Setup

1. Clone this repository with `git@github.com:sgtkuncoro/next-auth.git`
1. Navigate into the root directory with `cd ./next-auth`
1. Install dependencies with `npm i`
1. Start the development server with `npm run dev`

### Commits

All commit messages should conform to the [conventional commit format](https://www.conventionalcommits.org) and should use following syntax: `type(scope): subject`. While the type is mandatory, the scope is optional.
Examples:

```
docs: add README.md
```

```
fix(Header): fix padding issue
```

```
feat: create Home view
```

Main types are `fix` and `feat`, however it is possible to also use:

- `chore`
- `docs`
- `style`
- `refactor`
- `perf`
- `test`

### How to Contribute

Checkout new branch from `develop`

Branches must begin with `feature/example-task-title` (for example, `feature/add-nav-header`).

And for bugfix task should be like `bugfix/example-task-title`

For most PRs, remember to always:

Merge to `develop`, never to `main`,
add the label "Ready for review" (use "Work in progress" until you're ready to have it reviewed),
make sure every comment was resolved and every reviewer approved the PR before merging,
merge using "squash and merge".

For deployment PRs, remember to:

merge to `main`
title the PR "Merge to Main"
add the label "Deployment"
merge using normal merge.
