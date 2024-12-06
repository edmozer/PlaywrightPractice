const { HomePage } = require('./HomePage');

class RegisterPage{
    constructor(page) {
        this.page = page;
        this.nameInput = page.locator('[data-testid="nome"]');
        this.emailInput = page.locator('[data-testid="email"]');
        this.passwordInput = page.locator('[data-testid="password"]');
        this.checkboxAdmin = page.locator('[data-testid="checkbox"]');
        this.registerButton = page.locator('[data-testid="cadastrar"]');
        this.loginInsteadButton = page.locator('[data-testid="entrar"]');
    }

    generateRandomString(length = 5) {
        return Math.random().toString(36).substring(2, 2 + length);
    }

    async register(name, email, password) {
        const randomEmail = `${this.generateRandomString()}${email}`;
        await this.nameInput.fill(name);
        await this.emailInput.fill(randomEmail);
        await this.passwordInput.fill(password);
        await this.registerButton.click();
    }

    async registerAsAdmin(name, email, password) {
        const randomEmail = `${this.generateRandomString()}${email}`;
        await this.nameInput.fill(name);
        await this.emailInput.fill(randomEmail);
        await this.passwordInput.fill(password);
        await this.checkboxAdmin.click();
        await this.registerButton.click();
    }
}

module.exports = {RegisterPage};
  