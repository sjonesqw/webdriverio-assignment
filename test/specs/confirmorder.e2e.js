const confirmationpage = require('../pageobjects/confirmorder.page');
const addproductPage = require('../pageobjects/addproduct.page');
const purchasepage = require('../pageobjects/purchase.page');
const orderlist = require ('../data/Orderdata');
const loginPage = require('../pageobjects/login.page');

describe('signup for the application', () => {
    
    it('should enter valid data in the required fields', async () => {

        await addproductPage.open();
        await addproductPage.addprodflow();
        await purchasepage.open();
        await purchasepage.purchaseflow('Stephup@mailinator.com','Stephanie','Jones','245 Whitloch road','Pleasant Hill','Des Moines','35235','4567893067');
        await browser.url('https://magento.softwaretestingboard.com/');
        await loginPage.open();

        // change login credentials below to test a confirmation with user that has orders existing
        // the following credentials can be used:  'Stephup@mailinator.com','Stephanie1!' 
        await loginPage.login('norder@mailinator.com','Stephanie1');
        await confirmationpage.open();

        await confirmationpage.confirmorderflow();
        
        if(confirmationpage.flash.toHaveTextContaining('no orders')){
            return true;
        }else{
            expect(await confirmationpage.ordernum.toHaveTextContaining('000'));
            await browser.url('https://magento.softwaretestingboard.com/sales/order/history/');
            //return true;
        }
       
    });

});





