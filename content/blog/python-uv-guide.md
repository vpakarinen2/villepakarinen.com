---
title: "Modern Python Workflow with UV"
date: "2026-02-12"
description: "Why Astral's 'uv' is the only Python tool you need in 2026."
tags: ["Python", "DevOps", "Tooling"]
author: "Ville Pakarinen"
---

Python packaging has historically been a fragmented mess. Between `pip`, `venv`, `pyenv`, `pip-tools`, and `poetry`, developers often spend more time managing environments than writing code.

Enter **uv**: an extremely fast Python package and project manager written in Rust.

---

### What is uv?
Developed by Astral (the creators of Ruff), **uv** is a single executable designed to replace your entire Python toolchain. It acts as a:
* **Package Manager** (replacing `pip`)
* **Environment Manager** (replacing `venv`)
* **Python Version Manager** (replacing `pyenv`)
* **Tool Runner** (replacing `pipx`)

### Why use it?

1. **Unmatched Speed** It is 10–100x faster than `pip`. On a cold cache, it installs packages in milliseconds. On a warm cache, it is virtually instantaneous because it leverages a global module cache and hardlinks.

2. **Zero Dependencies** Since it is written in Rust, `uv` is a standalone binary. You don’t even need Python installed to install `uv`, it can install Python for you.

3. **Universal Lockfiles** It generates a `uv.lock` file that ensures your environment is identical across your local machine, CI/CD, and production servers (AWS).

4. **Modern Defaults** It supports `pyproject.toml` natively and handles dependency resolution without "backtracking" hangs common in older tools.

---

### How it works

#### 1. Project Initialization
Start a new project with a standard structure:
```bash
uv init my-project
cd my-project
```

#### 2. Managing Dependencies
Adding a package creates a virtual environment (.venv) and updates lockfile:
```bash
uv add fastapi pydantic
```

#### 3. Running Scripts
You can run a script in a temporary environment without "activating" anything:
```bash
uv run main.py
```

#### 4. Managing Python Versions
Need a specific version for a training job?
```bash
uv python install 3.12
uv python pin 3.12
```

---

### The Verdict
uv replaces the frustration of broken environments with a single, fast tool that just works, it takes the guesswork out of Python project management letting you focus on building your features instead of fixing your dependencies.