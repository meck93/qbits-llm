# qBits - Copilot Demo Application

Exercise template for interacting with Github Copilot via Visual Studio Code.

## Copilot Setup

1. Open this project using Visual Studio Code.
2. Ensure that you have a Github account: <https://github.com/signup>
3. Ensure you've signed up for Github Copilot "Copilot Individual" (30 days trial is fine). If not, please do so here: <https://github.com/github-copilot/signup> - More general link: <https://copilot.github.com>
4. Install the recommended extensions. If VSCode does not prompt you to install them, you can install them manually. See the `.vscode/extensions.json` file for the list of recommended extensions.
5. Ensure you've installed the Copilot VSCode extension: <https://marketplace.visualstudio.com/items?itemName=GitHub.copilot> and that you've logged in with your Github account.
6. Test that Copilot is working by:
   1. opening a new file and typing `//` and then pressing `Enter`. Copilot should suggest a comment.
   2. Use the command for "Run" (Shortcut: `CMD + SHIFT + P`, IntelliJ users see the next section) and type "Copilot" and select "Copilot: Generate this". Type something, Copilot should generate code for you.

### IntelliJ Keybindings

If you're a IntelliJ user, you can install the VSCode extension "IntelliJ IDEA Keybindings" to use the same keybindings as in IntelliJ. See this link: <https://marketplace.visualstudio.com/items?itemName=k--kato.intellij-idea-keybindings>

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
