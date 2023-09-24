import {Page, Locator} from '@playwright/test'
export class loginPage{

    readonly page:Page;
    readonly userNameField: Locator;
    readonly passWordField: Locator;
    readonly loginBtn: Locator;

    constructor(page)
    {
        this.page = page;
        this.userNameField = page.locator('#userName');
        this.passWordField = page.locator('#passWord');
        this.loginBtn = page.locator('[type="submit"]');
    }

    //userName: string, passWord: string
    async Navigate_To_Login (url) {
        await this.page.goto(url);
        
    }

    
    async performLogin (userName,passWord) {
        await this.userNameField.click();
        await this.userNameField.fill(userName);
        await this.passWordField.click();
        await this.passWordField.fill(passWord);
        await this.loginBtn.click();
    }
}