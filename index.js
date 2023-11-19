import moment from "moment";


//Month

// console.log('moment->',moment());// returns moment object
// console.log('moment.format->',moment().format());// returs time stamp object
// console.log('moment.format MMMM->',moment().format("MMMM"));// returns month 
// console.log('moment.format MMM->',moment().format("MMM"));// returns month in short object
// console.log('moment.format MM->',moment().format("MM"));// returns month in two digit format
// console.log('moment.format MMMMM->',moment().format("MMMMM"));// returns month and one digit 
// console.log('moment.format MMMMMM->',moment().format("MMMMMM"));// returns month and two digit 
// console.log('moment.format MMMMMM->',moment().format("MMMMMMM"));// returns month and short month 
// console.log('moment.format MMMMMMM->',moment().format("MMMMMMMM"));// returns month and  month 
// console.log('moment.format MMMMMMM->',moment().format("MMMMMMMMM"));// returns month and  month and one digit 
// console.log('moment.format MMMMMMMMMM->',moment().format("MMMMMMMMMM"));// returns month and  month and two digit 
// console.log("Mo->",moment().format("Mo"));// return month in number+th
// console.log("D->",moment().format("D")); //return date in number
// console.log("DD->",moment().format("DD")); //return day of month 
// console.log("DDD->",moment().format("DDD")); //return day of year 
// console.log("DDDD->",moment().format("DDDD")); //return day of year 

// .add() method

// console.log("add + d->",moment().add(5,"days").format("D")); //adds 5 days in current date 
// console.log("add + do->",moment().add(5,"days").format("Do")); //adds 5 days in current date + th
// console.log("add + DDD->",moment().add(5,"days").format("DDD")); //adds 5 days in current date and shows according to year
// console.log("add + DDDD->",moment().add(5,"days").format("DDDD")); //adds 5 days in current date and shows according to year in 3 digit format
// console.log("add + DDDo->",moment().add(5,"days").format("DDDo")); //adds 5 days in current date and shows according to year in 3 digit format+st
// console.log("d->",moment().format("d")); // displays day of week in number format starting from 0(Sunday)
// console.log("dd->",moment().format("dd")); // displays day of week in number format starting from 0(Sunday)
// console.log("ddd->",moment().format("ddd")); // displays day of week in number format starting from 0(Sunday)
// console.log("dddd->",moment().format("dddd")); // displays day of week in string format.
// console.log("Y->",moment().format("Y")); // displays year.
// console.log("YY->",moment().format("YY")); // displays year in two digit format.
// console.log("YYYY->",moment().format("YYYY")); // displays year in four digit format.
// console.log("y->",moment().format("y")); // displays year in four digit format.
// console.log("yyy->",moment().format("yyy")); // displays year in four digit format.

// FOR HOURS
// console.log('H->',moment().format('H'))//returns hours in two digit format from 0 to 23
// console.log('H->',moment().format('H'))//returns hours in one digit format from 0 to 23
// console.log('HH->',moment().format('HH'))//returns hours in two digit format from 0 to 23
// console.log('h->',moment().format('h'))//returns hours in one digit format from 0 to 12
// console.log('hh->',moment().format('hh'))//returns hours in two digit format from 0 to 12
// console.log('hh mm ss->',moment().format('hh mm ss'))//returns hours minutes seconds in two digit format 
// console.log('hh mm ss a->',moment().format('hh mm ss a'))//returns hours minutes seconds in two digit format + am/pm
// console.log('hh mm ss A->',moment().format('hh mm ss A'))//returns hours minutes seconds in two digit format + am/pm

// real world example of moment method
// console.log('DD-MM-YYYY->',moment().format('DD-MM-YYYY'))//returns date time year seprated with hyphen (we can use any seprator we like even spaces)
// console.log('MMMM Do,YYYY->',moment().format('MMMM Do,YYYY'))//returns month name date+th  year 
// console.log('MMMM d,YYYY->',moment().format('MMMM d,YYYY'))//returns month name date+th  year 
// console.log('YYYY-MM-DDTHH:mm:ss:S->',moment().format('YYYY-MM-DDTHH:mm:ss:SSS'))//returns year month date T hour minutes seconds miliseconds
// console.log('The Do of MMMM->',moment().format('[The] Do [of] MMMM')) // returns 'The' date+th 'of' month 

// console.log('LT->',moment().format('LT')) // returns time with am/pm in 24 hour format
// console.log('LTS->',moment().format('LTS')) // returns time with am/pm in 24 hour format + seconds
// console.log('L->',moment().format('L')) // returns month date year seprated by /
// console.log('LL->',moment().format('LL')) // returns month name date, year 
// console.log('LLL->',moment().format('LLL')) // returns month name date, year+time
// console.log('LLLL->',moment().format('LLLL')) // returns week day name, month name date, year+time
// console.log('llll->',moment().format('llll')) // returns week day name, month name date, year+time (in short)

// getter and setter

// console.log(moment().millisecond())// returns miliseconds
// console.log(moment().millisecond(966).toISOString())// returns year-month-date hour:minutes miliseconds
// console.log(moment().millisecond(9001).toISOString())// returns year-month-date hour:minutes +added miliseconds above 999
// console.log(moment().second(9).toISOString()) // returns year-month-date hour:minutes and setted seconds
// console.log(moment().minute(5)) // returns year-month-date hour: and setted minutes
// console.log(moment().hour(23)) // returns year-month-date setted hour
// console.log(moment().date(32)) // sets date if exceeded limit then increase month
// console.log(moment().day(-7)) // increases date 
// console.log(moment().weekday(-7)) // increases according to weekday

// console.log(moment().isoWeekday(7)); // set weekday 1 being sunday and 7 being Monday
// console.log(moment().isoWeekday("Monday")); // set weekday according to string value

// we have methods like year,month quarter

//.get() method

// console.log(moment().set("years",2000)); // set year to 2000
// console.log(moment().set({year:2000,month:0,date:12})); // set year to 2000
// console.log(moment().add(7,"days")) //adds 7 days (we can pass seconds hours minutes to second argument )
// console.log(moment().add(7,"days")) //adds 7 days (we can pass seconds hours minutes to second argument )
// console.log(moment().subtract(7,"days")) //subtracts 7 days (we can pass seconds hours minutes to second argument )
// console.log(moment("2022-01-05T00:00:00+00:00").subtract(7,"days"));//subtracts 7 days from the passed date

// start of method
// console.log(moment().startOf("year"))  // returns start of year
// console.log(moment().startOf("month"))  // returns start of month
// console.log(moment().startOf("day"))  // returns start of today (means 12am)

//endOf method
// all same like above

// console.log(moment().utc());  //gives utc time stamps 
// console.log(moment().utcOffset());  //gives difference in time stamps
// console.log(moment().unix());  //gives difference in time stamps
// console.log(moment().valueOf());  //gives  time stamps in miliseconds















































