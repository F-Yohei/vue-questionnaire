const years = [];
const months = [];
const days = [];

function createYearsOption() {
    for (let y = 2020; y > 1929; y--) {
        if (y > 2018) {
            years.push({ year: y, label: `${y} (令和${y - 2018}年)` });
        } else if (y > 1988) {
            years.push({ year: y, label: `${y} (平成${y - 1988}年)` });
        } else if (y > 1925) {
            years.push({ year: y, label: `${y} (昭和${y - 1925}年)` });
        }
    }
}

function createMounthsOption() {
    for (let i = 1; i <= 12; i++) {
        months.push(i);
    }
}

function createDaysOption() {
    for (let i = 1; i <= 31; i++) {
        days.push(i);
    }
}

createYearsOption();
createMounthsOption();
createDaysOption();

export default { years, months, days }