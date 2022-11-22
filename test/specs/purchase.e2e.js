const addproductPage = require('../pageobjects/addproduct.page');
const purchasepage = require('../pageobjects/purchase.page');


describe('Checkout items in a cart', () =>{
    it('should add a product to the cart, and enter required information to complete the order', async () => {
        await browser.setTimeout({ 'pageLoad': 100000000 });
        await addproductPage.open();
        await addproductPage.addprodflow();
        await purchasepage.open();
        await purchasepage.purchaseflow('mommy2@mailinator.com','Stephanie','Jones','245 Whitloch road','Pleasant Hill','Des Moines','35235','4567893067');
        await browser.url ('https://magento.softwaretestingboard.com/checkout/onepage/success/');


    });

});