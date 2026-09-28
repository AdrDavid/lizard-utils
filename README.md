# adr-utils

Funções utilitárias de formatação: documentos, telefone, CEP e moeda.

Escrita em TypeScript, sem dependências. Funciona em qualquer projeto JavaScript/TypeScript (React, NestJS, Node, etc.), com suporte a `import` (ESM) e `require` (CommonJS).

## Instalação

```bash
npm install github:SEU-USUARIO/adr-utils#v0.1.0
```

Troque `v0.1.0` pela versão desejada. Sem a tag, é instalado o que estiver na branch `main`.

## Uso

```ts
import { formatCPF, formatCurrency, onlyNumbers } from "adr-utils";

formatCPF("12345678901");       // "123.456.789-01"
formatCurrency(1500.5);         // "R$ 1.500,50"
onlyNumbers("123.456.789-01");  // "12345678901"
```

## Funções

### Formatação

Os formatadores aceitam valores com ou sem pontuação e também valores incompletos, então podem ser usados como máscara em inputs (formatam enquanto o usuário digita).

| Função | Entrada | Saída |
|---|---|---|
| `formatCPF` | `"12345678901"` | `"123.456.789-01"` |
| `formatCNPJ` | `"12345678000190"` | `"12.345.678/0001-90"` |
| `formatPhone` | `"66992129562"` | `"(66) 99212-9562"` |
| `formatPhone` | `"6635312345"` | `"(66) 3531-2345"` |
| `formatCEP` | `"78550000"` | `"78550-000"` |
| `formatCurrency` | `1500.5` | `"R$ 1.500,50"` |

Durante a digitação:

```ts
formatCPF("1234");      // "123.4"
formatCPF("1234567");   // "123.456.7"
formatPhone("669");     // "(66) 9"
```

Dígitos além do tamanho máximo são ignorados:

```ts
formatCPF("1234567890123"); // "123.456.789-01"
```

### Envio para API

Para remover a formatação de CPF, CNPJ, telefone e CEP, use `onlyNumbers`:

```ts
onlyNumbers("123.456.789-01");     // "12345678901"
onlyNumbers("12.345.678/0001-90"); // "12345678000190"
onlyNumbers("(66) 99212-9562");    // "66992129562"
```

Para moeda, use `parseCurrency`, que converte o texto em `number`:

```ts
parseCurrency("R$ 1.500,50"); // 1500.5
parseCurrency("-R$ 10,00");   // -10
parseCurrency("");            // 0
```

> `parseCurrency` espera o formato brasileiro (ponto como milhar, vírgula como decimal). Não use com valores no formato americano (`"1500.50"`).

## Desenvolvimento

```bash
npm install     # instala as dependências
npm test        # roda os testes em modo watch
npm run build   # gera a pasta dist
```

### Adicionando uma função

1. Crie a pasta `src/nomeDaFuncao/` com um `index.ts` exportando a função.
2. Crie o teste em `src/nomeDaFuncao/nomeDaFuncao.test.ts`.
3. Exporte a função em `src/index.ts`:
   ```ts
   export * from "./nomeDaFuncao";
   ```
   Sem essa linha, a função funciona nos testes mas não fica disponível para quem instala a lib.

### Publicando uma nova versão

1. Atualize a versão no `package.json` (ex: `0.1.0` → `0.2.0`).
2. Faça o commit e crie a tag:
   ```bash
   git tag v0.2.0
   git push --tags
   ```
3. Nos projetos, atualize a tag no comando de instalação.