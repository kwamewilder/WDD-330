// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with
function performTasks() {
    const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
    ];

    const people = [
    "Beck, Glenn",
    "Becker, Carl",
    "Beckett, Samuel",
    "Beddoes, Mick",
    "Beecher, Henry",
    "Beethoven, Ludwig",
    "Begin, Menachem",
    "Belloc, Hilaire",
    "Bellow, Saul",
    "Benchley, Robert",
    "Benenson, Peter",
    "Ben-Gurion, David",
    "Benjamin, Walter",
    "Benn, Tony",
    "Bennington, Chester",
    "Benson, Leana",
    "Bent, Silas",
    "Bentsen, Lloyd",
    "Berger, Ric",
    "Bergman, Ingmar",
    "Berio, Luciano",
    "Berle, Milton",
    "Berlin, Irving",
    "Berne, Eric",
    "Bernhard, Sandra",
    "Berra, Yogi",
    "Berry, Halle",
    "Berry, Wendell",
    "Bethea, Erin",
    "Bevan, Aneurin",
    "Bevel, Ken",
    "Biden, Joseph",
    "Bierce, Ambrose",
    "Biko, Steve",
    "Billings, Josh",
    "Biondo, Frank",
    "Birrell, Augustine",
    "Black, Elk",
    "Blair, Robert",
    "Blair, Tony",
    "Blake, William",
    ];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    console.table(
    inventors.filter((inventor) => {
        if ((inventor.year >= 1500) & (inventor.year < 1600)) {
        return inventor;
        }
    })
    );

    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    console.log(
    inventors.map((inventor) => {
        return inventor.first + " " + inventor.last;
    })
    );

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    console.table(
    inventors.sort((a, b) => {
        return a.year - b.year;
    })
    );

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    console.log(
    inventors
        .map((inventor) => {
        return inventor.passed - inventor.year;
        })
        .reduce((pre, cur) => pre + cur) + " total years lived."
    );

    // 5. Sort the inventors by years lived
    console.table(
    inventors.sort((a, b) => {
        return a.passed - a.year - (b.passed - b.year);
    })
    );

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // goto the link above and open the console. Paste the following two lines in.  That will create a list of links in memory that you can reference through the console. Use that list to finish the problem.
    // const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));

    // Question 6 code
    //   console.log(
    //     links.filter((link) => {
    //       if (link.innerHTML.includes("de")) {
    //         return link;
    //       }
    //     })
    //   );

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    console.table(people.sort());

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = [
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "walk",
    "car",
    "van",
    "bike",
    "walk",
    "car",
    "van",
    "car",
    "truck",
    ];

    let dataShort = new Set(data);
    dataShort = [...dataShort];

    const sumItems = [0, 0, 0, 0, 0];

    for (const item of data) {
    switch (item) {
        case dataShort[0]:
        sumItems[0] += 1;
        break;
        case dataShort[1]:
        sumItems[1] += 1;
        break;
        case dataShort[2]:
        sumItems[2] += 1;
        break;
        case dataShort[3]:
        sumItems[3] += 1;
        break;
        case dataShort[4]:
        sumItems[4] += 1;
        break;
        default:
        break;
    }
    }
    console.log(sumItems);
    alert("Open the Console by pressing the F12 key.");
}

document.getElementById("team").addEventListener("click", performTasks);
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs