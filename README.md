# Figure8app eslint config

Common JavaScript linting configuration for Figure8.

## Usage

Install by running:

```bash
npm install --save-dev @figure8app/eslint-config@github:figure8app/eslint-config
yarn add -dev eslint @figure8app/eslint-config@github:figure8app/eslint-config
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
