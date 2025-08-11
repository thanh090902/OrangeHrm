import { Locator } from "@playwright/test";


export interface IAction {
    click(locator: Locator): Promise<void>;
    doubleClick(locator: Locator): Promise<void>;
    rightClick(locator: Locator): Promise<void>;
    clickWithDelay(locator: Locator, delay?: number): Promise<void>;
    clickAtPosition(locator: Locator, x: number, y: number): Promise<void>;
    forceClick(locator: Locator): Promise<void>;
    hoverAndClick(locator: Locator): Promise<void>;
  
    fill(locator: Locator, value: string): Promise<void>;
    type(locator: Locator, value: string): Promise<void>;
    press(locator: Locator, key: string): Promise<void>;
  
    check(locator: Locator): Promise<void>;
    uncheck(locator: Locator): Promise<void>;
    selectOption(locator: Locator, value: string): Promise<void>;
  }