# NODEJS EXPRESS JS AUTHENTICATION WITH JWT

What is JSON Web Token?
JSON Web Token (JWT) is a standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. The compact size makes the tokens easy to transfer through an URL, POST parameter, or inside an HTTP header. The information in a JWT is digitally signed using a secret or public/private key pair.

JWTs can be signed using a secret or a public/private key pair.

JWTs are mainly used for authentication. After a user signs in to an application, the application then assigns JWT to that user. Subsequent requests by the user will include the assigned JWT. This token tells the server what routes, services, and resources the user is allowed to access.

# The Need for JSON Web Token
There are several reasons why applications use JSON Web Tokens for authentication:



1. JWT is an excellent choice to be passed in HTML and HTTP environments due to its smaller footprint when compared to other types of tokens
json-web-token.

2. JSON Web Tokens can be signed using a shared secret and also by using public/private key pairs
json

3. It is easier to work with JWT as JSON parsers are standard in most programming languages
jwt

4. JWT is also suitable for implementing authorization in large-scale web applications

# Here is the diagram of how JWT works:

![authentication-and-authorization-in-expressjs-using-jwt-2](https://user-images.githubusercontent.com/100437247/200182992-74bb262b-52cf-4e98-be3f-acff549ca960.png)

