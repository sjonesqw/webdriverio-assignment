const LoginPage = require('../pageobjects/login.page');

describe('login to the appliocatio usin the user info provided', () => {
    
    it('should enter valid data in the required fields', async () => {
        await LoginPage.open();

        await LoginPage.login( "stephup@mailinator.com", "Stephanie1!");
        // if (signupPage.flashmssg.toHaveTextContaining('Thank you for registering with Fake Online Clothing Store.')){
        //    expect( await browser.url('https://magento.softwaretestingboard.com/customer/account/'));
        // }else{
        //     await expect(signupPage.flashmssg).toHaveTextContaining('There is already an account');
        //     await browser.url('https://magento.softwaretestingboard.com/customer/account/create/');
        // }
        await browser.url('https://magento.softwaretestingboard.com/');
    });

});