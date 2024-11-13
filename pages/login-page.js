const { BasePage } = require('./base-page');

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;

    this.usernameField = this.page.getByTestId('user-name');
    this.passwordField = this.page.getByTestId('password');
    this.loginButton = this.page.getByTestId('login-button');
  }

  // Navigate to the login page using the url in env variable
  async navigateToLogin() {
    await this.navigateTo(process.env.UI_URL);
  }

  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  // Method to verify successful login
  async verifySuccessfulLogin() {
    await this.page.waitForURL('**/inventory.html');
    await this.page.waitForSelector('.inventory_list');
  }
}