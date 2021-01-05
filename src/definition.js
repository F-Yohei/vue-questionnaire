export const years = [];
export const months = [];
export const days = [];

function createYearsOption() {
    for (let y = 2020; y > 1929; y--) {
        if (y > 2018) {
            years.push({ year: y, label: `${y}` });
        } else if (y > 1988) {
            years.push({ year: y, label: `${y}` });
        } else if (y > 1925) {
            years.push({ year: y, label: `${y}` });
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