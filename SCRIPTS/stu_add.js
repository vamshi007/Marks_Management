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
    //contract.methods.getStudent().call().then(function(id){
      //  $("#percent").html(id[0]);
    //})
})
$("#but_get").click(() =>{
    web3.eth.getAccounts().then((accounts) => {
        var acc = accounts[0];
        let ID = $("#1").val();
        let Name = $("#2").val();
        let Maths = $("#3").val();
        let Physics = $("#4").val();
        let Chemistry = $("#5").val();
        let M_marks = Maths.split(" ");
        let P_marks = Physics.split(" ");
        let C_marks = Chemistry.split(" ");
        return contract.methods.fillStudent(ID,Name,parseInt(M_marks[0]),parseInt(M_marks[1]),parseInt(M_marks[2]),parseInt(P_marks[0]),parseInt(P_marks[1]),parseInt(P_marks[2]),parseInt(C_marks[0]),parseInt(C_marks[1]),parseInt(C_marks[2])).send({from:acc});
        })
    })
$("#but_home").click(() => {
    $("input:text").val("")
    window.location.href="index.html"
})