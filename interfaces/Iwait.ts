import { Locator } from "@playwright/test";

export interface Iwait {
    waitForVisible(locator: Locator, timeout?: number): Promise<void>;
    waitForHidden(locator: Locator, timeout?: number): Promise<void>;
    waitForAttached(locator: Locator, timeout?: number): Promise<void>;
    waitForDetached(locator: Locator, timeout?: number): Promise<void>;
    waitForEnabled(locator: Locator, timeout?: number): Promise<void>;
    waitForDisabled(locator: Locator, timeout?: number): Promise<void>;
  }