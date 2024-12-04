// @ts-check
const { test, expect } = require('@playwright/test');

test('Test login with invalid credential', async ({ page }) => {
  await page.goto('https://front.serverest.dev/login');
  await page.getByTestId('email').fill('test@tes.com')
  await page.getByTestId('senha').fill('12345')
  await page.getByTestId('entrar').click()

  const alert = await page.getByRole('alert');
  await expect(alert).toContainText('inválidos');
});

test('Test login with valid credentials', async ({ page }) => {
  await page.goto('https://front.serverest.dev/login');
  await page.getByTestId('email').fill('test789098789@gmail.com')
  await page.getByTestId('senha').fill('password')
  await page.getByTestId('entrar').click()
  await page.waitForURL('https://front.serverest.dev/admin/home')
  const welcomeMessage = page.locator('h1');
  await expect(welcomeMessage).toContainText('Bem Vindo')

});


