# Hub Platforms

A comprehensive registry of platforms in the Solana DeFi ecosystem. This package provides structured platform data including metadata, links, and token information.

## Installation

```bash
npm install @jup-ag/platform-list
# or
yarn add @jup-ag/platform-list
```

## Usage

Get platforms locally

```typescript
import { platforms } from "@jup-ag/platform-list";

console.log(platforms);
```

Get platforms dynamically

```typescript
import { fetchPlatforms } from "@jup-ag/platform-list";

fetchPlatforms()
  .then((fetchedPlatforms) => {
    console.log(fetchedPlatforms);
  })
  .catch((error) => {
    console.error("Error fetching platforms:", error);
  });
```

## Publishing

To publish a new version:

```bash
npm run commit:index
npm version patch
git push origin main --tags

# or
npm version patch && git push origin main --tags
```
