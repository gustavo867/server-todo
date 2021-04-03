<div align="center">
<h1>Todo Server</h1>

</div>

## 🚀 Technologies

Technologies that I used to develop

- Node
- Typescript
- Knex
- MySQL
- TypeOrm

## 💻 Getting Started

**Clone the project and access the folder**

```bash
  $ git clone https://github.com/gustavo867/server-todo && cd sever-todo
```

**Follow the steps below**

## V1

```bash
# Install the dependencies
$ yarn or npm

# Run the migrations
$ yarn run knex:migrate or npm run knex:migrate

# Start the server
$ yarn run dev
```

## V2

## Routes

```bash
# Install the dependencies
$ yarn or npm

# Run the migrations
$ yarn typeorm migration:run or npm run typeorm migration:run

# Start the server
$ yarn run dev
```

```bash
# /v1/todos or /v2/todos

# Post
$ Create Todo

# Delete
$ Delete todo passing the id

# Get
$ List all todos

# Put
$ Update the todo based on id
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork gustavo867/server-todo
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone https://github.com/gustavo867/server-todo && cd sever-todo

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 by Gustavo Santana 👋 [See my linkedin](https://www.linkedin.com/in/gustavo-santana-83ba611a6/)
