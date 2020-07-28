const isValid = function(s) {
    const chars = {'(': ')', '{': '}', '[': ']'};
    const arr = [];
    let top;
    for (let i = 0; i < s.length; i++) {
        let value;
        if (chars[s[i]]) {
            value = chars[s[i]];
            arr.push(value)
        } else {
            top = arr.pop();
            if (top !== s[i]) {
                return false;
            }
        }
    }

    return !arr.length;
}

console.log(isValid('([)]'));