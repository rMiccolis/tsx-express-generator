# TSX-EXPRESS-GENERATOR

This is a simple project starter: it provides the setup of a simple nodejs/express typescript API server with ESlint and Prettier configuration along with vscode settings.

## Dependencies

Dev dependencies:

- **typescript**:
- **@types/node**:
- **@types/express**:
- **tsx**:
- **nodemon**:
- **typescript-eslint/eslint-plugin**: Adds TypeScript-specific linting rules
- **typescript-eslint/parser**: Allows ESLint to understand TypeScript syntax
- **eslint**: Analyzes code to identify problems and ensure adherence to standards defined in .eslintrc.json
- **eslint-config-prettier**: Disables ESLint rules that conflict with Prettier
- **eslint-plugin-prettier**: Runs Prettier as an ESLint rule — lets ESLint report formatting issues
- **prettier**: It takes care of formatting the code according to the rules defined in .prettierrc

Server Dependencies:

- express
- dotenv

## TypeScript Configuration

File content `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## Project Structure

```uml
root/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── app.ts
├── .env
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## 9. Server execution

To start the application in development mode:

```bash
npm run dev
```

To build the application for production:

```bash
npm run build
```

And then start it up:

```bash
npm start
```
