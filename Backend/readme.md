# API Documentation

## /users/register
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com"
  }
}
### Description
This endpoint is used to register a new user.

### Method
`POST`

### Request Body
The request body should be a JSON object with the following fields:

- `email` (string): The email of the user. Must be a valid email address.
- `fullname` (object): An object containing the user's full name.
  - `firstname` (string): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string): The last name of the user. Must be at least 3 characters long.
- `password` (string): The password of the user. Must be at least 6 characters long.

Example:
```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "password123"
}

{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com"
  }
}
// Status Code: 201 Created

{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
// Status Code: 400 Bad Request

{
  "message": "User already exist"
}
// Status Code: 400 Bad Request