import fs from 'fs';
import path from 'path';

export class LocatorHelper {

    private page;
    private locators: any;
    private platForm: string;
    private pageKey: string;


    constructor(page: any, platForm: string, pageKey: string, language: string) {
        this.page = page
        this.platForm = platForm
        this.pageKey = pageKey
        const filePath = path.resolve(__dirname, `../locators/${pageKey}Locators.json`);
        console.log('path file: ' + filePath)
        const raw = fs.readFileSync(filePath, 'utf-8');
        const all = JSON.parse(raw);

        this.locators =
            (all[platForm] && all[platForm][language]) ||
            (all['desktop'] && all['desktop'][language]) || // if the argument is empty use default is desktop
            {};


        if (Object.keys(this.locators).length === 0) {
            throw new Error(`Locator is not found for platform="${platForm}", language="${language}"`);
        }

    }

    getValue(key: string) {
        const value = this.locators[key];

        if (!value) {
            throw new Error(`The locator "${key}" dose not exist in file: "${this.pageKey}"`)
        }
        // check if the locator is xpath so start it with prefic "xpath="
        if (typeof value === 'string' && value.trim().startsWith('//')) {
            return `xpath=${value}`;
        }

        // if it is not xpath, it mean css locator
        return this.locators[key];
    }

 formatDynamicLocator(template: string, dynamicValues: string[]) {
  let i = 0;
  const formatLocator = template.replace(/%s/g, () => dynamicValues[i++] || '');
  return formatLocator;
}

}