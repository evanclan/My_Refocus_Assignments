let InvoiceList = [
    "Invoice 008",
    "Invoice 007",
    "Invoice 006",
    "Invoice 005"
]
let array = []
function insertToBottom(){
    if(InvoiceList.length > 0){
        array.push(InvoiceList[InvoiceList.length - 1])
        InvoiceList.pop()
        insertToBottom()
    }
    return console.log(array.reverse().join(" "))
}

    
function reverseList(){  
    return console.log(InvoiceList.reverse().join(" "))
}
InvoiceList.push("Invoice 004");
InvoiceList.push("Invoice 003");
InvoiceList.push("Invoice 002");
InvoiceList.push("Invoice 001");


console.log(insertToBottom())
console.log(reverseList())