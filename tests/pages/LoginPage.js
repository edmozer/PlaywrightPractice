class LoginPage {
    constructor(page) {
      this.page = page;
      this.emailInput = page.locator('[data-testid="email"]');
      this.passwordInput = page.locator('[data-testid="senha"]');
      this.loginButton = page.locator('[data-testid="entrar"]');
      this.alertMessage = page.locator('role=alert');
    }
  
    // Method to navigate to the login page
    async navigateTo() {
      await this.page.goto('https://front.serverest.dev/login');
    }
  
    // Method to perform login with email and password
    async login(email, password) {
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    }
  
    // Method to get alert message after failed login
    async getAlertMessage() {
      return this.alertMessage.textContent();
    }
  }
  
  module.exports = { LoginPage };
  