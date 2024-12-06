class HomePage {
    constructor(page) {
      this.page = page;
      this.registerUserBtn = page.locator('[data-testid="cadastrarUsuarios"]');
      this.listBtn = page.locator('[data-testid="listarUsuarios"]');
      this.registerProductBtn = page.locator('[data-testid="cadastrarProdutos"]');
      this.listProductsBtn = page.locator('[data-testid="listarProdutos"]');
      this.reportsBtn = page.locator('[data-testid="relatorios"]');
      this.logoutBtn = page.locator('[data-testid="logout"]');
      this.title = page.locator('h1')
    }
  
    async navigateToHome() {
      await this.page.goto('https://front.serverest.dev/admin/home');
    }

    async clickLogout() {
        await this.logoutBtn.click();
    }

    async isTitleTextExpected(expectedText) {
      const actualText = await this.title.textContent();
      return actualText.trim() === expectedText.trim();
    }

  }
  
  module.exports = { HomePage };