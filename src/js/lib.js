export function bonus(sales) {
    const percent = 0.05;
    const limit =10000;
    let total = 0;
    for (const sale of sales) {
        if (sale > limit) {
            total += sale;
        }
    }
    return total * percent;


}
