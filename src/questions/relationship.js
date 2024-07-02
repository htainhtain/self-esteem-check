export const relationshipQuestions = [
    {
        id: 1,
        description: 'Communication and openess'
    },
    {
        id: 2,
        description: 'Resolving conflicts and arguments'
    },
    {
        id: 3,
        description: 'Degree of affection and caring'
    },
    {
        id: 4,
        description: 'Intimacy and closeness'
    },
    {
        id: 5,
        description: 'Satisfaction with your role in the relationship'
    },
    {
        id: 6,
        description: 'Satisfaction with the other\'s person role'
    },
    {
        id: 7,
        description: 'Overall satisfaction with your relationship'
    },
]

export const getRelationshipSatisfactionLevel = (score) => {
    let result = "minimal or no anxiety"

    if (score >= 0 && score <= 10) {
        result = "extremely dissatisfied";
    } else if (score >= 11 && score <= 20) {
        result = "very dissatisfied";
    } else if (score >= 21 && score <= 25) {
        result = "moderate dissatisfied";
    } else if (score >= 26 && score <= 30) {
        result = "somewhat dissatisfied";
    } else if (score >= 31 && score <= 35) {
        result = "somewhat satisfied";
    } else if (score >= 36 && score <= 40){
        result = "moderately satisfied";
    } else if (score >= 41 && score <= 42) {
        result = "very satisfied";
    }

    return result;
}