const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputfirstname () {
        return $('#firstname');
    }
    get inputlastname () {
        return $('#lastname');
    }
    get inputemail () {
        return $('#email_address');
    }

    get inputpassword () {
        return $('#password');
    }
    get confpassword () {
        return $('#password-confirmation');
    }

    get btnSubmit () {
        return $('button[title="Create an Account"]');
    }
    get flashmssg (){
        return $('#maincontent > div.page.messages > div:nth-child(2) > div')

    }
    // get body(){
    //     return $('#maincontent');
    // }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async signupinfo (fname, lname, email, pword) {
        await this.inputfirstname.setValue(fname);
        await this.inputlastname.setValue(lname);
        await this.inputemail.setValue(email);
        await this.inputpassword.setValue(pword);
        await this.confpassword.setValue(pword);
        await this.btnSubmit.click();
       // await this.flashmssg();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        //return super.open('login');
        return super.open('customer/account/create/');
    }
}

module.exports = new LoginPage();
