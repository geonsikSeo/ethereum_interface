var web3 = new Web3();
web3.setProvider(new Web3.providers.HttpProvider('http://localhost:8545'));

const contract_address = "0x67fbF067dE55F9187b009d5edfd5936D4582d64C";
const abi =[
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "number",
				"type": "uint256"
			}
		],
		"name": "Deposit",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "item",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_homeaddress",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_itemnumber",
				"type": "uint256"
			}
		],
		"name": "actionGroupBy",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "balanceTransfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAllEndedGroupBuyItems",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "itemnumber",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "Itemname",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "presentpeopleNumber",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "limitpeopleNumber",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "Owner",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "remaining",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "limitTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "startTime",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "ended",
						"type": "bool"
					},
					{
						"internalType": "address payable[]",
						"name": "enrolledAd",
						"type": "address[]"
					},
					{
						"internalType": "string[]",
						"name": "homeaddresses",
						"type": "string[]"
					}
				],
				"internalType": "struct GroupBuy.GroupBuyItem[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_itemnumber",
				"type": "uint256"
			}
		],
		"name": "getAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getRegisteredGroupByItems",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "itemnumber",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "Itemname",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "presentpeopleNumber",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "limitpeopleNumber",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "Owner",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "remaining",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "limitTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "startTime",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "ended",
						"type": "bool"
					},
					{
						"internalType": "address payable[]",
						"name": "enrolledAd",
						"type": "address[]"
					},
					{
						"internalType": "string[]",
						"name": "homeaddresses",
						"type": "string[]"
					}
				],
				"internalType": "struct GroupBuy.GroupBuyItem[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getUser",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "Name",
						"type": "string"
					},
					{
						"internalType": "uint256[]",
						"name": "Items",
						"type": "uint256[]"
					},
					{
						"internalType": "address payable",
						"name": "ad",
						"type": "address"
					}
				],
				"internalType": "struct GroupBuy.User",
				"name": "",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "groupBuyEnd",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "refreshTime",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "item",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_peopleNumber",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_homeaddress",
				"type": "string"
			}
		],
		"name": "registerGroupBuyItem",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "registerName",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
let contract = new web3.eth.Contract(abi, contract_address);


$(document).ready(function() {
   startDapp();
})

var startDapp = async function() {
   getMyItems();
   getRegisteredGroupByItems();
   getClosedAuctionItems();
   getMyItemsToBeAuctioned();
   getItemsRegisteredAtAuction();
   getName();
}


var getBalance = async function() {
   var address = await $('#address').text();
   web3.eth.getBalance(address, function (error, balance) {
      if (!error){
         $('#balanceAmount').text(web3.utils.fromWei(balance,'ether'));
      }else
         console.log('error: ', error);
   });
   
}
//ok
var getName = async function() {
   var address = await $('#address').text();
   var name = await contract.methods.getUser().call({from:address});
   $('#name').text(name[0]);
}

//ok
var registerName = async function() {
   var address = await $('#address').text();
   var name = await document.getElementById('change_name').value;
   try{
      await contract.methods.registerName(name).send({from : address});
   }
   catch(err){
      alert(err);
   }
}
//ok
var registerGroupBuyItem = async function() {
	await document.getElementById('change_name').value;
	var address = await $('#address').text();
	var items = await document.getElementById('myitems-category').value;
	var price = await document.getElementById('startingBidPrice').value;
	var _peopleNumber = await document.getElementById('upperLimitPrice').value;
	var dueDate = await document.getElementById('dueDate').value;
	try{
	   await contract.methods.registerGroupBuyItem(items,_peopleNumber,price,dueDate,"home").send({from:address, gas:5000000, value:price*Math.pow(10,18)});
	}
	catch(err){
	   alert(err)
	}
 }
//ok
var actionGroupBy = async function() {
   var address = await $('#address').text();
   var item = await document.getElementById('auction-category').value;

   var price = await document.getElementById('bidPrice').value;
   try{
      await contract.methods.actionGroupBy(item,"home", price).send({from:address,gas:5000000, value:2*Math.pow(10,18)});
   }
   catch(err){
      alert(err);
   }
}
//ok
var getMyItems = async function() {
   var address = await $('#address').text();
   var items = new Array(); //배열선언
   //$('#myItems').text(items);
}

var getRegisteredGroupByItems = async function() {
   var address = await $('#address').text();
   // await contract.methods.refreshTime().send({from:address});
   var GroupByItemInfo = await contract.methods.getRegisteredGroupByItems().call({from:address});
   for(var i =0; i<GroupByItemInfo.length ; i++)
   {
	   if(GroupByItemInfo[i][9] == true){
		   continue;
	   }
	   var rowItem = "<tr>"
	   for(var j=0 ; j<GroupByItemInfo[i].length-6; j++){
		   var element = GroupByItemInfo[i][j];
		   rowItem += "<th>"+element+"</th>";
	   }
	   rowItem += "</tr>"
	   $('#registeredCars').append(rowItem)
   }
   
}



//ok
var getAllEndedGroupByItems = async function() {
   var address = await $('#address').text();
   var ClosedItemInfo = await contract.methods.getAllEndedGroupBuyItems().call({from:address});
   for(var i =0; i<ClosedItemInfo.length ; i++)
   {
      var rowItem = "<tr>"
      rowItem += "<th>" + rowItem[i][1] + "</th>";
      rowItem += "<th>" + rowItem[i][5] + "</th>";
      rowItem += "</tr>"
      $('#carsOnSale').append(rowItem)
   }
}

//ok
var getItemsRegisteredAtAuction = async function() {
   var address = await $('#address').text();
   var AuctionItemInfo = await contract.methods.getAllAuctionedItems().call({from:address});
   for(var i=0 ; i<AuctionItemInfo.length ; i++)
   {
      if(AuctionItemInfo[i][7] == true){
         continue;
      }
      var option_value = AuctionItemInfo[i][1];
      option_value += "/";
      option_value += AuctionItemInfo[i][5];
    option_value += AuctionItemInfo[i][10].length;

      var option_text = AuctionItemInfo[i][1];
      option_text += "/" ;
      option_text += AuctionItemInfo[i][5];
      // number of participants
      option_text += AuctionItemInfo[i][10].length;

      $('#auction-category').append('<option value="'+ option_value +'">'+ option_text +'</option>');
   }
}