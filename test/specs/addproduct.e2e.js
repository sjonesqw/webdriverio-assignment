const addproductPage = require('../pageobjects/addproduct.page');


describe('add a product to the cart', () => {
    it('should add the first 2 product from the womens sweater and hoodie section to the cart', async () => {
        //await addproductPage.setprod(prodct.prodtitle);
        await browser.setTimeout({ 'pageLoad': 10000000 })
        //await setTimeout (2000000);
        await addproductPage.open();
    
        await addproductPage.addprodflow();
        await browser.pause(2500);
        
    });

//await browser.url('https://magento.softwaretestingboard.com/helena-hooded-fleece.html');
});