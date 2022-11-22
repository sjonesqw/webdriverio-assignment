const Page = require('./page');
const proddata = require('../data/Productdata')
let slctr ="";
class addproducts extends Page {

    
    get selectcategory (){
        return $('#ui-id-4');
    }
    get selectsubcategory (){
        return $('#maincontent > div.columns > div.sidebar.sidebar-main > div.widget.block.block-static-block > div > ul:nth-child(2) > li:nth-child(1) > a'); 
    }

    get clickprod (){
        return $(slctr);  
    }

    get size (){
        return $('#option-label-size-143-item-168');
    }

    get color (){
        return $('#option-label-color-93-item-53');
        
    }
    get addtocart (){
        return $('button[title="Add to Cart"]');
    }

    async addprodflow (){
        for (const prodata of proddata){
        slctr = prodata.prodtitle;
        await browser.url('https://magento.softwaretestingboard.com/');
        await this.selectcategory.click();
        await this.selectsubcategory.click();
        await this.clickprod.click();
        await this.size.click();
        await this.color.click();
        await this.addtocart.click();
        await browser.pause(2000);
    }
}

    open (){
        return super.open('/');
    }
}
module.exports = new addproducts();