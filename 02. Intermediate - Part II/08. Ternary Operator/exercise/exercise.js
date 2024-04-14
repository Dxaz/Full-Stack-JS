// If person has money they can "buy products"
// If the person don't have any money "They should bring money"

let money = 0;

function checkMoney(money) {
    return money > 0 ? `buy products` : `They should bring money`
}

const resp = checkMoney(money);
console.log(resp);