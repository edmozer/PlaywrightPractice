const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');
const { HomePage } = require('./pages/HomePage');

test('Test login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.navigateTo();
  await loginPage.login('test@tes.com', '12345');

  const alertMessage = await loginPage.getAlertMessage();
  expect(alertMessage).toContain('inválidos');
});

test('Test login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.navigateTo();
  await loginPage.login('test789098789@gmail.com', 'password');
  
  await page.waitForURL('https://front.serverest.dev/admin/home');
  
  const welcomeMessage = page.locator('h1');
  expect(await welcomeMessage.textContent()).toContain('Bem Vindo');
});

test('Test login with valid credentials followed by logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    
    await loginPage.navigateTo();
    await loginPage.login('test789098789@gmail.com', 'password');
    
    await page.waitForURL('https://front.serverest.dev/admin/home');
    
    const welcomeMessage = page.locator('h1');
    expect(await welcomeMessage.textContent()).toContain('Bem Vindo');

    await homePage.clickLogout();


  });