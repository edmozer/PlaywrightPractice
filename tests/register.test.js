const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');
const { HomePage } = require('./pages/HomePage');
const { RegisterPage } = require('./pages/RegisterPage');

test('Test login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.navigateTo();
  await loginPage.login('test@tes.com', '12345');

  const alertMessage = await loginPage.getAlertMessage();
  expect(alertMessage).toContain('inválidos');
});

test('Register as normal user', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await loginPage.navigateTo();
    await loginPage.navigateToRegister();
    await registerPage.register('Ed is testing', 'test@test.com', 'Password123');
    await homePage.isTitleTextExpected('Serverest Store');
});

test('Register as admin', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await loginPage.navigateTo();
    await loginPage.navigateToRegister();
    await registerPage.registerAsAdmin('Ed is testing', 'test@test.com', 'Password123');
    await homePage.isTitleTextExpected('Serverest Store');
});

// i dont think regist as admin is actually checking for text. Need to check.