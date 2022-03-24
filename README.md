# 2-Container Database Backend

This is a simple test project to practise management of multiple containers. There are 2 interdependent services - **database** and **server**.

## Building & Running

Although not necessary, if you want to run this project locally, you will need Node.js and the `npm` package manager installed on your system.

### Running Locally

1. Clone the repository.
2. Navigate to the `server` folder and run `npm install` to install the required packages in the `package.json` file.
3. You will need access to a MySQL database with the `db/config.sql` script applied. In the `server/src/index.js` file, update the MySQL `connection_parameters` to point at this database.
4. Still in the server folder, run `npm start`.

### Running with Docker-Compose

There is a top-level Compose file for this project. You will need Docker and Docker-Compose installed and an internet connection to pull images.

1. Clone the repository.
2. Run `docker-compose`.
3. Once the stack has been brought up and running (look for the console output "Connected to MySQL!"), you can make HTTP requests to `localhost:9001` using the `curl` command templates in the `server/src/index.js` source file.

### Running with Kubernetes

You will need an active K8s cluster on AWS, since the AWS Load Balancer Controller needs to be installed on your cluster. The instructions for installing this controller can be found at [here](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html). You will need `kubectl` installed with the `~/.kube/config` file pointing at this cluster.

1. Cloning the repository is optional, as all you need are the 2 `k8s_---.yaml` files.
2. Apply the `k8s_db.yaml` file, then apply the `k8s_server.yaml` file.
3. After a few minutes, run `kubectl get ingress -n db-server`. If the AWS LB controller is functional, there should be an external DNS name that you can make HTTP requests to.

## The Database

The **database** runs on MySQL and contains 1 table: `users`, with the following schema:
- `id` - Integer, primary key, automatically generated.
- `username` - Varchar(64). Not null, must be unique.
- `email` - Varchar(254). This is an erratum to the RFC 3696 standard.
- `password_hash` - Varchar(60). Bcrypt output hashes are always 60 characters in length.

## The Server

The **server** is just a simple abstraction layer as a  Node.js project. It sits in front of the database, exposing CRUD operations and performing input verification on create & update requests before inserting into the database.

The 4 operatiations are *create* (Adding a new user), *read* (Get a user's information), *update* (Change a user's information), and *delete* (remove a user).

 Most verification includes:
- ***Input Length*** for the username, email, and password hash, so that the input doesn't overflow the maximum string length in the table.
- ***Regex***, only for the email.
- ***Uniqueness***, only for the username. No 2 usernames in the table can be the same.

## Resources

- [A StackOverflow question on email lengths.](https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address)
- [Variable substitution in a docker-compose file.](https://docs.docker.com/compose/compose-file/compose-file-v3/#variable-substitution)
- [isemail - A Node.js email address validation library.](https://www.npmjs.com/package/isemail)
- [The MySQL Docker Hub documentation.](https://hub.docker.com/_/mysql)
- [Unit testing an Express.js application.](https://alexanderpaterson.com/posts/how-to-start-unit-testing-your-express-apps)
- [The Docker-Compose file reference.](https://github.com/compose-spec/compose-spec/blob/master/spec.md)