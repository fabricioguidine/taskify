# Taskify

## Description

Taskify is a simple task management React application built with TypeScript. It allows users to add, remove, and manage tasks dynamically. The project includes unit tests written with Jest and React Testing Library to ensure reliability.

---

## Technologies Used

* React 18+
* TypeScript
* Jest & React Testing Library for unit tests
* Vite as the build tool

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/taskify.git
cd taskify
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Run tests:

```bash
npm run test
```

---

## Features

* Add new tasks with validation to prevent empty input
* Remove existing tasks
* Supports duplicate tasks
* Clears input field after adding a task
* Comprehensive unit tests covering main user interactions

---

## Testing

Tests are written with Jest and React Testing Library, covering the following scenarios:

* Adding tasks
* Removing tasks
* Preventing empty or whitespace-only tasks
* Allowing duplicate tasks
* Clearing input after task addition
* Handling multiple tasks sequentially
* Edge cases for empty input and duplicate entries

---

## How it works

* Tasks are stored in React state (`useState` hook)
* Adding a task appends it to the list if the input is valid
* Removing a task filters it out from the list
* The UI reflects the current tasks with Remove buttons next to each