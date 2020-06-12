var contract;
var address;
var abi;
$(document).ready(() => {
    web3 = new Web3(web3.currentProvider);
    address = "0x3bd0794e211f45dfdbd44b8ade4bb6c8509ee561";
    abi = [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_id",
                    "type": "string"
                },
                {
                    "name": "_name",
                    "type": "string"
                },
                {
                    "name": "_Maths_1",
                    "type": "uint256"
                },
                {
                    "name": "_Maths_2",
                    "type": "uint256"
                },
                {
                    "name": "_Maths_Major",
                    "type": "uint256"
                },
                {
                    "name": "_Physics_1",
                    "type": "uint256"
                },
                {
                    "name": "_Physics_2",
                    "type": "uint256"
                },
                {
                    "name": "_Physics_Major",
                    "type": "uint256"
                },
                {
                    "name": "_Chemistry_1",
                    "type": "uint256"
                },
                {
                    "name": "_Chemistry_2",
                    "type": "uint256"
                },
                {
                    "name": "_Chemistry_Major",
                    "type": "uint256"
                }
            ],
            "name": "fillStudent",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_id",
                    "type": "string"
                }
            ],
            "name": "getStudent",
            "outputs": [
                {
                    "components": [
                        {
                            "name": "id",
                            "type": "string"
                        },
                        {
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "name": "Maths_1",
                            "type": "uint256"
                        },
                        {
                            "name": "Maths_2",
                            "type": "uint256"
                        },
                        {
                            "name": "Maths_Major",
                            "type": "uint256"
                        },
                        {
                            "name": "Physics_1",
                            "type": "uint256"
                        },
                        {
                            "name": "Physics_2",
                            "type": "uint256"
                        },
                        {
                            "name": "Physics_Major",
                            "type": "uint256"
                        },
                        {
                            "name": "Chemistry_1",
                            "type": "uint256"
                        },
                        {
                            "name": "Chemistry_2",
                            "type": "uint256"
                        },
                        {
                            "name": "Chemistry_Major",
                            "type": "uint256"
                        }
                    ],
                    "name": "",
                    "type": "tuple"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]
    contract = new web3.eth.Contract(abi,address);
    ethereum.enable();
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    var queries = queryString.split("&");
    user = queries[0];
    web3.eth.getAccounts().then((accounts) => {
        var acc = accounts[0];
        return contract.methods.getStudent(user).call({from:acc}).then((x) => {
            //$("#percent").html(x[0])
            $("#stu_id").html(x.id);
            $("#stu_name").html(x.name);
            $("#m_2").html(x.Maths_1);
            $("#m_3").html(x.Maths_2);
            $("#m_4").html(x.Maths_Major);
            let Maths = parseInt(x.Maths_1)+parseInt(x.Maths_2)+parseInt(x.Maths_Major);
            $("#m_5").html(Maths);
            $("#p_2").html(x.Physics_1);
            $("#p_3").html(x.Physics_2);
            $("#p_4").html(x.Physics_Major);
            let Physics = parseInt(x.Physics_1)+parseInt(x.Physics_2)+parseInt(x.Physics_Major);
            $("#p_5").html(Physics);
            $("#c_2").html(x.Chemistry_1);
            $("#c_3").html(x.Chemistry_2);
            $("#c_4").html(x.Chemistry_Major);
            let Chemistry = parseInt(x.Chemistry_1)+parseInt(x.Chemistry_2)+parseInt(x.Chemistry_Major);
            $("#c_5").html(Chemistry);
            let total = Maths+Physics+Chemistry;
            $("#m_t").html(total);
            var per = ((Maths+Physics+Chemistry)*1.0/300)*100;
            per = per.toFixed(2);
            console.log(per);
            $("#p_t").html(per+"%");
            console.log(x.name,user);
        });
    })
    //contract.methods.getStudent().call().then(function(id){
      //  $("#percent").html(id[0]);
    //})
})
$("#but_home").click(() =>{
    window.location.href="index.html";
})
/*$("#but_get").click(() => {
    web3.eth.getAccounts().then(function(accounts){
        acc = accounts[0];
        //console.log(acc)
        return contract.methods.set("siddhi").send({from:"0xf578F4218ff70197723133dc779ACb0b994B30B2"});
    }).then(function(val){
        console.log(val);
    }).catch(function(val){
        console.log(val);
    })
    console.log(acc);
})*/