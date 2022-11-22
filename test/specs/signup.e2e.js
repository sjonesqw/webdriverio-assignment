const signupPage = require('../pageobjects/signup.page');
const Signuppage = require('../pageobjects/signup.page');
const userdata = require ('../data/signupdata');

// account email is stephup@mailinator.com

describe('signup for the application', () => {
    for (const udata of userdata){
    it('should enter valid data in the required fields', async () => {
        await Signuppage.open();

        await Signuppage.signupinfo(udata.firstname, udata.lastname, udata.email, udata.password);
        if (signupPage.flashmssg.toHaveTextContaining('Thank you for registering with Fake Online Clothing Store.')){
           expect( await browser.url('https://magento.softwaretestingboard.com/customer/account/'));
        }else{
            await expect(signupPage.flashmssg).toHaveTextContaining('There is already an account');
            await browser.url('https://magento.softwaretestingboard.com/customer/account/create/');
        }
        
    });
}
});