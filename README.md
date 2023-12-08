# qBits - Copilot Demo Application

Exercise template for interacting with Github Copilot via Visual Studio Code.

## ChatGPT Setup

1. Open the following URL and signup for ChatGPT: <https://chat.openai.com/auth/login>
2. Use the Quatico Google account to sign up if you don't have an account yet.
3. Start a new chat and say "Hi" to the bot.

## Copilot Setup

1. Open this project using Visual Studio Code.
2. Ensure that you have a Github account: <https://github.com/signup>
3. Ensure you've signed up for Github Copilot "Copilot Individual" (30 days trial is fine). If not, please do so here: <https://github.com/github-copilot/signup> - More general link: <https://copilot.github.com>
   1. Unfortunately, a valid credit card is required to sign up to Github Copilot even if the trial is free. If this is a problem or should you not have a credit card, please contact me.
   2. You can cancel the subscription immediately after the qBits and you will not be charged.
4. Install the recommended extensions. If VSCode does not prompt you to install them, you can install them manually. See the `.vscode/extensions.json` file for the list of recommended extensions.
5. Ensure you've installed the Copilot VSCode extension: <https://marketplace.visualstudio.com/items?itemName=GitHub.copilot> and that you've logged in with your Github account. Double check the tiny Github icon at the bottom right of VSCode.
6. Test that Copilot is working by:
   1. opening a new file and typing `//` and then pressing `Enter`. Copilot should suggest a comment.
   2. Use the command for "Run" (Shortcut: `CMD + SHIFT + P`, IntelliJ users see the next section) and type "Copilot" and select "Copilot: Generate this". Type something, Copilot should generate code for you.

### IntelliJ Keybindings

If you're a IntelliJ user, you can install the VSCode extension "IntelliJ IDEA Keybindings" to use the same keybindings as in IntelliJ. See this link: <https://marketplace.visualstudio.com/items?itemName=k--kato.intellij-idea-keybindings>

### Copilot Commands

- `Copilot: Generate this` - Generate code in the current file.
- `Copilot: Fix this` - Suggests a code fix for the current file.
- `Copilot: Generate tests` - Generates tests for the current file and places the code in a separate file.
- `Copilot: Generate docs` - Generates documentation for the current class or function.
- `Copilot: Explain this` - Explains the code at the current cursor position. Uses the context of the whole file and interacts with Copilot chat.

## Java

### Prerequisites

- Java 17

The required Gradle version is downloaded automatically.

```bash
./gradlew
```

### Tests

```bash
./gradlew test
```

### Tests in Watch Mode

```bash
./gradlew test -t
```

## TypeScript

### Prerequisites

- Node.js 18
- Yarn 1.22.19

```bash
yarn
```

### Lint

```bash
yarn lint
```

### Tests

```bash
yarn test
```

### Tests in Watch Mode

```bash
yarn test:watch
```

### Check Types

```bash
yarn check:types
```
