import fs from 'fs';
import path from 'path';

export class LocatorHelper {

    private page;
    private locators: any;
    private browserName: string;


    constructor(page : any, browserName: string, pageKey: string, language: string){
        this.page = page
        this.browserName = browserName
        const filePath = path.resolve(__dirname,`../locators/${pageKey}.locators.json`);
        console.log('path file: '+ filePath)
        const raw = fs.readFileSync(filePath,'utf-8');
        const all = JSON.parse(raw);
        
        this.locators = 
        (all[browserName] && all[browserName][language])||
        (all['chromium'] && all['chromium'][language])|| // if the argument is empty use default is chromium
        {};


    if (Object.keys(this.locators).length === 0) {
        throw new Error(`Locator is not found for browser="${browserName}", language="${language}"`);
      }

    }

    getValue(key : string){
        const value = this.locators[key];

        if(! value){
            throw new Error(`The locator "${key}" dose not exist in file "${this.browserName}"`)
        }
        // check if the locator is xpath so start it with prefic "xpath="
        if(typeof value === 'string' && value.trim().startsWith('//')){
            return `xpath=${value}`;
        }

        // if it is not xpath, it mean css locator
        return this.locators[key];
    }

}