# webdriverio-assignment


To get start Node.js and it's dependencies must be installed 

You can install the lates version of node for your device here: https://nodejs.org/en/
Create your project folder and run 'npm install'
This installs the dependencies and creates the node modules folder.

Copy this repo to your local git repository 

Executing tests

npm run *script-name-here* - this runs the tests specified for this script in the package.json file

eg. to run the signup test , the command is:
npm run signup


The recommended order to run the tests is:

signup

addproduct

purchase

confirmationtest

Note: 
signup and confirmationtest both account for negative paths

signup and addproduct are both data driven test

tests have been configured to run on the Chrome and Safari browsers
