import { expect, test } from '../fixture/BaseTest';
import { User } from '../models/User';
import { LoginPage } from '../pages/LoginPage';
import { BasePage } from '../pages/BasePage';
import { MyInforPage } from '../pages/MyinforPage';
import { NavigateMenu } from '../enums/NavigateMenu';
import { MyInfoMenu } from '../enums/MyInfoMenu';




test('Demo test', async ({ browserName, page },testInfo) => {
  
  // testInfo.annotations.push({ type: 'story', description: 'User can login successfully' });

  
  // 1: Verify title pase xuất hiện
  console.log('Đang chạy trên:', browserName);
  

  // 2: Login
  const user = new User('admin', 'validUser');
  const loginPage = new LoginPage(page, browserName, 'login', "EN")
  await loginPage.loginAccount(user);
  await loginPage.waitForLoginSuccess();

  // 3: Verify login success
  // const topbarExistedAfterLogin = loginPage.getLocatorInFile('lblDashboard');
  // await expect(page.locator(topbarExistedAfterLogin)).toBeVisible();

  // 4: Navigate to "My Info" page 
  const basePage = new BasePage(page, browserName, 'base', "EN");
  await basePage.navigateTo(NavigateMenu.MyInfo);

  // 5: collect job details
  const myInfoPage = new MyInforPage(page, browserName, 'myinfor', "EN");
  await basePage.navigateTo(MyInfoMenu.JOB);
  const jobDetails = await myInfoPage.getJobDetails();
  console.log('Job Details:', jobDetails);
});

