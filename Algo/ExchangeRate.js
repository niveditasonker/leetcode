class ExchangeRate{
    constructor() {
        this.curencies = {};
        this.errMsg = 'Invalid option';
    }
    
    addCurrencies(cur1, cur2, rate) {
        if (!this.curencies[cur1]) this.curencies[cur1] = {};

        if (!this.curencies[cur2]) this.curencies[cur2] = {};

        this.curencies[cur1][cur2] = rate;

        this.curencies[cur2][cur1] = 1/rate;
    }
    
    getExchangeRate(cur1, cur2) {
        const result = this.getExchangeRateUtil(cur1, cur2, new Set());
        return (result.err) ? this.errMsg : result.val.toFixed(2);
    }
    
    getExchangeRateUtil(cur1, cur2, visited) {
        if (!this.curencies[cur1] || !this.curencies[cur2]) return {err: true};

        if (!this.curencies[cur1][cur2]) {
            visited.add(cur1);
            for (let key of Object.keys(this.curencies[cur1])) {
                if (visited.has(key)) continue;

                const result = this.getExchangeRateUtil(key, cur2, visited);

                if (result.err) return result;

                return {val: this.curencies[cur1][key] * result.val};
            }
        } else {
            return {val: this.curencies[cur1][cur2]};
        }
    }
}

const exchangeRate = new ExchangeRate();
exchangeRate.addCurrencies('USD', 'JPY', 110);
exchangeRate.addCurrencies('USD', 'AUD', 1.45);
exchangeRate.addCurrencies('JPY', 'GBP', 0.0070);
console.log('GBP-EURO: ', exchangeRate.getExchangeRate('GBP', 'EURO')); // 'Invalid option'
console.log('GBP-AUD: ', exchangeRate.getExchangeRate('GBP', 'AUD')); // 1.88
console.log('AUD-AUD: ', exchangeRate.getExchangeRate('AUD', 'AUD')); // 1.00