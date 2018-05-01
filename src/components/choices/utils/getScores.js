export default function getScores(users) {
    let drinkScores = {};
    let dontEatScores = {};

    users.map(user => {
        if (user.drinks) {
            user.drinks.map(drink => {
                const d = drink.toLowerCase();
                if (drinkScores[d]) {
                    drinkScores[d]++;
                } else {
                    drinkScores[d] = 1;
                }

                return drink;
            })
        }

        if (user.wont_eat) {
            user.wont_eat.map(notEat => {
                const n = notEat.toLowerCase();
                if (dontEatScores[n]) {
                    dontEatScores[n]++;
                } else {
                    dontEatScores[n] = 1
                }

                return notEat;
            })
        }

        return user;
    });

    return {
        drinkScores,
        dontEatScores
    }
}