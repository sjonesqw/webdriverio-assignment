const Page = require('./page');
var fs = require('fs');
//let successnum ="";

class checkoutpage extends Page{
   
    get checkout(){
        return $('#maincontent > div.columns > div > div.cart-container > div.cart-summary > ul > li:nth-child(1) > button > span');
    }
    get signupemail(){
        //return $('[name="username"]');
        return $('#customer-email');
    }
    
    get fname(){
        return $('[name="firstname"]');
    }
    get lname(){
        return $('[name="lastname"]');
    }
    get stradd1(){
        return $ ('[name="street[0]"]');
    }
    get stradd2(){
        return $('[name="street[1]"]');
    }
    get city(){
        return $('[name="city"]');
        
    }
    get state(){
        return $('[name="region_id"]');
    }
    get zipcode(){
        return $('[name="postcode"]');
    }
    get country (){
        return $('[name="country_id"]');
    }
    get phonenum (){
        return $('[name="telephone"]');
    }
    get shipmeth (){
        
        return $('#checkout-shipping-method-load > table > tbody > tr:nth-child(2) > td:nth-child(1) > input');
    }
    get next(){
        //return $('button[title="Next"]');
        return $('#shipping-method-buttons-container > div > button');
        
        
    }
    get placeorder(){
        return $('#checkout-payment-method-load > div > div > div.payment-method._active > div.payment-method-content > div.actions-toolbar > div > button');
    }

    get ordernum (){

     return $('#maincontent > div.columns > div > div.checkout-success > p:nth-child(1) > span');
    }


    async purchaseflow (email,finame,liname,addr1,addr2,cityy,zip,pnumber){

    function writeTextFile(afilename, output)
    {
      var txtFile =new File(afilename);
      txtFile.writeln(output);
      txtFile.close();
    }
        
        await browser.url('https://magento.softwaretestingboard.com/checkout/cart/');
        await browser.pause(2000);
        await this.checkout.click();
        await browser.pause(2000);
        await this.signupemail.addValue(email);
        await browser.pause(2000);
        await this.fname.addValue(finame);
        await this.lname.addValue(liname);
        await this.stradd1.setValue(addr1);
        await this.stradd2.setValue(addr2);
        await this.city.setValue(cityy);
        await this.state.selectByAttribute("value","25")
        await this.zipcode.setValue(zip);
        await this.country.selectByAttribute("value", "US");
        await this.phonenum.setValue(pnumber);
        await this.shipmeth.click();
        //await browser.pause(1500);
        await this.next.click();
        await browser.pause(1000);
        await this.placeorder.click();
       // await browser.pause(1000);
        //successnum = String( await this.ordernum.textContent);
        //const successnum = this.getElementById('maincontent > div.columns > div > div.checkout-success > p:nth-child(1) > span');
        // fs.appendFile("../data/successorder.js", successnum,  (err) => {
        //     if (err) throw err;
        //     console.log('The "data to append" was appended to file!');
        //   });
        // fs.appendFile("../data/successorder.js", successnum, function(){
        //     console.log('made it here');
        // });
        await browser.url('https://magento.softwaretestingboard.com/checkout/onepage/success/');

        
        // write order number to file to be used in confirm orderdata
       //return $(' #maincontent > div.columns > div > div.checkout-success > p:nth-child(1) > span ');
    }

    open () {

        return super.open('/');
        // 'checkout/#shipping'
    }
}
module.exports = new checkoutpage();