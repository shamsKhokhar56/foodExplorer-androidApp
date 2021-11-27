const homeBasedWorkout = [
    {
        workoutId: 0,
        name: 'monday',
        image: require('../assets/monday.jpg'),
        category: [
            {
                id: '1',
                catName: 'highKnees',
                circuit: {
                    1: '1: 35 Reps',
                    2: '2: 40 Reps',
                    3: '3: 40 Reps'
                },
                image1: require('../assets/highKnees.jpg'),
                howToDo: 'highKneesHowToDo',
            },
            {
                id: '2',
                catName: 'jumpingJacks',
                circuit: {
                    1: '1: 30 Reps',
                    2: '2: 35 Reps',
                    3: '3: 40 Reps'
                },
                image1: require('../assets/jumpingJacks.jpg'),
                howToDo: 'jumpingJacksHowToDo',

            },
            {
                id: '3',
                catName: 'squats',
                circuit: {
                    1: '1: 20 Reps',
                    2: '2: 20 Reps',
                    3: '3: 16 Reps'
                },
                image1: require('../assets/squats.jpg'),
                howToDo: 'squatsHowToDo',

            },
            {
                id: '4',
                catName: 'sideLegRaise',
                circuit: {
                    1: '1: 16 Reps (Each Leg)',
                    2: '2: 20 Reps (Each Leg)',
                    3: '3: 20 Reps (Each Leg)'
                },
                image1: require('../assets/sideLegRaise.jpg'),
                howToDo: 'sideLegRaiseHowToDo',

            },
            {
                id: '5',
                catName: 'pushUps',
                circuit: {
                    1: '1: 16 Reps',
                    2: '2: 14 Reps',
                    3: '3: 12 Reps'
                },
                image1: require('../assets/pushUps.jpg'),
                howToDo: 'pushUpsHowToDo',

            },
            {
                id: '6',
                catName: 'sidePlank',
                circuit: {
                    1: '1: Hold the postition for 1 min',
                    2: '2: Hold the postition for 1 min',
                    3: '3: Hold the postition for 1 min'
                },
                image1: require('../assets/sidePlank.jpg'),
                howToDo: 'sidePlankHowToDo',

            },
        ]
    },
    {
        workoutId: 1,
        name: 'tuesday',
        image: require('../assets/tuesday.jpg'),
        category: [
            {
                id: '1',
                catName: 'mountainClimbers',
                circuit: {
                    1: '1: 40 Reps',
                    2: '2: 35 Reps',
                    3: '3: 30 Reps'
                },
                image1: require('../assets/mountainClimbers.jpg'),
                howToDo: 'mountainClimbersHowToDo',

            },
            {
                id: '2',
                catName: 'squatJumps',
                circuit: {
                    1: '1: 16 Reps',
                    2: '2: 16 Reps',
                    3: '3: 16 Reps'
                },
                image1: require('../assets/jumpSquat.jpg'),
                howToDo: 'squatJumpsHowToDo',

            },
            {
                id: '3',
                catName: 'lunges',
                circuit: {
                    1: '1: 12 Reps (Each leg)',
                    2: '2: 14 Reps (Each leg)',
                    3: '3: 12 Reps (Each leg)'
                },
                image1: require('../assets/lunges.jpg'),
                howToDo: 'lungesHowToDo',

            },
            {
                id: '4',
                catName: 'plank',
                circuit: {
                    1: 'Hold the position for 35 sec',
                    2: 'Hold the position for 45 sec',
                    3: 'Hold the position for 60 sec'
                },
                image1: require('../assets/plank.jpg'),
                howToDo: 'plankHowToDo',

            },
            {
                id: '5',
                catName: 'toeToucherCrunches',
                circuit: {
                    1: '1: 20 Reps',
                    2: '2: 18 Reps',
                    3: '3: 16 Reps'
                },
                image1: require('../assets/toeToucherCrunches.jpg'),
                howToDo: 'toeToucherCrunchesHowToDo',

            },
            {
                id: '6',
                catName: 'crossOver',
                circuit: {
                    1: '1: 18 Reps (Each Side)',
                    2: '2: 15 Reps (Each Side)',
                    3: '3: 14 Reps (Each Side)'
                },
                image1: require('../assets/crossOver.jpeg'),
                howToDo: 'crossOverHowToDo',

            },
            {
                id: '7',
                catName: 'legRaise',
                circuit: {
                    1: '1: 16 Reps (Each Leg)',
                    2: '2: 16 Reps (Each Leg)',
                    3: '3: 16 Reps (Each Leg)'
                },
                image1: require('../assets/sideLegRaise.jpg'),
                howToDo: 'legRaiseHowToDo',

            },
        ]
    },
    {
        workoutId: 2,
        name: 'wednesday',
        image: require('../assets/wednesday.jpg'),
        category: [
            {
                id: '1',
                catName: 'jumpingJacks',
                circuit: {
                    1: '1: 30 Reps',
                    2: '2: 35 Reps',
                    3: '3: 40 Reps'
                },
                image1: require('../assets/jumpingJacks.jpg'),
                howToDo: 'jumpingJacksHowToDo',

            },
            {
                id: '2',
                catName: 'crunches',
                circuit: {
                    1: '1: 20 Reps',
                    2: '2: 16 Reps',
                    3: '3: 16 Reps'
                },
                image1: require('../assets/crunches.jpg'),
                howToDo: 'crunchesHowToDo',

            },
            {
                id: '3',
                catName: 'sidePlank',
                circuit: {
                    1: 'Hold the position for 45 sec',
                    2: 'Hold the position for 60 sec',
                    3: 'Hold the position for 60 sec'
                },
                image1: require('../assets/sidePlank.jpg'),
                howToDo: 'sidePlankHowToDo',

            },
            {
                id: '4',
                catName: 'lyingLegRaise',
                circuit: {
                    1: '1: 20 Reps',
                    2: '2: 20 Reps',
                    3: '3: 20 Reps'
                },
                image1: require('../assets/lyingLegRaise.jpg'),
                howToDo: 'lyingLegRaiseHowToDo',

            },
            {
                id: '5',
                catName: 'highKnees',
                circuit: {
                    1: '1: 30 Reps',
                    2: '2: 35 Reps',
                    3: '3: 30 Reps'
                },
                image1: require('../assets/highKnees.jpg'),
                howToDo: 'highKneesHowToDo',

            },
            {
                id: '6',
                catName: 'buttUps',
                circuit: {
                    1: '1: 20 Reps',
                    2: '2: 16 Reps',
                    3: '3: 20 Reps'
                },
                image1: require('../assets/buttUps.jpg'),
                howToDo: 'buttUpsHowToDo',

            },
        ]
    },
    {
        workoutId: 3,
        name: 'thursday',
        image: require('../assets/thursday.jpg'),
        category: [
            {
                id: '1',
                catName: 'squats',
                circuit: {
                    1: '1: 20 Reps',
                    2: '2: 18 Reps',
                    3: '3: 16 Reps'
                },
                image1: require('../assets/squats.jpg'),
                howToDo: 'squatsHowToDo',

            },
            {
                id: '2',
                catName: 'pushUps',
                circuit: {
                    1: '1: 16 Reps',
                    2: '2: 16 Reps',
                    3: '3: 16 Reps'
                },
                image1: require('../assets/pushUps.jpg'),
                howToDo: 'pushUpsHowToDo',

            },
            {
                id: '3',
                catName: 'sideLegRaise',
                circuit: {
                    1: '1: 20 Reps (In & Out)' ,
                    2: '2: 18 Reps (In & Out)',
                    3: '3: 16 Reps (In & Out)'
                },
                image1: require('../assets/sideLegRaise.jpg'),
                howToDo: 'sideLegRaiseHowToDo',

            },
            {
                id: '4',
                catName: 'bottomUpStanding',
                circuit: {
                    1: '1: 18 Reps',
                    2: '2: 16 Reps',
                    3: '3: 16 Reps'
                },
                image1: require('../assets/lyingLegRaise.jpg'),
                howToDo: 'bottomUpStandingHowToDo',

            },
            {
                id: '5',
                catName: 'buttUps',
                circuit: {
                    1: '1: 20 Reps',
                    2: '2: 18 Reps',
                    3: '3: 16 Reps'
                },
                image1: require('../assets/buttUps.jpg'),
                howToDo: 'buttUpsHowToDo',

            },
            {
                id: '6',
                catName: 'overHeadStretch',
                circuit: {
                    1: '1: 20 Reps (Up & Down)',
                    2: '2: 20 Reps (Up & Down)',
                    3: '3: 20 Reps (Up & Down)'
                },
                image1: require('../assets/overheadStretch.jpg'),
                howToDo: 'overHeadStretchHowToDo',

            },
            {
                id: '7',
                catName: 'chestStretch',
                circuit: {
                    1: '1: 18 Reps',
                    2: '2: 16 Reps',
                    3: '3: 16 Reps'
                },
                image1: require('../assets/chestStretch.jpg'),
                howToDo: 'chestStretchHowToDo',

            },
        ]
    },
    {
        workoutId: 4,
        name: 'friday',
        image: require('../assets/friday.jpg'),
        category: [
            {
                id: '1',
                catName: 'crossOver',
                circuit: {
                    1: '1: 30 Reps',
                    2: '2: 26 Reps',
                    3: '3: 24 Reps'
                },
                image1: require('../assets/crossOver.jpeg'),
                howToDo: 'crossOverHowToDo',

            },
            {
                id: '2',
                catName: 'mountainClimbers',
                circuit: {
                    1: '1: 40 Reps',
                    2: '2: 35 Reps',
                    3: '3: 30 Reps'
                },
                image1: require('../assets/mountainClimbers.jpg'),
                howToDo: 'mountainClimbersHowToDo',

            },
            {
                id: '3',
                catName: 'pushUps',
                circuit: {
                    1: '1: 20 Reps' ,
                    2: '2: 16 Reps',
                    3: '3: 16 Reps'
                },
                image1: require('../assets/pushUps.jpg'),
                howToDo: 'pushUpsHowToDo',

            },
            {
                id: '4',
                catName: 'plank',
                circuit: {
                    1: '1: Hold the position for 1 min.',
                    2: '2: Hold the position for 1 min.',
                    3: '3: Hold the position for 90 sec.'
                },
                image1: require('../assets/plank.jpg'),
                howToDo: 'plankHowToDo',

            },
            {
                id: '5',
                catName: 'splitSquats',
                circuit: {
                    1: '1: 20 Reps',
                    2: '2: 18 Reps',
                    3: '3: 16 Reps'
                },
                image1: require('../assets/splitSquat.jpg'),
                howToDo: 'splitSquatsHowToDo',

            },
            {
                id: '6',
                catName: 'bicycleCrunches',
                circuit: {
                    1: '1: 20 Reps',
                    2: '2: 20 Reps',
                    3: '3: 20 Reps'
                },
                image1: require('../assets/bicycleCrunches.jpg'),
                howToDo: 'bicycleCrunchesHowToDo',

            },
        ]
    },
    {
        workoutId: 5,
        name: 'saturday',
        image: require('../assets/saturday.jpg'),
        category: [
            {
                id: '1',
                catName: 'squats',
                circuit: {
                    1: '1: 20 Reps',
                    2: '2: 18 Reps',
                    3: '3: 16 Reps'
                },
                image1: require('../assets/squats.jpg'),
                howToDo: 'squatsHowToDo',

            },
            {
                id: '2',
                catName: 'pushUps',
                circuit: {
                    1: '1: 16 Reps',
                    2: '2: 16 Reps',
                    3: '3: 16 Reps'
                },
                image1: require('../assets/pushUps.jpg'),
                howToDo: 'pushUpsHowToDo',

            },
            {
                id: '3',
                catName: 'sideLegRaise',
                circuit: {
                    1: '1: 20 Reps (In & Out)' ,
                    2: '2: 18 Reps (In & Out)',
                    3: '3: 16 Reps (In & Out)'
                },
                image1: require('../assets/sideLegRaise.jpg'),
                howToDo: 'sideLegRaiseHowToDo',

            },
            {
                id: '4',
                catName: 'bottomUpStanding',
                circuit: {
                    1: '1: 18 Reps',
                    2: '2: 16 Reps',
                    3: '3: 16 Reps'
                },
                image1: require('../assets/lyingLegRaise.jpg'),
                howToDo: 'bottomUpStandingHowToDo',

            },
            {
                id: '5',
                catName: 'buttUps',
                circuit: {
                    1: '1: 20 Reps',
                    2: '2: 18 Reps',
                    3: '3: 16 Reps'
                },
                image1: require('../assets/buttUps.jpg'),
                howToDo: 'buttUpsHowToDo',

            },
            {
                id: '6',
                catName: 'overHeadStretch',
                circuit: {
                    1: '1: 20 Reps (Up & Down)',
                    2: '2: 20 Reps (Up & Down)',
                    3: '3: 20 Reps (Up & Down)'
                },
                image1: require('../assets/overheadStretch.jpg'),
                howToDo: 'overHeadStretchHowToDo',

            },
            {
                id: '7',
                catName: 'chestStretch',
                circuit: {
                    1: '1: 18 Reps',
                    2: '2: 16 Reps',
                    3: '3: 16 Reps'
                },
                image1: require('../assets/chestStretch.jpg'),
                howToDo: 'chestStretchHowToDo',

            },
        ]
    },
]

export default homeBasedWorkout;