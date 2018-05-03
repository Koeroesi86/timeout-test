import assert from 'assert'
import prioritizeVenues, {score} from './prioritizeVenues'

describe('prioritizeVenues', () => {
    const drinkScores = {
        "cider": 4,
        "rum": 5,
        "soft drinks": 5,
        "tequila": 1,
        "beer": 4,
        "coffee": 1,
        "vokda": 2,
        "gin": 2,
        "whisky": 2,
        "tea": 1
    };

    const dontEatScores = {
        "fish": 2,
        "eggs": 1,
        "pasta": 2,
        "bread": 1,
        "meat": 1,
        "mexican": 1,
        "chinese": 1
    };

    const venues = [
        {
            "name": "El Cantina",
            "food": ["Mexican"],
            "drinks": ["Soft drinks", "Tequila", "Beer"]
        },
        {
            "name": "Twin Dynasty",
            "food": ["Chinese"],
            "drinks": ["Soft Drinks", "Rum", "Beer", "Whisky", "Cider"]
        },
        {
            "name": "Spice of life",
            "food": ["Eggs", "Meat", "Fish", "Pasta", "Dairy"],
            "drinks": ["Vokda", "Gin", "whisky", "Rum", "Cider", "Beer", "Soft drinks"]
        },
        {
            "name": "The Cambridge",
            "food": ["Eggs", "Meat", "Fish", "Pasta", "Dairy"],
            "drinks": ["Vokda", "Gin", "Cider", "Beer", "Soft drinks"]
        },
        {
            "name": "Wagamama",
            "food": ["Japanese"],
            "drinks": ["Beer", "Cider", "Soft Drinks", "Sake"]
        },
        {
            "name": "Sultan Sofrasi",
            "food": ["Meat", "Bread", "Fish"],
            "drinks": ["Beer", "Cider", "Soft Drinks"]
        },
        {
            "name": "Spirit House",
            "food": ["Nuts", "Cheese", "Fruit"],
            "drinks": ["Vodka", "Gin", "Rum", "Tequila"]
        },
        {
            "name": "Tally Joe",
            "food": ["Fish", "Meat", "Salad", "Deserts"],
            "drinks": ["Beer", "Cider", "Soft Drinks", "Sake"]
        },
        {
            "name": "Fabrique",
            "food": ["Bread", "Cheese", "Deli"],
            "drinks": ["Soft Drinks", "Tea", "Coffee"]
        }
    ];

    it('should return consistent data', () => {
        const params = {
            drinkScores,
            dontEatScores,
            venues
        };
        const priority = prioritizeVenues(params);

        assert.equal(priority.length, venues.length);
    });

    it('should take highest scores to the top', () => {
        const params = {
            drinkScores,
            dontEatScores,
            venues
        };
        const priority = prioritizeVenues(params);
        const first = priority.shift();

        assert(score(first.food, dontEatScores) <= 1);
        assert(score(first.drinks, drinkScores) > 1);
    });
});