import BasePage from '../pages/base-page';
import { getCredentials } from '../utils/credentials';

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;

    this.usernameField = page.getByTestId("username");
    this.passwordField = page.getByTestId("password");
    this.loginButton = page.getByTestId("login-button");
  }

  async navigateToLogin() {
    await this.navigateTo(process.env.UI_URL);
  }

  async login() {
    const { username, password } = getCredentials();
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async verifySuccessfulLogin() {
    await this.page.waitForURL('**/inventory.html');
    await this.page.waitForSelector('.inventory_list');
  }
}