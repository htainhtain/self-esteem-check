export const questions = [
    {
        id: 1,
        title: 'Sadness',
        description: 'Do you feel sad or down in the dumps?'
    },
    {
        id: 2,
        title: 'Discouragement',
        description: 'Does the future look hopeless?'
    },
    {
        id: 3,
        title: 'Low self-esteem',
        description: 'Do you feel worthless?'
    },
    {
        id: 4,
        title: 'Infeiority',
        description: 'Do you feel inadequate or inferior to others?'
    },
    {
        id: 5,
        title: 'Guit',
        description: 'Do you get self-critical and blame yourself?'
    },
    {
        id: 6,
        title: 'Indecisiveness',
        description: 'Is it hard to make decisions?'
    },
    {
        id: 7,
        title: 'Irritability',
        description: 'Do you frequently feel angry or resentful?'
    },
    {
        id: 8,
        title: 'Lost of interest in life',
        description: 'Have you lost interest in your career, hobbies, family, or friends?'
    },
    {
        id: 9,
        title: 'Loss of motivation',
        description: 'Do you have to push yourself to do hard things?'
    },
    {
        id: 10,
        title: 'Poor self-image',
        description: 'Do you feel old or unattractive?'
    },
    {
        id: 11,
        title: 'Apetite changes',
        description: 'Have you lost your appetite? do you over eat or binge compulsively?'
    },
    {
        id: 12,
        title: 'Sleep changes',
        description: "Is it hard to get  a good night's sleep? Are you excessively tired and sleeping too much?"
    },
    {
        id: 13,
        title: 'Lots of sex drive',
        description: "Have you lost your interst in sex?"
    },
    {
        id: 14,
        title: 'Concerns about health',
        description: "Do you worry excessively about your health?"
    },
    {
        id: 15,
        title: 'Suicidal Impulses',
        description: "Do you have thoughts that life is not worth living or thiink you'd off dead?"
    },
]

export const getDegreeOfDepression = (score) => {
    let result = "minimal or no depression"

    if (score >= 5 && score <= 10) {
        result = "normal but unhappy";
    } else if (score >= 11 && score <= 20) {
        result = "borderline to mild depression";
    } else if (score >= 21 && score <= 30) {
        result = "moderate depression";
    } else if (score >= 31 && score <= 45) {
        result = "severe depression";
    }

    return result;
}