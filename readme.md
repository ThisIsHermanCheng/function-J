# Function J - Free Terminal Assistant Powered by AI

Say goodbye to memorizing complex commands

## Overview

Function J is a free terminal assistant powered by AI. It is designed to help you convert plain text instructions into ready-to-use commands. With Function J, you can quickly transform natural language into executable commands, making your terminal tasks more efficient and accessible.

## Features

- **Natural Language to Command Conversion:** Simply type your desired action in plain English, and Function J will quickly provide you with a list of relevant terminal commands.
- **Command Choices:** When Function J generates commands, it presents you with multiple options to choose from, ensuring that you select the command that best suits your needs.
- **Interactive Selection:** Use the tab key to navigate through the list of generated commands and press enter to execute your chosen command.
- **Intuitive Usage:** Designed for users who dislike memorizing long and complex terminal commands or those who frequently perform repetitive tasks.

## Installation

To install Function J, use npm, the Node.js package manager:

```bash
npm install -g function-j
```

## Getting Started

To start using Function J, open your terminal and simply prefix your instructions with 'fj'.

For example:

```
fj show containers
```

Function J will provide a list of command options. Select the most suitable command using the `tab` key and execute it by pressing `enter`.

```
docker ps   |   docker container ls   |   docker ps -a
```

For some cases, user input is needed within the command options containing curly braces.

```
fj creat file
```

```
touch {file_name}  |  echo > {file_name}  |  cat > {file_name}
-------------------------------------------------------
Please input the following values
file_name:
```

## Demo

![Animation](https://github.com/ThisIsHermanCheng/function-J/assets/45646023/009da273-44d8-4f5c-afcb-d6c26001c885)

[👉 Try it online 👈](https://functionj.com)

## Why Use Function J?

**_Dislike Memorizing Commands_**

Tired of trying to remember lengthy and intricate terminal commands.
Frequently Forget Commands: Find themselves forgetting commands, even if they've used them multiple times.

**_Prefer Easy Access to Commands_**

Don't want to spend time searching online for command syntax.
Question Command Options: Want clarity on command parameters like '-h' and what they stand for (help, host, header, etc.).

**_Keyboard-Friendly Shortcut_**

The choice of 'fj' as the prefix for Function J was intentional. These keys are conveniently located on the keyboard, making it effortless to access this powerful terminal assistant.

![keyboard](https://github.com/ThisIsHermanCheng/function-J/assets/45646023/8483cceb-828b-450f-84fe-e9057027ff2b)

---

Now, say goodbye to the hassle of memorizing complex commands and enjoy a more straightforward way to interact with your terminal using Function J!

Happy terminal navigating with Function J! 🚀
