# Jepture Client

Jepture Client

## Setup

```sh
#clone the repo

cd client

yarn
#or
npm install

```

## Starting App

```sh
yarn start
#or
npm start
```

| Endpoint      | HTTP   | Description       | Body                                                                          |
| ------------- | ------ | ----------------- | ----------------------------------------------------------------------------- |
| `/posts/`     | GET    | Get all Posts     | -                                                                             |
| `/posts/`     | POST   | Create Post       | `title` ,`author`,`content` ,`category`, `status`, `created_at`, `updated_at` |
| `/posts/:id/` | GET    | Get Post by id    | -                                                                             |
| `/posts/:id/` | PATCH  | Update Post by id | `title` ,`author`,`content` ,`category`, `status`, `updated_at`               |
| `/posts/:id/` | DELETE | DELETE Post by id |                                                                               |
