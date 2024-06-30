# Auto Rental -- Backend

This project is a web application built using Node.js and Express.js for the backend, with MySQL as the database. Prisma ORM is used for database management and schema design. 

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Database Design](#database-design)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features


- **Data Management**: CRUD operations for Vehicle.
- **Scalable Architecture**: Modular and maintainable code structure.

## Tech Stack

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MySQL**: Relational database management system.
- **Prisma ORM**: Next-generation ORM for Node.js and JavaScript.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed on your local machine:

- Node.js
- MySQL

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/pradhyumvyas/Auto-Rental-Booking-System.git
   cd Auto-Rental-Booking-System/Backend
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Set up environment variables**

   Create a new file named `.env` in the root directory of the project. Add the following environment-specific variables to the file:

   ```bash
   DATABASE_URL="mysql://user:password@localhost:3306/db_name"
   PORT,
   CORS_ORIGIN
   ```

4. **Set up and Seeding the database**
   Make sure your MySQL server is running and execute the Prisma migration commands:
   - Go to src/db/index.js and uncoment the main function body for seeding the database.
   - To create a new database schema, run:
     ```bash
     npx prisma migrate dev --name init
     ```
5. **Run the development server**
   
      ```bash
      npm run dev
      ```
   Your server start at http://localhost:<PORT>.
   
## Database Design
   [Database Design](./src/assets/diagram-export-29-06-2024-04_21_54.png)

## Acknowledgments

We would like to extend our gratitude to the following technologies and resources that made this project possible:

- **[Node.js](https://nodejs.org/)**: For providing a robust and scalable JavaScript runtime environment.
- **[Express.js](https://expressjs.com/)**: For simplifying the development of our web server and API.
- **[MySQL](https://www.mysql.com/)**: For offering a reliable and efficient relational database management system.
- **[Prisma ORM](https://www.prisma.io/)**: For enabling us to manage and interact with our database effortlessly.


