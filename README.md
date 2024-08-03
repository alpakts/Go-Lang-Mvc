
# Go Web Application with Gin and HTML Templates

This project demonstrates how to build a web application in Go using the Gin framework and dynamic HTML templates. The application includes a user registration page and a home page.

## Requirements

- [Go](https://golang.org/dl/) (version 1.16 or later)
- [Gin web framework](https://github.com/gin-gonic/gin)
- [godotenv package](https://github.com/joho/godotenv)
- [Gorm ORM](https://gorm.io/driver/postgres/)

## Project Structure

```
myapi/
|-- .vscode/
|   |-- launch.json
|-- main.go
|-- config/
|   |-- config.go
|-- migrate/
|   |-- migrate.go
|-- controllers/
|   |-- auth.go
|   |-- user.go
|-- models/
|   |-- product.go
|   |-- user.go
|-- templates/
|   |-- auth/
|       |-- register.html
|   |-- index.html
|-- mysql.env
|-- postgres.env
```

## Setup

### Step 1: Clone the Repository

```sh
git clone https://github.com/your-username/myapi.git
cd myapi
go mod tidy
```

### Step 2: Install Dependencies

Ensure you have the necessary Go packages installed. Run the following command to install the required dependencies:

```sh
go get -u github.com/gin-gonic/gin github.com/joho/godotenv gorm.io/driver/postgres gorm.io/gorm
```

### Step 3: Configure Environment Variables

Create a `postgres.env` and `mysql.env` file in the project root directory and add your database configuration:

**postgres.env**

```plaintext
DB_TYPE=postgres
DB_USERNAME=postgres
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_PORT=5432
DB_NAME=mydatabase
```

**mysql.env**

```plaintext
DB_TYPE=mysql
DB_USERNAME=root
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_PORT=3306
DB_NAME=mydatabase
```
### Step 4: Run the Application

Run the application using the following command:

```sh
go run main.go
```

The application should now be running on `http://localhost:8080`.

### Step 5: Access the Application

- Visit the home page at `http://localhost:8080`.
- Access the registration page at `http://localhost:8080/register`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
