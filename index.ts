import { Elysia } from "elysia";

const app = new Elysia();

app.get("/", () => "Hello Bun!");
app.group("/api", (app) =>
  app.get("/user", () => {
    const user = {
      name: "Satria",
      email: "satria@bun.sh",
    };
    return user;
  })
);

app.listen(3000, () => console.log("Bun Elysia running!"));
