# Figure8 eslint config

Common JavaScript linting configuration for Figure8.

## Usage

Install by running:

```bash
yarn add -D eslint @figure8/eslint-config@github:figure8app/eslint-config
```

Then create a `.eslintrc.yml` file with:

```yaml
extends: '@figure8/eslint-config'
```

## Development

### Test configuration

You can play with `index.js` and run:

```bash
npm install
./node_modules/.bin/eslint index.js
```

Or let your IDE test it.
