export function bonus(sales) {
    const percent = 0.05;
    let total = 0;
    for (const sale of sales) {
        if (sale > 10000) {
            total += sale;
        }
    }
    return total * percent;


}
