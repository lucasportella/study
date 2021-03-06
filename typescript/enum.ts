// ENUMS HAVE SOME DOCUMENTED PROBLEMS, PREFER UNION TYPES, SEE MORE AT
// https://fettblog.eu/tidy-typescript-avoid-enums/


enum StatusCodes {
    OK = 200,
    BadRequest = 400,
    Unauthorized,
    PaymentRequired,
    Forbidden,
    NotFound,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];
console.log(ok); //saída: 200
console.log(indiceOk); //saída: 200
console.log(stringBadRequest); //saída: BadRequest

enum weekDays {
    sunday = 'sunday',
    monday = 'monday',
    tuesday = 'tuesday',
    wednesday = 'wednesday',
    thursday = 'thursday',
    friday = 'friday',
    saturday = 7,
}


console.log(weekDays["friday"]) // friday
console.log(weekDays["saturday"]) // 7

enum Months {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

console.log(Months["February"]); // 2
console.log(Months["December"]); // 12

enum Seasons {
    Fall = "Fall",
    Winter = "Winter",
    Spring = "Spring",
    Summer = "Summer"
}