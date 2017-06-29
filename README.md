# _Roman Numeral Calculator_

#### _This webpage converts user input into a roman numeral._

#### By _Nick Powell & Jennifer Kinsey_

## Description

_Webpage is a good practice example of separating business logic and UI logic. It performs the roman numeral calculation separately than the UI if/else which displays to the user._

(Keeping this since it was really fun to think through this problem.)

## Setup/Installation Requirements

```
git clone  https://github.com/jennifer-kinsey/roman-numerals
cd roman-numerals
```
* open with text editor of choice
* open index.html in browser

## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_Please contact Nick Powell at nickpowells@gmail.com if you have any questions or need any support._

## Technologies Used

_Webpage is built with HTML, CSS (specifically using a default bootstrap.css file/framework with minimal styling), JavaScript, and the jQuery3.2.0 files/framework. Jennifer Kinsey and Nick Powell and Epicodus are not liable for anything._

### License

_Copyright (c) 2017 Jennifer Kinsey and Nick Powell. This software is licensed under the MIT license._


## _BDE_

* _Behavior Driven Design_


* _If you input a number greater than 3,999, it will alert user to input valid number_
* _Input: 98306989030_
* _Output: Alert, enter in a good number, jerk!_
* _If a number is in the thousands, add the appropriate number of thousands (Ms) and subtract that off so the remainder is M + (number - M)_
* _Input: 1,234_
* _Output: M + 234_
* _If a number is in the hundreds is greater than or equal to 5, add D and subtract that off so the remainder is D+ (number -500)_
* _Input: 722_
* _Output: D + 222_
* _If a number is in the hundreds, add the appropriate number of hundreds (C) and subtract that off so the remainder is C+ (number - C)_
* _Input: 234_
* _Output: CC + 34_
* _If a number is in the tens, greater than or equal to 5, add L and subtract that off so the remainder is L+ (number -50)_
* _Input: 67_
* _Output: L + 17_
* _If a number is in the tens, add the appropriate number of tens (X) and subtract that off so the remainder is X+ (number -X)_
* _Input: 34_
* _Output: XXX + 4_
* _If a number is in the ones, greater than or equal to 5, add V and subtract that off so the ones less than 5 remain_
* _Input: 7_
* _Output: V + 2_
* _If a number is in the ones, add the appropriate number of ones (I)_
* _Input: 4_
* _Output: IIII_
* _If there are 4 of the same character use subtraction convention of using the next highest symbol and preceding it with the appropriate symbol…._
* _Input: 4, 9_
* _Output: IV; IX_
