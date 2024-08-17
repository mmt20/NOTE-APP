# Note App

This project is a simple note-taking application built using Node.js and Express. It allows users to create, read, update, and delete notes. The notes are stored in memory using the `memorystorage` library.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create a new note with a title and content.
- Retrieve all notes.
- Update an existing note.
- Delete a note by its ID.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/mmt20/NOTE-APP.git
cd note-app
```

2. Install the dependencies:

```bash
npm install
```

## Usage

1. Start the server:

```bash
npm start
```

2. The server will run on http://localhost:3000.

## API Endpoints

- GET `/api/v1/notes`: Retrieve all notes.
- POST `/api/v1/notes/save`: Create a new note
  - Request Body:
    ```bash
    {
      "title": "Note Title",
      "content": "Note Content"
    }
    ```
- PUT `/api/v1/notes/update`: Update an existing note.
  - Request Body:
    ```bash
    {
      "noteId": "001",
      "title": "Updated Note Title",
      "content": "Updated Note Content"
    }
    ```
- DELETE `/api/v1/notes/delete/:noteId`: Delete a note by its ID.
