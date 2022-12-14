const langData = [
    ["en", "English", ["us", "gb", "au", "nz"]],
    [
        "ar",
        "Arabic",
        [
            "bh",
            "eg",
            "jo",
            "kw",
            "lb",
            "ly",
            "mr",
            "om",
            "ps",
            "qa",
            "sa",
            "sy",
        ],
    ],
    ["az", "Azerbaijani", ["az"]],
    ["zh", "Chinese", ["cn", "sg"]],
    ["cs", "Czech", ["cz"]],
    ["nl", "Dutch", ["be", "nl", "sr"]],
    ["fi", "Finnish", ["fi"]],
    [
        "fr",
        "French",
        [
            "fr",
            "bj",
            "bf",
            "cg",
            "cd",
            "ci",
            "ga",
            "gn",
            "ml",
            "mc",
            "ne",
            "sn",
        ],
    ],
    ["de", "German", ["de", "at", "ch", "lu", "li"]],
    ["hi", "Hindi", ["in", "pk", "fj"]],
    ["hu", "Hungarian", ["hu"]],
    ["id", "Indonesian", ["id"]],
    ["ga", "Irish", ["ie"]],
    ["it", "Italian", ["it", "mt", "sm", "va"]],
    ["ja", "Japanese", ["jp"]],
    ["ko", "Korean", ["kr", "kp"]],
    ["pl", "Polish", ["pl"]],
    ["pt", "Portuguese", ["pt", "br", "ao", "cv", "gw", "mz", "st"]],
    ["ru", "Russian", ["ru", "by", "kz", "kg", "tj"]],
    [
        "es",
        "Spanish",
        [
            "es",
            "mx",
            "cl",
            "co",
            "cr",
            "cu",
            "do",
            "ec",
            "sv",
            "gq",
            "gt",
            "hn",
            "ni",
            "pa",
            "py",
            "pe",
            "uy",
            "vz",
        ],
    ],
    ["sv", "Swedish", ["se"]],
    ["tr", "Turkish", ["tr", "cy"]],
    ["uk", "Ukrainian", ["ua"]],
    ["vi", "Vietnamese", ["vn"]],
];

function findDataFromCountry(country) {
    return langData.filter(filter);

    function filter(element) {
        return element[2].includes(country);
    }
}

function findDataFromLang(lang) {
    return langData.filter(filter);

    function filter(element) {
        return element[0] === lang;
    }
}
