# Kanban board

This project consists of two main parts: the client and the server. The client is built with React and Material-UI, while the server is built with Node.js and Express.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

    ```sh
        https://github.com/NDTHANHPHUC/interview.git
        
    ```

2. Install dependencies for the client:

    ```sh
    cd karban-mui
    npm install
    ```

3. Start the client:

    ```sh
    npm start
    ```

    The client will be running at [http://localhost:3000/](http://localhost:3000/).

4. Install dependencies for the server:

    ```sh
    cd ../karban-backend
    npm install
    ```

5. Start the server:

    ```sh
    npm run dev
    ```

## Tech Stack

### Client

- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

### Server

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.

## Project Structure

### Client

- [karban-mui](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cricky%5C%5COneDrive%5C%5CM%C3%A1y%20t%C3%ADnh%5C%5Cinterview%5C%5CinterviewReact%5C%5Ckarban-mui%5C%5C%22%2C%22_sep%22%3A1%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fricky%2FOneDrive%2FM%C3%A1y%20t%C3%ADnh%2Finterview%2FinterviewReact%2Fkarban-mui%2F%22%2C%22scheme%22%3A%22file%22%7D%7D)
  - `src/`
    - `components/`: Contains React components like [`Board`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fricky%2FOneDrive%2FM%C3%A1y%20t%C3%ADnh%2Finterview%2FinterviewReact%2Fkarban-mui%2Fsrc%2Fcomponents%2FBoard.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22Board%22%2C%22414e2047-6b08-4c05-9488-b33632b5c27a%22%5D "c:\Users\ricky\OneDrive\Máy tính\interview\interviewReact\karban-mui\src\components\Board.tsx"), [`Column`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fricky%2FOneDrive%2FM%C3%A1y%20t%C3%ADnh%2Finterview%2FinterviewReact%2Fkarban-mui%2Fsrc%2Fcomponents%2FColumn.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22Column%22%2C%22414e2047-6b08-4c05-9488-b33632b5c27a%22%5D "c:\Users\ricky\OneDrive\Máy tính\interview\interviewReact\karban-mui\src\components\Column.tsx"), and [`Ticket`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fricky%2FOneDrive%2FM%C3%A1y%20t%C3%ADnh%2Finterview%2FinterviewReact%2Fkarban-mui%2Fsrc%2Fcomponents%2FTicket.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22Ticket%22%2C%22414e2047-6b08-4c05-9488-b33632b5c27a%22%5D "c:\Users\ricky\OneDrive\Máy tính\interview\interviewReact\karban-mui\src\components\Ticket.tsx").
    - `lib/`: Contains utility libraries and authentication logic.
    - `config.ts`: Configuration settings.
    - `index.tsx`: Entry point for the React application.
    - `App.tsx`: Main application component.

### Server

- [karban-backend](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cricky%5C%5COneDrive%5C%5CM%C3%A1y%20t%C3%ADnh%5C%5Cinterview%5C%5CinterviewReact%5C%5Ckarban-backend%5C%5C%22%2C%22_sep%22%3A1%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fricky%2FOneDrive%2FM%C3%A1y%20t%C3%ADnh%2Finterview%2FinterviewReact%2Fkarban-backend%2F%22%2C%22scheme%22%3A%22file%22%7D%7D)
  - `src/`
    - [`database.ts`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fricky%2FOneDrive%2FM%C3%A1y%20t%C3%ADnh%2Finterview%2FinterviewReact%2Fkarban-backend%2Fsrc%2Fdatabase.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22database.ts%22%2C%22414e2047-6b08-4c05-9488-b33632b5c27a%22%5D "c:\Users\ricky\OneDrive\Máy tính\interview\interviewReact\karban-backend\src\database.ts"): Database connection and configuration.
    - [`index.ts`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fricky%2FOneDrive%2FM%C3%A1y%20t%C3%ADnh%2Finterview%2FinterviewReact%2Fkarban-backend%2Fsrc%2Findex.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22index.ts%22%2C%22414e2047-6b08-4c05-9488-b33632b5c27a%22%5D "c:\Users\ricky\OneDrive\Máy tính\interview\interviewReact\karban-backend\src\index.ts"): Entry point for the server.
    - [`routes.ts`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fricky%2FOneDrive%2FM%C3%A1y%20t%C3%ADnh%2Finterview%2FinterviewReact%2Fkarban-backend%2Fsrc%2Froutes.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22routes.ts%22%2C%22414e2047-6b08-4c05-9488-b33632b5c27a%22%5D "c:\Users\ricky\OneDrive\Máy tính\interview\interviewReact\karban-backend\src\routes.ts"): API route definitions.

## Contributing

Feel free to submit issues and pull requests. For major changes, please open an issue first to discuss what you would like to change.
