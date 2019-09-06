export const base = server => {
  server.createList("user", 10);
  server.create("user", "blocked");
  server.create("user", { name: "Foo" });
};
