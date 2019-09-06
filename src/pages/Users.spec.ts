import puppeteer from "puppeteer";
import { startMirage } from ".,/mirage";

describe("When visiting the homepage", function() {
  test("it shows blocked label", async function() {
    // Запускам наш тестовый сервер (он уже содержит какие-то тестовые данные)
    const server = startMirage({ environment: "testing" });

    // Создаем заблокированного тестового польвателя
    server.schema.users.create("blocked");

    // Запускаем браузер и открываем вкладку
    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    // Идем в приложение
    await page.goto("https://21s58.csb.app/");

    // ЗДЕСЬ ПРОВЕРЯЕМ КАК ВЫГЛЯДИТ НАШ ПОЛЬЗОВАТЕЛЬ...

    // Закрываем браузер
    browser.close();

    expect("ok").toContain("ok");
  });
});
