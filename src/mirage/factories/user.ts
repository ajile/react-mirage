import faker from "faker";
import { Factory, trait } from "@miragejs/server";

export const user = Factory.extend({
  name: faker.random.word,
  status: "active",

  // Можно заказать заблокированного пользователя
  blocked: trait({
    status: "blocked",
    blockedAt: faker.date.past()
  })
});
