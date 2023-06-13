## Express Questions

### Q.1 Create a simple server using Express and connect with backend and create an endpoint “/post” which sends 20 posts.

#### Ans. link [connecting backend in express](https://github.com/aivy45/AssignMent-Ineuron/tree/main/Express/expresswithdb)

### Q.2 Explain a middleware and create a middleware that checks is user authenticated or not then send data of post.

#### Ans. ......

### Q.3 Create a backend for blog app, where user can perform crud operations -Add blog -Delete blog - Update blog - Replace blog

####Ans. Link [ Blog App with crud operations](https://github.com/aivy45/AssignMent-Ineuron/tree/main/Express/basicCrudBlog)

### Q.4 What is the difference between authentication and authorization?

#### Ans.

- Authentication and authorization are two distinct concepts in the field of computer security that are often used together to control access to resources. Here's an explanation of their differences:
- Authentication:

  - Authentication is the process of verifying the identity of a user, system, or entity.
  - It is a mechanism used to ensure that the claimed identity of an entity is genuine and accurate.
  - The primary goal of authentication is to establish trust by validating the credentials provided by the user.
  - This process typically involves the use of usernames, passwords, PINs, biometric factors (such as fingerprints or facial recognition), or other authentication factors.

- Authorization:

  - Authorization, on the other hand, is the process of granting or denying access rights and permissions to authenticated users.
  - Once a user's identity has been verified through authentication, authorization determines what actions or operations they are allowed to perform and what resources they can access.
  - Authorization is often based on the user's role, group membership, or specific permissions assigned to them.

- In summary, authentication verifies the identity of a user, while authorization determines what actions or resources that authenticated user is allowed to access.

### Q.5 What is the difference between common JS and EJS module?

#### Ans. The difference between CommonJS (CJS) and EJS (Embedded JavaScript) modules lies in their syntax and usage.

- Syntax:

  - Syntax: CommonJS modules use the require() function to import other modules,
  - while EJS modules use the import keyword.

- Support

  - CommonJS is supported by Node.js,
  - while EJS is supported by both Node.js and the browser.

- Flexible
  - ComminJs is less flexible.
  - While EJS is more flexible.

### Q.6 What is JWT and what we can achieve with that create a minor project with jwt (5 Marks) - Login and sign up - Add authentication using jwt .

#### Ans.

- A JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between parties as a JSON object.
- This object is a string consisting of three parts separated by dots (.), which are:

  - Header: Contains information about the token, such as the algorithm used to sign it.
  - Payload: Contains the claims, which are data about the user or the request.
  - Signature: Used to verify the authenticity of the token.

- Through JWTs we can achieve a successful authentication and authorization in Express applications.
- When a user logs in, the server generates a JWT token and sends it to the client.
- The client then includes the JWT token in all subsequent requests to the server. The server can then use the JWT token to authenticate the user and authorize them to access protected resources.

- Link done [Authentication with jwt](https://github.com/aivy45/AssignMent-Ineuron/tree/main/Express/jwtAuthSystem)

### Q.7 What should we do with the password of a user before storing it into DB?

#### Ans.

- Before storing it into db we encrypt the password or can say hash the password.
- Hashing:
  - Hashing is a one-way cryptographic function that converts a password into a fixed-length string of characters.
  - It is crucial to hash passwords before storing them in the database.
  - Hashing ensures that even if the database is compromised, the original passwords cannot be easily retrieved.
  - Hash is done via bcrypt npm library.
  - If we want more security then we can also add salt on it.

### Q.8 Whats event loop in NodeJS?

#### Ans.

- The Event loop is a loop in Nodejs which is an endless loop, it waits for the events and executes them by pushing the tasks into the call stack.
- It monitors the call stack and when the call stack is empty, the event loop again pushes the tasks from the callbackqueue to the call stack.

### Q.9 Create a Full Stack Ecommerce website with all major functionalities.

#### Ans. Done [MERN Stack Goldy-Mart Ecommerce](https://github.com/aivy45/AssignMent-Ineuron/tree/main/Express/Goldy-Mart-fullStack)
