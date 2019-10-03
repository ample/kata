const fn = (module.exports = {})

fn.shortestWordLength = function (str) {
    return str.split(' ').reduce((acc, curr) => (curr.length < acc ? curr.length : acc), Infinity)
}

fn.sumOfPairs = function (nums, sum) {
    const result = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == sum) {
                result.push(nums[i])
                result.push(nums[j])
                return result;
            }
        }
    }
}
