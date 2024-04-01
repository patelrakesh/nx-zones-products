# NextGen Digital

## REQUIREMENTS

- nodeJS@18.16.9
- Nx@18.0.5

## INSTALLATION

Install Nx CLI

`npm install -g nx`

Install the project dependencies

`npm install`

### Enabling Git Hooks (via Husky)

This needs to be done once, after cloning the repo and running the main install.
Run `npm run prepare`.

## COMMANDS

Nx is a mono-repo which allows you to run multiple projects from the same repository. When you use a generator to create an application or a library it automatically creates some commands that you can call on it.

### Start a Development Server

`npm run dev:products`

Navigate to http://localhost:3001/. The app will automatically reload if you change any of the source files.

### Build a Production Build

`npm run build:examples`

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Generate a library

Again use the extension, it's much easier, but you can also run `nx g @nx/react:lib my-lib` to generate a library. Libraries are nested into sub directories so be sure and generate them in the right sub folder.

Libraries are shareable across libraries and applications. They can be imported from `@nextgen-digital/mylib`.

## TESTS

### Running unit tests

Run `nx test shared-ui`, or `nx run shared-ui:test` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

Run `npm run test-all` to exectue all unit tests in the repo. This takes advantage of Nx caching for faster tests.

Run `npm run test-affected` to exectue all unit tests in the repo in CI pipeline.

### Code coverage

Run `nx run examples:test --codeCoverage=true` to generate code coverage for a project.

Run `npm run test:coverage` to generate code coverage for the entire repo.

Run `npx nx run examples:e2e` to run BDD test cases for a project.
