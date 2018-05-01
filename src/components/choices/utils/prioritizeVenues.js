export default function prioritizeVenues({
                                             drinkScores,
                                             dontEatScores,
                                             venues
                                         }) {
    // TODO: order is still awful
    return venues.sort((a, b) => {
        const aScore = a.food.filter(food => !dontEatScores[food.toLowerCase()]).length;
        const bScore = b.food.filter(food => !dontEatScores[food.toLowerCase()]).length;

        return bScore - aScore;
    }).sort((a, b) => {
        const aScore = a.drinks.filter(drink => !drinkScores[drink.toLowerCase()]).length;
        const bScore = b.drinks.filter(drink => !drinkScores[drink.toLowerCase()]).length;

        return aScore - bScore;
    });

}