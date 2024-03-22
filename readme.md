# TypeScript Node.js API for Cards Game

This project is a TypeScript-based Node.js API for a card game by Xolani Maphumulo.

## Features

- Create a new Game
- Create a Player
- Player submits a move
- Get leaderboard
- And more!

## Prerequisites

Before running the API, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version >= 14)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager
- [Typescript](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/xolanimaphumulo/xolani-wyzetalk-assessment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd xolani-wyzetalk-assessment
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Add Docker and Ensure MongoDB is running

## Configuration

There are configurations

## Usage

To start the API, run the following command:

```bash
docker-compose up
```

The API will start on the specified port (default is `3000`).

You can now access the API using tools like [Postman](https://www.postman.com/) or by making HTTP requests from your frontend application.

## API Endpoints

### URL Documentation - https://documenter.getpostman.com/view/10302607/2sA35A8RHD

- `POST /api/createGame`: Creates and returns a New game
- `POST /api/createPlayer`: Creates and returns a new single player
- `POST /api/submitMove`: Allows a player to make a move by submitting two cards.
- `GET /api/leaderboard`: Gets a leadboard across all games

For detailed information about each endpoint and their usage, refer to the API documentation.
