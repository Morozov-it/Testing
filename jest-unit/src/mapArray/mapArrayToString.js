const mapArrayToString = (arr) => {
    return arr
        .filter((item) => Number.isInteger(item))
        .map((number) => String(number))
}

module.exports = mapArrayToString