# lizard-utils

Utility functions for formatting documents, phone numbers, postal codes (CEP) and currency.

Written in TypeScript with no dependencies. Works in any JavaScript/TypeScript project (React, NestJS, Node, etc.), with support for both `import` (ESM) and `require` (CommonJS).

## Installation

```bash
npm install github:AdrDavid/lizard-utils#v0.1.0
```

Replace `v0.1.0` with the version you want. Without a tag, whatever is on the `main` branch at install time is installed.

## Usage

```ts
import { formatCPF, formatCurrency, onlyNumbers } from "lizard-utils";

formatCPF("12345678901");       // "123.456.789-01"
formatCurrency(1500.5);         // "R$ 1.500,50"
onlyNumbers("123.456.789-01");  // "12345678901"
```

## Functions

### Formatting

The formatters accept values with or without punctuation, as well as incomplete values, so they can be used as input masks (formatting while the user types).

| Function | Input | Output |
|---|---|---|
| `formatCPF` | `"12345678901"` | `"123.456.789-01"` |
| `formatCNPJ` | `"12345678000190"` | `"12.345.678/0001-90"` |
| `formatPhone` | `"66992129562"` | `"(66) 99212-9562"` |
| `formatPhone` | `"6635312345"` | `"(66) 3531-2345"` |
| `formatCEP` | `"78550000"` | `"78550-000"` |
| `formatCurrency` | `1500.5` | `"R$ 1.500,50"` |

While typing:

```ts
formatCPF("1234");      // "123.4"
formatCPF("1234567");   // "123.456.7"
formatPhone("669");     // "(66) 9"
```

Digits beyond the maximum length are ignored:

```ts
formatCPF("1234567890123"); // "123.456.789-01"
```

### Sending to an API

To remove formatting from CPF, CNPJ, phone numbers and CEP, use `onlyNumbers`:

```ts
onlyNumbers("123.456.789-01");     // "12345678901"
onlyNumbers("12.345.678/0001-90"); // "12345678000190"
onlyNumbers("(66) 99212-9562");    // "66992129562"
```

For currency, use `parseCurrency`, which converts the text into a `number`:

```ts
parseCurrency("R$ 1.500,50"); // 1500.5
parseCurrency("-R$ 10,00");   // -10
parseCurrency("");            // 0
```

> `parseCurrency` expects the Brazilian format (dot as thousands separator, comma as decimal separator). Don't use it with values in US format (`"1500.50"`).

## Development

```bash
npm install     # install dependencies
npm test        # run tests in watch mode
npm run build   # generate the dist folder
```

### Adding a function

1. Create the folder `src/functionName/` with an `index.ts` exporting the function.
2. Create the test at `src/functionName/functionName.test.ts`.
3. Export the function in `src/index.ts`:
   ```ts
   export * from "./functionName";
   ```
   Without this line, the function works in the tests but isn't available to projects that install the library.

### Releasing a new version

1. Update the version in `package.json` (e.g. `0.1.0` → `0.2.0`).
2. Commit and create the tag:
   ```bash
   git tag v0.2.0
   git push --tags
   ```
3. In your projects, update the tag in the install command.