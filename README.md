# Caro

> Caro redefines asset management by enabling secure, customizable AI bots to manage user assets without depositing funds into smart contracts

### 🏁 Chainlink Hackathon Spring 2023 Project

This repository was created for the [Chainlink Hackathon Spring 2023](https://blog.chain.link/spring-2023-hackathon-winners/). It serves as a dummy frontend for our concept. Please note that the current state of the project is a prototype and not a finished product.

## 📝 Description
Caro is an innovative platform that employs AI models and bots for managing user assets. Instead of needing to deposit funds into smart contracts, users can choose from a variety of AI bots to align with their unique investment strategy. This project provides an efficient solution for common security concerns associated with traditional asset management while allowing for a highly personalized user experience.

## 🛠️ Tech Stack

Bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)


## 🚀 Main Features

#### 🤖 AI bots as asset managers
Users can choose from an array of AI bots, selecting one that fits their needs and investment strategy.

#### 👥 Contribution by third parties
Individuals or companies can contribute bots by building API endpoints to provide asset lists and allocations.

#### 🔗 Integration with Chainlink
Chainlink Upkeeps will regularly monitor the bot endpoints using Chainlink Functions to fetch the latest data and store it on the blockchain.

#### 📬 Update notifications
Users will receive updates on their chosen bots' activities or can view them directly on the platform.

#### ✔️ User decision power
Each asset management change proposed by the bot will be presented as a proposal, giving users the power to accept or reject it.

#### 🔀 Multicall transactions
If a proposal is accepted, a multicall will be triggered to execute the necessary swaps within the user's wallet.

#### ⚙️ Bot personalization
Users can personalize their AI bots by setting parameters or preferences such as risk tolerance or investment goals.

#### 📊 Performance metrics and ranking
The platform will provide performance metrics and rankings to help users make informed decisions.


## 💻 Getting Started

```bash
# Clone the repository
git clone https://github.com/iljacorp/caro-frontend.git

# Navigate to the repository
cd caro-frontend

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔮 Future Work
The goal is to establish a standard for third parties to make their bots parameterizable, thereby providing users with a wider range of options and more control over their investment strategies. This feature, along with the ongoing enhancement of the platform's performance metrics and ranking system, will continue to be developed in future iterations of the project.

## 📜 License
This project is licensed under the MIT License - see the LICENSE.md file for details.
