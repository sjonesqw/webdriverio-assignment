const confirmationpage = require('../pageobjects/confirmorder.page');
const addproductPage = require('../pageobjects/addproduct.page');
const purchasepage = require('../pageobjects/purchase.page');
const orderlist = require ('../data/Orderdata');
const loginPage = require('../pageobjects/login.page');

describe('signup for the application', () => {
    
    it('should enter valid data in the required fields', async () => {

        await addproductPage.open();
        await addproductPage.addprodflow();
        //await browser.url('https://magento.softwaretestingboard.com/circe-hooded-ice-fleece.html');
        await purchasepage.open();
        await purchasepage.purchaseflow('Stephup@mailinator.com','Stephanie','Jones','245 Whitloch road','Pleasant Hill','Des Moines','35235','4567893067');
        await browser.url('https://magento.softwaretestingboard.com/');
        await loginPage.open();
        await loginPage.login('Stephup@mailinator.com','Stephanie1!');
        await confirmationpage.open();

        await confirmationpage.confirmorderflow();
        
        if(confirmationpage.flash.toHaveTextContaining('No order')){
            return true;
        }else{
            expect(await confirmationpage.ordernum.toHaveTextContaining('000'));
            await browser.url('https://magento.softwaretestingboard.com/sales/order/history/');
            //return true;
        }
        //await browser.url('https://magento.softwaretestingboard.com/sales/order/history/');
       // await signupPage.body.toHaveText("My Account");
       // await expect(browser).toHaveText("My Account");
       // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //    'You logged into a secure area!');
    });

});





// describe('SauceLabs Login', () => {
//     for(const record of sauceLabsLoginData){
//         it(`should attempt to login the ${record.username}`, async () => {
//             await SauceLabsLoginPage.open(); //opening the page 
//             await SauceLabsLoginPage.login(record.username, record.password); //attempting to login with username and password
//             if(record.username === "invalid_user" || record.username === "locked_out_user"){ //checking if user is invalid or locked out.
//                 await expect(browser).toHaveUrl(record.expectedUrl); //if user is invalid or locked out im checking to see that they're at the correct url
//                 await expect(SauceLabsLoginPage.loginMessage).toHaveTextContaining(record.message); //if user is invalid or locked out im checking to see that they receive the correct error message
//             } else {
//                 await expect(browser).toHaveUrl(record.expectedUrl); //user isn't invalid or locked out. so i'm checking to see that they're at the correct url
//             }
//         });
//     }
// })