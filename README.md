# Figure8app eslint config

Common JavaScript linting configuration for Figure8.

## Usage

Install by running:

```bash
npm install --save-dev @figure8app/eslint-config
yarn add --dev eslint @figure8app/eslint-config
```

Then create a `.eslintrc.yml` file with:

```yaml
extends: '@figure8app/eslint-config'
```

## Development

### Test configuration

You can play with `index.js` and run:

```bash
npm install
./node_modules/.bin/eslint index.js
```

Or let your IDE test it.

## Deployment

This project is a public npm package.

To be able to deploy the package you need to have a npm account and to be a member of @figure8app org.

to deploy the package you need first to increse the version number in the `package.json` file.

After that, go to the project root in the command line and write:
```
npm login
```
write your details and after login write:
```
npm publish --access public
```

Thats it. you have a new version of this package now :)
