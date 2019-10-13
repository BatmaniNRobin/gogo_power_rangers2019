const {Client} = require("pg");
const client = new Client({//postgres connection data
user: 'postgres',
password: 'Chefsearchdb',
database: 'capitalone'});

var flag = true;

const searchQuery = "SELECT * FROM accounts WHERE ID = $1"; //base query for searching db for if account is inside already
const insertQuery = "INSERT INTO accounts VALUES($1, $2, $3, $4, $5)"; //base query for inserting new accounts
const updateBalQuery = "UPDATE accounts SET balance = $1 WHERE id = $2";
const updateBillQuery = "UPDATE accounts SET bills = $1 WHERE id = $2";

const accountUrl1 = 'http://api.reimaginebanking.com/customers/';
// 5da1ec58322fa016762f31a6
const accountUrl2 = '/accounts?key=8098dd967b0a31b756d628198b7e3119';

function sendInsertRequest() {

}

function checkBills (customer) {
    return new Promise ((resolve, reject) => {
        let accountUrl = accountUrl1 + customer._id + accountUrl2;
        request.get(accountUrl)
        .end((err, res) => {
            if(res != null) {
                console.log(res.body);
                resolve(res.body);
            }
            else{
                console.error("No response detected: " + err);
            }
        });
    })
    .then((customerObj) => {
        let balQuery = customerObj.balance;
        client.query(updateBalQuery, balQuery, (err, res) => {
            if (err) {
                console.error("Some error occurred with updating the balance");
            }
            else {
                console.log("Balance updated correctly to " +balQuery);
            }
        })
        .finally(() => {
            flag = false;
        });
    })
}

function searchDB(res) {
    return new Promise((resolve, reject) => {
        let obj = Array.from(res);
        for (let i = 0; i < obj.length; ++i){   
            // console.log(obj[i]);
            // let customer = obj[i];
            console.log("Customer is " + obj[i]._id);
            let searchTerm = obj[i]._id;
            client.query(searchQuery, searchTerm)
                .then(res => {
                    if (!res.rows[0]) {//if we get no response
                        console.log("No respone found for search query " +searchTerm);//do nothing
                    }
                    else {
                        console.log("Checking customer data");
                        resolve(checkBills(obj[i]));//check the bills
                    }
                })
        }
    })
}

var request = require('superagent');
function sendRequest() {
    return new Promise ((resolve, reject) => {
        request.get('http://api.reimaginebanking.com/customers?key=8098dd967b0a31b756d628198b7e3119')
            .end((err, res) => {
                if(res != null) {
                    resolve(searchDB(res.body));
                    // resolve(res.body);
                }
                else{
                    console.error("No response detected: " + err);
                }
        });

    })
    .then((output) => {
        console.log("Output is " + output);
        // return new Promise ((resolve, reject) => {
        //     // resolve()
        // })
        // console.log(output);
        // setTimeout(6000);
    })
    .finally(() => {
        // while(flag) {

        // }
        // sendRequest();
    });
}

sendRequest();