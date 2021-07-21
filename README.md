# Object Relational Mapping (ORM): E-commerce Back End
An E-Commerce site that uses Express.js API and Sequelize to interact with a MySQL database. This application displays a my SQL database with models and associations. My walkthrough video listed below demonstrates the API Routes to perform RESTful CRUD operations.


## Installation
1. Ensure MySQL and Insomnia/Postman are installed.
2. Clone this repository to your local machine.
```
git clone 
```
3. Open the terminal and `cd` to the root of the repository.
4. Open the repo in your code editor.
5. Create a .env file at the root of the repo. (Copy and paste the following code in the .env file. Replace the value of DB_USER and DB_PW with your own credentials inside the quotes.)
```
DB_USER = 'enter your MySQL username here.'
DB_PW = 'enter your MySQL password here.'
DB_NAME = 'ecommerce_db'
```
7. Install all the dependencies:
```
npm install
```
8. Open the MySQL shell in the terminal using the folowing command and enter your password when prompted.
```
mysql -u root -p
```
9. Run the commands below to create and then use the database.
```
source db/schema.sql

```
```
USE ecommerce_db;

```
10. Exit the MySQL shell by running the following command.
```
exit
```
11. In the terminal run this command to seed the tables: 
```
npm run seed
```
12. Run the server using:
```
node server.js
```
or 

```
npm start
```

## Usage
1. Open Insomnia
2. Test the various endpoints at http://localhost:3001/

## Preview
https://youtu.be/Art69Vm5ROA
</br>
https://drive.google.com/file/d/1t2nKfLe6-botXaKhLSOBE7wLXx66w11o/view 


## Technologies
* ExpressJS
* MySQL2
* Sequelize

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Author

Jessica Jeyanthiran is a student of the Univerity of Toronto Coding Boot Camp Spring 2021. </br>
Find me on GitHub: https://github.com/JessicaJeyanthiran
