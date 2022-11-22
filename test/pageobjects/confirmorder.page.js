const Page = require('./page');

class confirmationpage extends Page{
    
    get accountmenu(){
       return $('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.customer-welcome > span > button');
    }
    get myaccount (){
        return $('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.customer-welcome.active > div > ul > li:nth-child(1) > a');
    }
    get myorders(){
        return $('#block-collapsible-nav > ul > li:nth-child(2) > a');
    }
    get flash(){
        return $('#maincontent > div.columns > div.column.main > div.message.info.empty');
    }
    get ordernum(){
        return $('#my-orders-table > tbody > tr > td.col.id.cf-tweet-this.cf-tt-target.cf-tt-abutted.cf-tt-abutted-top.cf-tt-element-attached-bottom.cf-tt-element-attached-center.cf-tt-target-attached-top.cf-tt-target-attached-center.cf-tt-enabled.cf-tt-out-of-bounds.cf-tt-out-of-bounds-top');
        return $('#my-orders-table > tbody > tr');
    }

    async confirmorderflow(){
        
        await browser.url('https://magento.softwaretestingboard.com/');

        await this.accountmenu.click();
        await this.myaccount.click();
        await this.myorders.click();
        
        
        await browser.url('https://magento.softwaretestingboard.com/sales/order/history/');
    }

    open (){

        return super.open('/');
    }
}
module.exports = new confirmationpage();