![CI](https://github.com/mxn2020/minions-availability-workspace/actions/workflows/ci.yml/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# minions-availability

**Availability snapshots, slot states, and change detection for tent reservations**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-availability/sdk minions-sdk

# Python
pip install minions-availability

# CLI (global)
npm install -g @minions-availability/cli
```

---

## CLI

```bash
# Show help
availability --help
```

---

## Python SDK

```python
from minions_availability import create_client

client = create_client()
```

---

## Project Structure

```
minions-availability/
  packages/
    core/           # TypeScript core library (@minions-availability/sdk on npm)
    python/         # Python SDK (minions-availability on PyPI)
    cli/            # CLI tool (@minions-availability/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [availability.minions.help](https://availability.minions.help)
- Blog: [availability.minions.blog](https://availability.minions.blog)
- App: [availability.minions.wtf](https://availability.minions.wtf)

---

## License

[MIT](LICENSE)
