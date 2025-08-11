import { IAction } from "../interfaces/IAction";
import { Iwait } from "../interfaces/Iwait";
import { IInfor } from "../interfaces/IInfor";  
import { Page, Locator, expect } from '@playwright/test';
import { LoggerHelper } from "./LoggerHelper";


export class PageHelper  implements IAction,Iwait,IInfor{

    constructor(private page: Page) {}

  // ========== Wait Implementations ==========
  async waitForVisible(locator: Locator, timeout: number = 5000): Promise<void> {
    LoggerHelper.info(`Wait for visible: ${locator.toString()}`);
    await locator.waitFor({ state: 'visible', timeout });
  }

  async waitForHidden(locator: Locator, timeout: number = DEFAULT_TIMEOUT): Promise<void> {
    LoggerHelper.info(`Wait for hidden: ${locator.toString()}`);
    await locator.waitFor({ state: 'hidden', timeout });
  }

  async waitForAttached(locator: Locator, timeout: number = DEFAULT_TIMEOUT): Promise<void> {
    LoggerHelper.info(`Wait for attached: ${locator.toString()}`);
    await locator.waitFor({ state: 'attached', timeout });
  }

  async waitForDetached(locator: Locator, timeout: number = DEFAULT_TIMEOUT): Promise<void> {
    LoggerHelper.info(`Wait for detached: ${locator.toString()}`);
    await locator.waitFor({ state: 'detached', timeout });
  }

  async waitForEnabled(locator: Locator, timeout: number = DEFAULT_TIMEOUT): Promise<void> {
    LoggerHelper.info(`Wait for enabled: ${locator.toString()}`);
    await expect(locator).toBeEnabled({ timeout });
  }

  async waitForDisabled(locator: Locator, timeout: number = DEFAULT_TIMEOUT): Promise<void> {
    LoggerHelper.info(`Wait for disabled: ${locator.toString()}`);
    await expect(locator).toBeDisabled({ timeout });
  }

  // ========== Action Implementations ==========
  async click(locator: Locator): Promise<void> {
    LoggerHelper.info(`Click: ${locator.toString()}`);
    await locator.click();
  }

  async doubleClick(locator: Locator): Promise<void> {
    LoggerHelper.info(`Double click: ${locator.toString()}`);
    await locator.dblclick();
  }

  async rightClick(locator: Locator): Promise<void> {
    LoggerHelper.info(`Right click: ${locator.toString()}`);
    await locator.click({ button: 'right' });
  }

  async clickWithDelay(locator: Locator, delay: number = 300): Promise<void> {
    LoggerHelper.info(`Click with delay: ${locator.toString()} (${delay}ms)`);
    await locator.click({ delay });
  }

  async clickWithModifier(locator: Locator, modifiers: KeyboardModifier[]): Promise<void> {
    LoggerHelper.info(`Click with modifier: ${modifiers.join('+')} on ${locator.toString()}`);
    await locator.click({ modifiers });
  }

  async clickAtPosition(locator: Locator, x: number, y: number): Promise<void> {
    LoggerHelper.info(`Click at position (${x},${y}) on ${locator.toString()}`);
    await locator.click({ position: { x, y } });
  }

  async forceClick(locator: Locator): Promise<void> {
    LoggerHelper.info(`Force click: ${locator.toString()}`);
    await locator.click({ force: true });
  }

  async hoverAndClick(locator: Locator): Promise<void> {
    LoggerHelper.info(`Hover and click: ${locator.toString()}`);
    await locator.hover();
    await locator.click();
  }

  async fill(locator: Locator, value: string): Promise<void> {
    LoggerHelper.info(`Fill: ${locator.toString()} with '${value}'`);
    await locator.fill(value);
  }

  async type(locator: Locator, value: string): Promise<void> {
    LoggerHelper.info(`Type: ${value} into ${locator.toString()}`);
    await locator.type(value);
  }

  async press(locator: Locator, key: string): Promise<void> {
    LoggerHelper.info(`Press: ${key} on ${locator.toString()}`);
    await locator.press(key);
  }

  async check(locator: Locator): Promise<void> {
    LoggerHelper.info(`Check: ${locator.toString()}`);
    await locator.check();
  }

  async uncheck(locator: Locator): Promise<void> {
    LoggerHelper.info(`Uncheck: ${locator.toString()}`);
    await locator.uncheck();
  }

  async selectOption(locator: Locator, value: string): Promise<void> {
    LoggerHelper.info(`Select: ${value} on ${locator.toString()}`);
    await locator.selectOption(value);
  }

  // ========== Info Implementations ==========
  async getText(locator: Locator): Promise<string> {
    LoggerHelper.info(`Get text from: ${locator.toString()}`);
    return await locator.textContent() ?? '';
  }

  async getAttribute(locator: Locator, attribute: string): Promise<string | null> {
    LoggerHelper.info(`Get attribute '${attribute}' from: ${locator.toString()}`);
    return await locator.getAttribute(attribute);
  }

  async isVisible(locator: Locator): Promise<boolean> {
    LoggerHelper.info(`Check visible: ${locator.toString()}`);
    return await locator.isVisible();
  }

  async isEnabled(locator: Locator): Promise<boolean> {
    LoggerHelper.info(`Check enabled: ${locator.toString()}`);
    return await locator.isEnabled();
  }

  async isChecked(locator: Locator): Promise<boolean> {
    LoggerHelper.info(`Check checked: ${locator.toString()}`);
    return await locator.isChecked();
  }

}