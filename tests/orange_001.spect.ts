import { userInfo } from 'os';
import {expect,test} from '../fixture/BaseTest';
import { User } from '../models/User';
import { LoginPage } from '../pages/LoginPage';


test('Demo test', async ({ browserName, page }) => {
    // 1: Verify title pase xuất hiện
    console.log('Đang chạy trên:', browserName); 
    await expect(page).toHaveTitle(/OrangeHRM/);
    
    // 2: Login
    const user = new User('admin', 'validUser');

    const loginPage = new LoginPage(page,browserName,"EN")

     await loginPage.loginAccount(user);
    

     await page.waitForTimeout(30000)

  });

