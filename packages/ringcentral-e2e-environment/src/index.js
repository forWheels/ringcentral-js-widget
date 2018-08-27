const NodeEnvironment = require('jest-environment-node');

class WebDriverEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
    // console.log(config, '====');
    this._config = config;
  }

  async setup() {
    await super.setup();
    // this.global.page = await this.global.browser.newPage();
  }

  async teardown() {
    // await this.global.page.close();
    await super.teardown();
  }
}

module.exports = WebDriverEnvironment;
