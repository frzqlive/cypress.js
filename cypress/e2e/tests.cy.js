describe("Форма логина", function () {
  it("Позитивный кейс", function () {
    cy.visit("https://login.qa.studio/");
    cy.get("#mail").type("german@dolnikov.ru");
    cy.get("#pass").type("iLoveqastudio1");
    cy.get("#loginButton").click();
    cy.get("#messageHeader").contains("Авторизация прошла успешно");
    cy.get("#exitMessageButton > .exitIcon");
  });
});

describe("Форма логина", function () {
  it("Забыли пароль", function () {
    cy.visit("https://login.qa.studio/");
    cy.get("#forgotEmailButton").click();
    cy.get("#mailForgot").type("anymail@gmail.com");
    cy.get("#restoreEmailButton").click();
    cy.get("#messageHeader").contains("Успешно отправили пароль на e-mail");
    cy.get("#exitMessageButton > .exitIcon");
  });
});

describe("Форма логина", function () {
  it("Неверный пароль", function () {
    cy.visit("https://login.qa.studio/");
    cy.get("#mail").type("german@dolnikov.ru");
    cy.get("#pass").type("iLoveqastudio11");
    cy.get("#loginButton").click();
    cy.get("#messageHeader").contains("Такого логина или пароля нет");
    cy.get("#exitMessageButton > .exitIcon");
  });
});

describe("Форма логина", function () {
  it("Неверный логин", function () {
    cy.visit("https://login.qa.studio/");
    cy.get("#mail").type("germandol@dolnikov.ru");
    cy.get("#pass").type("iLoveqastudio1");
    cy.get("#loginButton").click();
    cy.get("#messageHeader").contains("Такого логина или пароля нет");
    cy.get("#exitMessageButton > .exitIcon");
  });
});

describe("Форма логина", function () {
  it("Почта без @", function () {
    cy.visit("https://login.qa.studio/");
    cy.get("#mail").type("germandolnikov.ru");
    cy.get("#pass").type("iLoveqastudio1");
    cy.get("#loginButton").click();
    cy.get("#messageHeader").contains("Нужно исправить проблему валидации");
    cy.get("#exitMessageButton > .exitIcon");
  });
});

describe("Форма логина", function () {
  it("Почта с разным регистром", function () {
    cy.visit("https://login.qa.studio/");
    cy.get("#mail").type("GerMan@Dolnikov.ru");
    cy.get("#pass").type("iLoveqastudio1");
    cy.get("#loginButton").click();
    cy.get("#messageHeader").contains("Авторизация прошла успешно");
    cy.get("#exitMessageButton > .exitIcon");
  });
});
