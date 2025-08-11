import { Locator } from "@playwright/test";

export interface IInfor {
    getText(locator: Locator): Promise<string>;
    getAttribute(locator: Locator, attribute: string): Promise<string | null>;
    isVisible(locator: Locator): Promise<boolean>;
    isEnabled(locator: Locator): Promise<boolean>;
    isChecked(locator: Locator): Promise<boolean>;
  }