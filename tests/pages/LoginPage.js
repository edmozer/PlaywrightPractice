class LoginPage {
    constructor(page) {
      this.page = page;
      this.emailInput = page.locator('[data-testid="email"]');
      this.passwordInput = page.locator('[data-testid="senha"]');
      this.loginButton = page.locator('[data-testid="entrar"]');
      this.alertMessage = page.locator('role=alert');
      this.loginPageTitle = page.locator('h1');
      this.registerBtn = page.locator('[data-testid="cadastrar"]');
    }
  
    async navigateTo() {
      await this.page.goto('https://front.serverest.dev/login');
    }

    async navigateToRegister() {
      await this.registerBtn.click();
    }
  
    async login(email, password) {
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    }
  
    async getAlertMessage() {
      return this.alertMessage.textContent();
    }
  }
  
  module.exports = { LoginPage };
  