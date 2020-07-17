class Solution {
    solve(nums, op, val){
        let list = []
        for ( let i = 0 ; i < nums.length ; i++ ) {
            let result = null
            if ( op == '+' ) {
                result = nums[i] + val
            } else if ( op == '-' ) {
                result = nums[i] - val
            } else if ( op == '*' ) {
                result = nums[i] * val
            } else if ( op == '/' ) {
                result = Math.floor ( nums[i] / val )
            }
            list.push(result)
        }
        return(list)
    }
}

let test = new Solution()
console.log(test.solve([3,-4,1], "*", 2))