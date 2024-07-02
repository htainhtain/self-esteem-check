const anxiousFeelings = [
    {
        id: 1,
        description: 'Anxiety, nervousness, worry, or fear?'
    },
    {
        id: 2,
        description: 'Feeling that things around you are strange or unreal?'
    },
    {
        id: 3,
        description: 'Feeling detached from all or part of your body?'
    },
    {
        id: 4,
        description: 'Sudden unexpected panic spells?'
    },
    {
        id: 5,
        description: 'Apprehension or a sense of impending doom?'
    },
    {
        id: 6,
        description: 'Feeling tense, stressed, "uptight" or on edge?'
    },
]

const anxiousThoughts = [
    {
        id: 7,
        description: 'Difficulty concentrating'
    },
    {
        id: 8,
        description: 'Racing thoughts'
    },
    {
        id: 9,
        description: 'Frightening fantasies or daydreams'
    },
    {
        id: 10,
        description: 'Feeling that you\'re on the verge of losing control'
    },
    {
        id: 11,
        description: 'Fears of cracking up or going crazy'
    },
    {
        id: 12,
        description: 'Fears of faiting or passing out'
    },
    {
        id: 13,
        description: 'Fears of physical illness or heart attacks or dying'
    },
    {
        id: 14,
        description: 'Concerns about looking foolish or inadequate'
    },
    {
        id: 15,
        description: 'Fear of being alone, isolated, or abandoned'
    },
    {
        id: 16,
        description: 'Fears of criticsm or disapproval'
    },
    {
        id: 17,
        description: 'Fears that something terrible is about to happen'
    },
]

const physicalSymptoms = [
    {
        id: 18,
        description: 'Skipping, racing, or pounding of the heart (palpitations)'
    },
    {
        id: 19,
        description: 'Pain, pressure, or tightness in the chest'
    },
    {
        id: 20,
        description: 'Tingling or numbness in the toes or fingers'
    },
    {
        id: 21,
        description: 'Butterflies or discomfort in the stomach'
    },
    {
        id: 22,
        description: 'Constipation or diarrhea'
    },
    {
        id: 23,
        description: 'Restlessness or jumpiness'
    },
    {
        id: 24,
        description: 'Tight, tense muscles'
    },
    {
        id: 25,
        description: 'Sweating not brought on by heat'
    },
    {
        id: 26,
        description: 'A lump in the throat'
    },
    {
        id: 27,
        description: 'Trembling or shaking'
    },
    {
        id: 28,
        description: 'Rubbery or jelly leg'
    },
    {
        id: 29,
        description: 'Feeling dizzy, lightheaded, or off balance'
    },
    {
        id: 30,
        description: 'Choking or smothering sensations or difficulty breathing'
    },
    {
        id: 31,
        description: 'Headaches or pains in the neck or back'
    },
    {
        id: 32,
        description: 'Hot flashes or cold chills'
    },
    {
        id: 33,
        description: 'Feeling tired, weak, or easily exhaused'
    },
]

export const anxietyQuestions = [
    {
        category: {
            id: 1,
            title: 'Anxious Feelings',
        },
        questions: anxiousFeelings
    },
    {
        category: {
            id: 2,
            title: 'Anxious Thoughts',
        },
        questions: anxiousThoughts
    },
    {
        category: {
            id: 3,
            title: 'Physical Symptoms',
        },
        questions: physicalSymptoms
    },
]

export const getDegreeOfAnxiety = (score) => {
    let result = "minimal or no anxiety"

    if (score >= 5 && score <= 10) {
        result = "borderline anxiety";
    } else if (score >= 11 && score <= 20) {
        result = "mild anxiety";
    } else if (score >= 21 && score <= 30) {
        result = "moderate anxiety";
    } else if (score >= 31 && score <= 50) {
        result = "severe anxiety";
    } else if (score >= 51 && score <= 99){
        result = "extreme anxiety or panic";
    }

    return result;
}