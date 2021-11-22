const building = [
    {
        workoutId: '0',
        name: 'skinnyLegs',
        image: require('../assets/skinnyLegs.jpg'),
        category: [
            {
                id: '1',
                catName: 'squatJumps',
                circuit: {
                    1: '1: 15 Reps',
                    2: '2: 12 Reps',
                },
                image1: require('../assets/jumpSquat.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '2',
                catName: 'smithMachineCalfRaise',
                circuit: {
                    1: '1: 12 Reps',
                    2: '2: 10 Reps',
                },
                image1: require('../assets/smithMachineCalfRaise.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '3',
                catName: 'splitSquats',
                circuit: {
                    1: '1: 12 Reps',
                    2: '2: 10 Reps',
                },
                image1: require('../assets/splitSquat.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '4',
                catName: 'lunges',
                circuit: {
                    1: '1: 15 Reps',
                    2: '2: 12 Reps',
                },
                image1: require('../assets/lunges.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
        ]
    },
    {
        workoutId: '1',
        name: 'shoulders',
        image: require('../assets/shoulders.jpg'),
        category: [
            {
                id: '1',
                catName: 'barbellShoulderPress',
                circuit: {
                    1: '1: 14 Reps',
                    2: '2: 12 Reps',
                },
                image1: require('../assets/shoulderBarbellPress.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '2',
                catName: 'shrugs',
                circuit: {
                    1: '1: 12 Reps',
                    2: '2: 12 Reps',
                },
                image1: require('../assets/shrugs.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '3',
                catName: 'laiteralRaise',
                circuit: {
                    1: '1: 12 Reps',
                    2: '2: 12 Reps',
                },
                image1: require('../assets/lateralRaise.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
        ]
    },
    {
        workoutId: '2',
        name: 'biceps',
        image: require('../assets/biceps.jpg'),
        category: [
            {
                id: '1',
                catName: 'pullups',
                circuit: {
                    1: '1: 10 Reps',
                    2: '2: 8 Reps',
                },
                image1: require('../assets/pullUps.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '2',
                catName: 'hammerCurls',
                circuit: {
                    1: '1: 14 Reps',
                    2: '2: 12 Reps',
                },
                image1: require('../assets/hammerCurls.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '3',
                catName: 'barbellCurls',
                circuit: {
                    1: '1: 12 Reps',
                    2: '2: 10 Reps',
                },
                image1: require('../assets/barbellCurls.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '4',
                catName: 'barPreacherCurls',
                circuit: {
                    1: '1: 10 Reps',
                    2: '2: 12 Reps',
                },
                image1: require('../assets/barPreacherCurls.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
        ]
    },
    {
        workoutId: '3',
        name: 'triceps',
        image: require('../assets/triceps.jpg'),
        category: [
            {
                id: '1',
                catName: 'lyingTricepsExtension',
                circuit: {
                    1: '1: 14 Reps',
                    2: '2: 10 Reps',
                },
                image1: require('../assets/lyingTricepsExtension.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '2',
                catName: 'benchDips',
                circuit: {
                    1: '1: 10 Reps',
                    2: '2: 14 Reps',
                },
                image1: require('../assets/tricepsDips.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '3',
                catName: 'closeGripBar',
                circuit: {
                    1: '1: 14 Reps',
                    2: '2: 10 Reps',
                },
                image1: require('../assets/closeGripEZBarBenchPress.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '4',
                catName: 'tricepsDips',
                circuit: {
                    1: '1: 10 Reps',
                    2: '2: 14 Reps',
                },
                image1: require('../assets/tricepDipsMachine.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
        ]
    },
    {
        workoutId: '4',
        name: 'abs',
        image: require('../assets/abs.jpg'),
        category: [
            {
                id: '1',
                catName: 'swissBallCrunches',
                circuit: {
                    1: '1: 14 Reps',
                    2: '2: 12 Reps',
                },
                image1: require('../assets/swissBallCrunches.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '2',
                catName: 'plank',
                circuit: {
                    1: '1: Hold the Position for 1 min',
                    2: '2: Hold the Position for 1 min',
                },
                image1: require('../assets/plank.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '3',
                catName: 'bicycleCrunches',
                circuit: {
                    1: '1: 12 Reps',
                    2: '2: 10 Reps',
                },
                image1: require('../assets/bicycleCrunches.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '4',
                catName: 'lyingLegRaise',
                circuit: {
                    1: '1: 10 Reps',
                    2: '2: 12 Reps',
                },
                image1: require('../assets/lyingLegRaise.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '5',
                catName: 'declieObliqueCrunches',
                circuit: {
                    1: '1: 10 Reps',
                    2: '2: 14 Reps',
                },
                image1: require('../assets/declineObligueCrunches.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
        ]
    },
    {
        workoutId: '5',
        name: 'back',
        image: require('../assets/back.jpg'),
        category: [
            {
                id: '1',
                catName: 'dumbellBentOver',
                circuit: {
                    1: '1: 14 Reps',
                    2: '2: 12 Reps',
                },
                image1: require('../assets/dumbellBentOver.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '2',
                catName: 'deadLift',
                circuit: {
                    1: '1: 10 Reps',
                    2: '2: 12 Reps',
                },
                image1: require('../assets/deadLift.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '3',
                catName: 'hyperExtension',
                circuit: {
                    1: '1: 14 Reps',
                    2: '2: 12 Reps',
                },
                image1: require('../assets/hyperExtension.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
        ]
    },
    {
        workoutId: '6',
        name: 'chest',
        image: require('../assets/chest.jpg'),
        category: [
            {
                id: '1',
                catName: 'plainBenchBarbellPress',
                circuit: {
                    1: '1: 14 Reps',
                    2: '2: 10 Reps',
                },
                image1: require('../assets/plainBenchBarbellPress.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '2',
                catName: 'inclineBenchDumbellPress',
                circuit: {
                    1: '1: 10 Reps',
                    2: '2: 12 Reps',
                },
                image1: require('../assets/inclineBenchDumbellPress.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '3',
                catName: 'pushUps',
                circuit: {
                    1: '1: 15 Reps',
                    2: '2: 12 Reps',
                },
                image1: require('../assets/pushUps.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
            {
                id: '4',
                catName: 'butterfly',
                circuit: {
                    1: '1: 10 Reps',
                    2: '2: 14 Reps',
                },
                image1: require('../assets/butterfly.jpg'),
                image2: '2',
                howToDo: 'This is the way'

            },
        ]
    },
]

export default building;