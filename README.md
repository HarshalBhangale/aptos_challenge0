# Aptos Challenge

## Overview

This repository contains the code for the Aptos Challenge, a decentralized application (DApp) where users can interact with a smart contract by clicking a button. The user's actions are recorded on the blockchain, and a leaderboard showcases the top 10 users with the most clicks.

## Demo

[Watch the demo video](https://www.youtube.com/watch?v=zepmZ0Qeet4)

## Live App

[Explore the live app](https://aptos-challenge.web.app/)

## Figma Designs

[View Figma designs](https://www.figma.com/file/yDK7Lv7iyp9btEOSOHYLxP/Untitled?type=design&node-id=0%3A1&mode=design&t=Cx0C8jsLRMPhlJ1F-1)

## Table of Contents

- [Getting Started](#getting-started)
  - [Environment Setup](#environment-setup)
  - [Smart Contract](#smart-contract)
  - [Frontend](#frontend)
  - [Local Development](#local-development)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Environment Setup

1. Install the Aptos CLI by following the [installation instructions](https://aptos.dev/tools/aptos-cli/install-cli/).

### Smart Contract

1. Follow the [Smart Contract tutorial](https://aptos.dev/tutorials/build-e2e-dapp/create-a-smart-contract) to set up your smart contract.

### Frontend

1. Set up the React app by following the [React Tutorial](https://aptos.dev/tutorials/build-e2e-dapp/set-up-react-app).
2. Utilize the [Typescript SDK](https://aptos.dev/sdks/ts-sdk/index) for integration.

### Local Development

1. Clone this repository:

```bash
git clone https://github.com/HarshalBhangale/aptos_challenge0.git
cd aptos_challenge0
```
#Features
### 1 .Users can connect their wallets.
### 2. The page displays the total number of clicks from all users, fetched from the on-chain contract.
### 3. Users can click a button, prompting them to sign and submit a transaction that increments the on-chain counter.
### 4. A leaderboard showcases the top 10 users with the most clicks.
