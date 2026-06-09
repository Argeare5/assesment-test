# DeFi Real Estate - Take-Home Assessment (Finished)

This repository contains the completed take-home assessment for the Frontend / Web3 Architect position. The codebase has been completely refactored from a legacy, monolith-style architecture into a high-performance, modern Purist Web3 dApp.

---

## Part 1: Original Requirements & Setup

### Original Tasks

1. **Complete Wallet Connection:** Implement non-custodial wallet authentication using MetaMask, handle account/chain changes dynamically, and implement explicit Web3 error handling.
2. **Fix Homepage Responsiveness:** Review layout tokens and ensure flawless responsive behavior across mobile, tablet, and desktop viewports.

### Legacy Setup Instructions (Deprecated)

```bash
# Old legacy workflow
nvm install 20
nvm use 20

npm install
npm start

```

The application was originally tied to a bloated Express backend and slow Webpack bundling (`react-scripts`).

---

## Part 2: Modern Setup & Production Build (Recommended)

The project environment has been migrated to a native **Vite + Tailwind CSS v4** architecture running on Node LTS (v20 - v24). Use `pnpm` for efficient, deterministic dependency tree resolution.

### 1. Install Dependencies

```bash
pnpm install

```

### 2. Local Development Server

Boots the reactive development server with instant Hot Module Replacement (HMR).

```bash
pnpm dev

```

The local application instance will default to `http://localhost:5173`.

### 3. Production Compilation

Builds an optimized, production-ready static bundle inside the `/dist` folder with full tree-shaking applied.

```bash
pnpm build

```

### 4. Local Production Preview

Boots up a local server to inspect and test the compiled production build before final deployment.

```bash
pnpm preview

```

---

## Part 3: Technical Implementation & Architecture Review

The codebase was heavily optimized to align with strict production standards, eliminating legacy dependencies, architectural bottlenecks, and dead backend code.

### 1. Architectural Cleanup & Monolith Decoupling

* **Server Elimination:** Completely removed the redundant Express.js backend, Mongoose models, and dead authentication configurations. Web3 dApps must prioritize local-first logic and true self-custody; data persistence and transaction monitoring are now fully handled client-side.
* **Dependency Pruning:** Removed a massive footprint of bloated packages including `ethers.js` v5, legacy `@walletconnect/web3-provider` v1 (deprecated protocol), Node.js browser polyfills (`crypto-browserify`, `stream-browserify`, `assert`), and outdated bootstrap wrappers.

### 2. Build System Modernization

* **CRA to Vite Migration:** Discarded the abandoned `react-scripts` (Create React App) along with its configuration overrides (`react-app-rewired`).
* **React 19 Core Upgrades:** Upgraded the application runtime to React 19 to exploit the latest architectural benefits, concurrent features, and performance profiles.
* **Tailwind CSS v4 Integration:** Configured the presentation layer to use the new native compilation toolchain (`@tailwindcss/vite`), defining styling tokens via modern CSS native variables while perfectly preserving the client's original design identity.

### 3. Web3 Stack Architecture via TUWA Infrastructure

The Web3 layer was rewritten from scratch using a purist headless-first approach, strictly separating core state orchestration from the UI layout.

* **Connectivity Layer (`@tuwaio/satellite-*`):** Replaced legacy connectivity code with modular providers. Implemented native wallet connectivity using `viem` and `wagmi` v3 cores, enforcing a clean zero-lock-in standard. Account migrations (`accountsChanged`) and network mutations (`chainChanged`) are monitored and processed natively.
* **State & Tracking Engine (`@tuwaio/pulsar-*`):** Eradicated localized `useState` hooks for transaction loading and success flags. All write operations are routed natively through `usePulsarStore` utilizing the global `executeTxAction` pipeline with immutable updates via `immer`.
* **EVM Integration & Demo Increment Transaction:** Integrated a Sepolia testnet demonstration using modular wrappers (`@tuwaio/orbit-evm`) to verify end-to-end functionality. The UI now securely dispatches state-changing smart contract calls, and full lifecycle tracking (Pending $\rightarrow$ Confirmed/Failed) is performed locally inside the client's store.

### 4. Layout & Responsiveness Fixes

* **Container Optimization:** Re-engineered the core layout constraints to comply with fluid, responsive break-points. All fixed-width containers were migrated to semantic flexible grid layouts to ensure clean asset flow across mobile, tablet, and ultra-wide viewports.
* **Canvas Calibration:** Ensured 3D canvas contexts (`@react-three/fiber` and `three`) adapt fluidly without distorting aspect ratios or breaking canvas bounds on mobile devices.

---

## Summary of Decisions & Assumptions

* **Assumption:** The Express server and fiat payment configurations (`paytmchecksum`) included in the original project files were dead remnants of a monolith layout. Removing them entirely was necessary to demonstrate optimal dApp architecture and minimal bundle sizing.
* **Decision:** Used `viem` and `wagmi` exclusively. Legacy classes from `ethers` or `web3.js` are strictly prohibited due to performance degradation and bloated build footprints. Atomic state flows are anchored inside client storage to safeguard decentralization and local independence.