export const sum = (total, current) => total + current;
export const score = (collection, mapping) => collection
    .map(item => item.toLowerCase())
    .map(item => Number(mapping[item]))
    .reduce(sum);

export default function prioritizeVenues({
                                             drinkScores,
                                             dontEatScores,
                                             venues
                                         }) {
    return venues.sort((aVenue, bVenue) => {
        const aFoodScore = score(aVenue.food, dontEatScores);
        const bFoodScore = score(bVenue.food, dontEatScores);
        const aDrinkScore = score(aVenue.drinks, drinkScores);
        const bDrinkScore = score(bVenue.drinks, drinkScores);

        return aDrinkScore - bDrinkScore + bFoodScore - aFoodScore;
    });
}