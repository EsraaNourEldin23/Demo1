import { test, expect } from '@playwright/test'
import { loginPage } from './login.page'
test('Valid Login', async ({ page }) => {
    const login = new loginPage(page);
    await login.Navigate_To_Login('');
    await login.performLogin('Esraa Phys', '2012');
    await page.waitForURL(/.*dashboard/);
    await expect(page).toHaveURL(/.*dashboard/);
    await page.pause()

    await page.context().storageState({ path: './Auth.json' })

//dfjkghdfjkhgh
})