import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000);

describe('popover button', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:8888';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('show popover', async () => {
    await page.goto(baseUrl);
    const btn = await page.$('.btn-danger');
    btn.click();
    await page.waitForSelector('.popover-header');
    const popoverTitle = await page.$eval('.popover-header', (e) => e.textContent);
    expect(popoverTitle).toBe('Popover');
  });

  test('closes popover', async () => {
    const button = await page.$('.btn-danger');
    await button.click();
    await page.waitForSelector('.popover');
    const popover = await page.$eval('.popover', (e) => e.classList.contains('hidden'));
    expect(popover).toBe(true);
  });
});
