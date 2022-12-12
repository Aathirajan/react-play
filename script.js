

class bank {
    constructor(balance) {
        this.balance = balance
    }
    deposit(amount) {
        this.balance += amount
        console.log('Amount Deposited Successfully!')
        console.log({ balance: `₹${this.balance}` })

    }
    withdrawl(amount) {

        if (this.balance > amount) {
            this.balance -= amount
            console.log('Amount withdrawn Successfully!')
            console.log({ balance: `₹${this.balance}` })
        }
        else {
            alert('Insufficient Funds!')
        }
    }
}
let aathi = new bank(5000)
// aathi.withdrawl(3000)

// aathi.deposit(3000)
let greet = document.querySelector('.greet')
let balance = document.querySelector('.balance')
let depositinput = document.querySelector('.depositinput')
let withdrawlinput = document.querySelector('.withdrawlinput')
let depositbtn = document.querySelector('.depositbtn')
let withdrawlbtn = document.querySelector('.withdrawlbtn')

withdrawlbtn.onclick = () => {
    aathi.withdrawl(Number(withdrawlinput.value))
    withdrawlinput.value = ""
    balance.innerText = `Your Account Balance ₹${aathi.balance}  `
}
depositbtn.onclick = () => {
    aathi.deposit(Number(depositinput.value))
    depositinput.value = ""
    balance.innerText = `Your Account Balance ₹${aathi.balance} 
                              `}
// console.log(aathi.balance)
