Behavior Driven Design


If you input a number greater than 3,999, it will alert user to input valid number
Input: 98306989030
Output: Alert, enter in a good number, jerk!
If a number is in the thousands, add the appropriate number of thousands (Ms) and subtract that off so the remainder is M + (number - M)
Input: 1,234
Output: M + 234
If a number is in the hundreds is greater than or equal to 5, add D and subtract that off so the remainder is D+ (number -500)
Input: 722
Output: D + 222
If a number is in the hundreds, add the appropriate number of hundreds (C) and subtract that off so the remainder is C+ (number - C)
Input: 234
Output: CC + 34
If a number is in the tens, greater than or equal to 5, add L and subtract that off so the remainder is L+ (number -50)
Input: 67
Output: L + 17
If a number is in the tens, add the appropriate number of tens (X) and subtract that off so the remainder is X+ (number -X)
Input: 34
Output: XXX + 4
If a number is in the ones, greater than or equal to 5, add V and subtract that off so the ones less than 5 remain
Input: 7
Output: V + 2
If a number is in the ones, add the appropriate number of ones (I)
Input: 4
Output: IIII
If there are 4 of the same character use subtraction convention of using the next highest symbol and preceding it with the appropriate symbol….
Input: 4, 9
Output: IV; IX
