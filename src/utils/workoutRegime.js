const workoutData = {
    //two days per week
    2: {
        split1: {
            title: 'Upper/Lower',
            musclesFocused: 'Full Body',
            workoutDaysPerWeek: 2,
            day1: {
                title: 'Upper Body',
                exercises: [
                    {
                        name: 'Bench Press',
                        alternate: 'Incline Dumbbell Press, Incline Bench Press',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Barbell Row',
                        alternate: 'Machine Row, Cable Row',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Overhead Dumbbell Press',
                        alternate: 'Military Press',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Pec Dec',
                        alternate: 'Cable Flies, Dumbbell Flies',
                        sets: '2',
                        reps: '10-12'
                    },
                    {
                        name: 'Lat Pull Down',
                        alternate: 'V-Bar Lat Pull Down',
                        sets: '2',
                        reps: '10-12'
                    },
                    {
                        name: 'Side Lateral Raise',
                        alternate: 'Cable Lateral Raise',
                        sets: '2',
                        reps: '10-15'
                    },
                    {
                        name: 'Tricep Extensions',
                        alternate: 'Tricep Overhead, Tricep Kickbacks',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Cable Curls',
                        alternate: 'Preacher Curls, Incline Dumbbell Curls, Hammer Curls',
                        sets: '3',
                        reps: '8-12'
                    },
                ],
            },
            day2: {
                title: 'Lower Body & Abs',
                exercises: [
                    {
                        name: 'Squats',
                        alternate: 'Leg Press, Bulgarian Split Squats',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Deadlifts',
                        alternate: 'Dumbbell Stiff Leg Deadlifts',
                        sets: '2',
                        reps: '6-10'
                    },
                    {
                        name: 'Calf Raise',
                        alternate: '',
                        sets: '3',
                        reps: '10-15'
                    },
                    {
                        name: 'Leg Extensions',
                        alternate: '',
                        sets: '3',
                        reps: '10-12'
                    },
                    {
                        name: 'Leg Curl',
                        alternate: 'Seated Leg Curl',
                        sets: '3',
                        reps: '10-12'
                    },
                    {
                        name: 'Cable Crunch',
                        alternate: 'Planks',
                        sets: '2',
                        reps: '10-12'
                    },
                    {
                        name: 'Cable Pull Through w/Rope',
                        alternate: 'Hyperextension',
                        sets: '3',
                        reps: '10-12'
                    },
                ],
            }
        },
        split2: {
            title: 'Full Body',
            musclesFocused: 'Full Body',
            workoutDaysPerWeek: 2,
            day1: {
                title: 'Full Body 1',
                exercises: [
                    {
                        name: 'Squats',
                        alternate: 'Leg Press',
                        sets: '5',
                        reps: '5'
                    },
                    {
                        name: 'Bench Press',
                        alternate: 'Incline Dumbbell Press, Incline Bench Press',
                        sets: '5',
                        reps: '5'
                    },
                    {
                        name: 'Barbell Row',
                        alternate: 'Machine Row',
                        sets: '5',
                        reps: '5'
                    },
                    {
                        name: 'Upright Row',
                        alternate: '',
                        sets: '3',
                        reps: '10'
                    },
                    {
                        name: 'Skullcrushers',
                        alternate: 'Tricep Overhead, Tricep Pushdowns',
                        sets: '3',
                        reps: '10'
                    },
                    {
                        name: 'Dumbbell Curls',
                        alternate: 'Incline Dumbbell Curls, Preacher Curls',
                        sets: '3',
                        reps: '10'
                    },
                    {
                        name: 'Leg Curls',
                        alternate: 'Seated Leg Curls, Romanian Deadlifts',
                        sets: '3',
                        reps: '12-15'
                    },
                    {
                        name: 'Ab Wheel Roll Out',
                        alternate: '',
                        sets: '3',
                        reps: '10-15'
                    },
                ]
            },
            day2: {
                title: 'Full Body 2',
                exercises: [
                    {
                        name: 'Deadlifts',
                        alternate: '',
                        sets: '3',
                        reps: '5'
                    },
                    {
                        name: 'Romanian Deadlift',
                        alternate: 'Dumbbell RDL',
                        sets: '2',
                        reps: '8-12'
                    },
                    {
                        name: 'Overhead Press',
                        alternate: 'Military Press',
                        sets: '3',
                        reps: '8-10'
                    },
                    {
                        name: 'Pull Ups or Inverted Rows',
                        alternate: 'Lat Pull Down',
                        sets: '3',
                        reps: '10-15'
                    },
                    {
                        name: 'Dips',
                        alternate: '',
                        sets: '3',
                        reps: '10-15'
                    },
                    {
                        name: 'Shrugs',
                        alternate: 'Barbell Shrugs',
                        sets: '3',
                        reps: '10'
                    },
                    {
                        name: 'Calf Raise',
                        alternate: '',
                        sets: '3',
                        reps: '12-15'
                    },
                    {
                        name: 'Plank',
                        alternate: '',
                        sets: '3',
                        reps: '60 seconds'
                    },
                ]
            }
        },
        split3: {
            title: 'Push/Pull',
            musclesFocused: 'Upper Body',
            workoutDaysPerWeek: 2,
            day1: {
                title: 'Push Day',
                exercises: [
                    {
                        name: 'Bench Press',
                        alternate: 'Incline Bench Press',
                        sets: '3',
                        reps: '6-8'
                    },
                    {
                        name: 'Incline Dumbbell Press',
                        alternate: 'Dumbbell Press',
                        sets: '3',
                        reps: '8-10'
                    },
                    {
                        name: 'Cable Crossover',
                        alternate: 'Pec Dec',
                        sets: '3',
                        reps: '10-12'
                    },
                    {
                        name: 'Overhead Press',
                        alternate: 'Military Press',
                        sets: '3',
                        reps: '8-10'
                    },
                    {
                        name: 'Side Lateral Raise',
                        alternate: 'Cable Lateral Raise',
                        sets: '3',
                        reps: '10-12'
                    },
                    {
                        name: 'Tricep Pushdown',
                        alternate: 'Tricep Overhead',
                        sets: '3',
                        reps: '10-12'
                    },
                ]
            },
            day2: {
                title: 'Pull Day',
                exercises: [
                    {
                        name: 'Lat Pull Down',
                        alternate: 'Pull ups',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Chest Supported Row',
                        alternate: 'Barbell Row',
                        sets: '3',
                        reps: '10-12'
                    },
                    {
                        name: 'Lat Pullover',
                        alternate: 'Dumbbell Pullover',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Dumbbell Curls',
                        alternate: 'Preacher Curls',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Incline Dumbbell Curls',
                        alternate: 'Hammer Curls',
                        sets: '3',
                        reps: '8-12'
                    },
                ]
            }
        }
    },
    //three days per week
    3: {
        split1: {
            title: 'Push/Pull/Legs',
            musclesFocused: 'Full Body',
            workoutDaysPerWeek: 3,
            day1: {
                title: 'Push Day',
                exercises: [
                    {
                        name: 'Bench Press',
                        alternate: 'Dumbbell Press',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Incline Dumbbell Press',
                        alternate: 'Incline Bench Press',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Overhead Press',
                        alternate: 'Military Press',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Side Lateral Raise',
                        alternate: 'Cable Lateral Raise',
                        sets: '3',
                        reps: '8-15'
                    },
                    {
                        name: 'Tricep Pushdowns',
                        alternate: '',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Skull Crushers',
                        alternate: 'Tricep Overhead',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Cable Crossover',
                        alternate: 'Pec Dec',
                        sets: '3',
                        reps: '8-12'
                    },
                ]
            },
            day2: {
                title: 'Pull Day',
                exercises: [
                    {
                        name: 'Barbell Row',
                        alternate: 'Machine Row',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Lat Pull Down',
                        alternate: 'Pullups',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Lat Pull Over',
                        alternate: '',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Dumbbell Curls',
                        alternate: 'Preacher Curls',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Incline Dumbbell Curls',
                        alternate: 'Hammer Curls',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Shrugs',
                        alternate: 'Hammer Curls',
                        sets: '3',
                        reps: '6-12'
                    },
                ]
            },
            day3: {
                title: 'Leg Day',
                exercises: [
                    {
                        name: 'Squats',
                        alternate: 'Bulgarian Split Squats',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Leg Press',
                        alternate: '',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Calf Raises',
                        alternate: '',
                        sets: '3',
                        reps: '10-15'
                    },
                    {
                        name: 'Leg Extensionss',
                        alternate: '',
                        sets: '3',
                        reps: '8-15'
                    },
                    {
                        name: 'Leg Curl',
                        alternate: 'Seated Hamstring Curl',
                        sets: '3',
                        reps: '6-12'
                    },
                ]
            }
        },
        split2: {
            title: 'Upper/Lower (Upper Day Focused)',
            musclesFocused: 'Full Body',
            workoutDaysPerWeek: 3,
            day1: {
                title: 'Upper Body',
                exercises: [
                    {
                        name: 'Bench Press',
                        alternate: 'Incline Dumbbell Press, Incline Bench Press',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Barbell Row',
                        alternate: 'Machine Row, Cable Row',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Overhead Dumbbell Press',
                        alternate: 'Military Press',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Pec Dec',
                        alternate: 'Cable Flies, Dumbbell Flies',
                        sets: '2',
                        reps: '10-12'
                    },
                    {
                        name: 'Lat Pull Down',
                        alternate: 'V-Bar Lat Pull Down',
                        sets: '2',
                        reps: '10-12'
                    },
                    {
                        name: 'Side Lateral Raise',
                        alternate: 'Cable Lateral Raise',
                        sets: '2',
                        reps: '10-15'
                    },
                    {
                        name: 'Tricep Extensions',
                        alternate: 'Tricep Overhead, Tricep Kickbacks',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Cable Curls',
                        alternate: 'Preacher Curls, Incline Dumbbell Curls, Hammer Curls',
                        sets: '3',
                        reps: '8-12'
                    },
                ]
            },
            day2: {
                title: 'Lower Body & Abs',
                exercises: [
                    {
                        name: 'Squats',
                        alternate: 'Leg Press, Bulgarian Split Squats',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Deadlifts',
                        alternate: 'Dumbbell Stiff Leg Deadlifts',
                        sets: '2',
                        reps: '6-10'
                    },
                    {
                        name: 'Calf Raise',
                        alternate: '',
                        sets: '3',
                        reps: '10-15'
                    },
                    {
                        name: 'Leg Extensions',
                        alternate: '',
                        sets: '3',
                        reps: '10-12'
                    },
                    {
                        name: 'Leg Curl',
                        alternate: 'Seated Leg Curl',
                        sets: '3',
                        reps: '10-12'
                    },
                    {
                        name: 'Cable Crunch',
                        alternate: 'Planks',
                        sets: '2',
                        reps: '10-12'
                    },
                    {
                        name: 'Cable Pull Through w/Rope',
                        alternate: 'Hyperextension',
                        sets: '3',
                        reps: '10-12'
                    },
                ]
            },
            day3: {
                title: 'Upper Body',
                exercises: [
                    {
                        name: 'Bench Press',
                        alternate: 'Incline Dumbbell Press, Incline Bench Press',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Barbell Row',
                        alternate: 'Machine Row, Cable Row',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Overhead Dumbbell Press',
                        alternate: 'Military Press',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Pec Dec',
                        alternate: 'Cable Flies, Dumbbell Flies',
                        sets: '2',
                        reps: '10-12'
                    },
                    {
                        name: 'Lat Pull Down',
                        alternate: 'V-Bar Lat Pull Down',
                        sets: '2',
                        reps: '10-12'
                    },
                    {
                        name: 'Side Lateral Raise',
                        alternate: 'Cable Lateral Raise',
                        sets: '2',
                        reps: '10-15'
                    },
                    {
                        name: 'Tricep Extensions',
                        alternate: 'Tricep Overhead, Tricep Kickbacks',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Cable Curls',
                        alternate: 'Preacher Curls, Incline Dumbbell Curls, Hammer Curls',
                        sets: '3',
                        reps: '8-12'
                    },
                ]
            }
        },
        split3: {
            title: 'Full Body',
            musclesFocused: 'Full Body',
            workoutDaysPerWeek: 3,
            day1: {
                title: 'Full Body 1',
                exercises: [
                    {
                        name: 'Bench Press',
                        alternate: 'Dumbbell Press',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Squats',
                        alternate: 'Bulgarian Split Squats',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Barbell Row',
                        alternate: 'Machine Row, Cable Row',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Side Lateral Raise',
                        alternate: 'Cable Lateral Raise',
                        sets: '3',
                        reps: '8-15'
                    },
                    {
                        name: 'Dumbbell Curls',
                        alternate: 'Incline Dumbbell Curls, Cable Curls',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Tricep Extension',
                        alternate: 'Dumbbell Press',
                        sets: '3',
                        reps: '8-12'
                    },
                ]
            },
            day2: {
                title: 'Full Body 2',
                exercises: [
                    {
                        name: 'Incline Dumbbell Press',
                        alternate: 'Incline Bench Press',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Deadlift',
                        alternate: 'Romanian Deadlift',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Lat Pull Down',
                        alternate: 'Pullups',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Overhead Press',
                        alternate: 'Military Press',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Preacher Curls',
                        alternate: 'Incline Dumbbell Curls, Hammer Curls',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Tricep Overhead',
                        alternate: 'Skullcrushers',
                        sets: '3',
                        reps: '8-12'
                    },
                ]
            },
            day3: {
                title: 'Full Body 3',
                exercises: [
                    {
                        name: 'Leg Press',
                        alternate: '',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Cable Crossovers',
                        alternate: 'Pec Dec',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Lat Pull Over',
                        alternate: '',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Overhead Press',
                        alternate: 'Military Press',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Hammer Curls',
                        alternate: 'Incline Dumbbell Curls',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Skullcrusher',
                        alternate: 'Tricep Overhead, Tricep Pushdown',
                        sets: '3',
                        reps: '8-12'
                    },
                ]
            }
        }
    },
    //four days per week
    4: {
        split1: {
            title: 'Upper/Lower',
            musclesFocused: 'Full Body',
            workoutDaysPerWeek: 4,
            day1: {
                title: 'Upper Body',
                exercises: [
                    {
                        name: 'Bench Press',
                        alternate: 'Incline Dumbbell Press, Incline Bench Press',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Barbell Row',
                        alternate: 'Machine Row, Cable Row',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Overhead Dumbbell Press',
                        alternate: 'Military Press',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Pec Dec',
                        alternate: 'Cable Flies, Dumbbell Flies',
                        sets: '2',
                        reps: '10-12'
                    },
                    {
                        name: 'Lat Pull Down',
                        alternate: 'V-Bar Lat Pull Down',
                        sets: '2',
                        reps: '10-12'
                    },
                    {
                        name: 'Side Lateral Raise',
                        alternate: 'Cable Lateral Raise',
                        sets: '2',
                        reps: '10-15'
                    },
                    {
                        name: 'Tricep Extensions',
                        alternate: 'Tricep Overhead, Tricep Kickbacks',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Cable Curls',
                        alternate: 'Preacher Curls, Incline Dumbbell Curls, Hammer Curls',
                        sets: '3',
                        reps: '8-12'
                    },
                ],
            },
            day2: {
                title: 'Lower Body & Abs',
                exercises: [
                    {
                        name: 'Squats',
                        alternate: 'Leg Press, Bulgarian Split Squats',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Deadlifts',
                        alternate: 'Dumbbell Stiff Leg Deadlifts',
                        sets: '2',
                        reps: '6-10'
                    },
                    {
                        name: 'Calf Raise',
                        alternate: '',
                        sets: '3',
                        reps: '10-15'
                    },
                    {
                        name: 'Leg Extensions',
                        alternate: '',
                        sets: '3',
                        reps: '10-12'
                    },
                    {
                        name: 'Leg Curl',
                        alternate: 'Seated Leg Curl',
                        sets: '3',
                        reps: '10-12'
                    },
                    {
                        name: 'Cable Crunch',
                        alternate: 'Planks',
                        sets: '2',
                        reps: '10-12'
                    },
                    {
                        name: 'Cable Pull Through w/Rope',
                        alternate: 'Hyperextension',
                        sets: '3',
                        reps: '10-12'
                    },
                ],
            },
            day3: {
                title: 'Upper Body',
                exercises: [
                    {
                        name: 'Bench Press',
                        alternate: 'Incline Dumbbell Press, Incline Bench Press',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Barbell Row',
                        alternate: 'Machine Row, Cable Row',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Overhead Dumbbell Press',
                        alternate: 'Military Press',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Pec Dec',
                        alternate: 'Cable Flies, Dumbbell Flies',
                        sets: '2',
                        reps: '10-12'
                    },
                    {
                        name: 'Lat Pull Down',
                        alternate: 'V-Bar Lat Pull Down',
                        sets: '2',
                        reps: '10-12'
                    },
                    {
                        name: 'Side Lateral Raise',
                        alternate: 'Cable Lateral Raise',
                        sets: '2',
                        reps: '10-15'
                    },
                    {
                        name: 'Tricep Extensions',
                        alternate: 'Tricep Overhead, Tricep Kickbacks',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Cable Curls',
                        alternate: 'Preacher Curls, Incline Dumbbell Curls, Hammer Curls',
                        sets: '3',
                        reps: '8-12'
                    },
                ],
            },
            day4: {
                title: 'Lower Body & Abs',
                exercises: [
                    {
                        name: 'Squats',
                        alternate: 'Leg Press, Bulgarian Split Squats',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Deadlifts',
                        alternate: 'Dumbbell Stiff Leg Deadlifts',
                        sets: '2',
                        reps: '6-10'
                    },
                    {
                        name: 'Calf Raise',
                        alternate: '',
                        sets: '3',
                        reps: '10-15'
                    },
                    {
                        name: 'Leg Extensions',
                        alternate: '',
                        sets: '3',
                        reps: '10-12'
                    },
                    {
                        name: 'Leg Curl',
                        alternate: 'Seated Leg Curl',
                        sets: '3',
                        reps: '10-12'
                    },
                    {
                        name: 'Cable Crunch',
                        alternate: 'Planks',
                        sets: '2',
                        reps: '10-12'
                    },
                    {
                        name: 'Cable Pull Through w/Rope',
                        alternate: 'Hyperextension',
                        sets: '3',
                        reps: '10-12'
                    },
                ],
            }
        },
        split2: {
            title: 'Push/Pull',
            musclesFocused: 'Upper Body',
            workoutDaysPerWeek: 4,
            day1: {
                title: 'Push Day',
                exercises: [
                    {
                        name: 'Bench Press',
                        alternate: 'Incline Bench Press',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Incline Dumbbell Press',
                        alternate: 'Dumbbell Press',
                        sets: '3',
                        reps: '8-10'
                    },
                    {
                        name: 'Cable Crossover',
                        alternate: 'Pec Dec',
                        sets: '3',
                        reps: '10-12'
                    },
                    {
                        name: 'Overhead Press',
                        alternate: 'Military Press',
                        sets: '3',
                        reps: '8-10'
                    },
                    {
                        name: 'Side Lateral Raise',
                        alternate: 'Cable Lateral Raise',
                        sets: '3',
                        reps: '10-12'
                    },
                    {
                        name: 'Tricep Pushdown',
                        alternate: 'Tricep Overhead',
                        sets: '3',
                        reps: '10-12'
                    },
                ]
            },
            day2: {
                title: 'Pull Day',
                exercises: [
                    {
                        name: 'Lat Pull Down',
                        alternate: 'Pull ups',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Chest Supported Row',
                        alternate: 'Barbell Row',
                        sets: '3',
                        reps: '10-12'
                    },
                    {
                        name: 'Lat Pullover',
                        alternate: 'Dumbbell Pullover',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Dumbbell Curls',
                        alternate: 'Preacher Curls',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Incline Dumbbell Curls',
                        alternate: 'Hammer Curls',
                        sets: '3',
                        reps: '8-12'
                    },
                ]
            },
            day3: {
                title: 'Push Day',
                exercises: [
                    {
                        name: 'Bench Press',
                        alternate: 'Incline Bench Press',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Incline Dumbbell Press',
                        alternate: 'Dumbbell Press',
                        sets: '3',
                        reps: '8-10'
                    },
                    {
                        name: 'Cable Crossover',
                        alternate: 'Pec Dec',
                        sets: '3',
                        reps: '10-12'
                    },
                    {
                        name: 'Overhead Press',
                        alternate: 'Military Press',
                        sets: '3',
                        reps: '8-10'
                    },
                    {
                        name: 'Side Lateral Raise',
                        alternate: 'Cable Lateral Raise',
                        sets: '3',
                        reps: '10-12'
                    },
                    {
                        name: 'Tricep Pushdown',
                        alternate: 'Tricep Overhead',
                        sets: '3',
                        reps: '10-12'
                    },
                ]
            },
            day4: {
                title: 'Pull Day',
                exercises: [
                    {
                        name: 'Lat Pull Down',
                        alternate: 'Pull ups',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Chest Supported Row',
                        alternate: 'Barbell Row',
                        sets: '3',
                        reps: '10-12'
                    },
                    {
                        name: 'Lat Pullover',
                        alternate: 'Dumbbell Pullover',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Dumbbell Curls',
                        alternate: 'Preacher Curls',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Incline Dumbbell Curls',
                        alternate: 'Hammer Curls',
                        sets: '3',
                        reps: '8-12'
                    },
                ]
            }
        },
        split3: {
            title: 'Bro Split',
            musclesFocused: 'Full Body',
            workoutDaysPerWeek: 4,
            day1: {
                title: 'Chest and Shoulders',
                exercises: [
                    {
                        name: 'Bench Press',
                        alternate: 'Dumbbell Press',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Incline Dumbbell Press',
                        alternate: 'Incline Bench Press',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Overhead Press',
                        alternate: 'Military',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Side Lateral Raise',
                        alternate: 'Cable Lateral Raise',
                        sets: '3',
                        reps: '8-15'
                    },
                    {
                        name: 'Shrugs',
                        alternate: '',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Cable Crossover',
                        alternate: 'Pec Dec',
                        sets: '3',
                        reps: '6-12'
                    },
                ]
            },
            day2: {
                title: 'Arms',
                exercises: [
                    {
                        name: 'Chin up',
                        alternate: '',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Tricep Pushdown',
                        alternate: '',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Dumbbell Curls',
                        alternate: 'Preacher Curl',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Tricep Overhead',
                        alternate: 'Skullcrushers',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Hammer Curls',
                        alternate: 'Incline Dumbbell Curls',
                        sets: '3',
                        reps: '6-12'
                    },
                ]
            },
            day3: {
                title: 'Back',
                exercises: [
                    {
                        name: 'Lat Pull Down',
                        alternate: 'Pull ups',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Chest Supported Row',
                        alternate: 'Barbell Row',
                        sets: '3',
                        reps: '10-12'
                    },
                    {
                        name: 'Lat Pullover',
                        alternate: 'Dumbbell Pullover',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Pullups',
                        alternate: '',
                        sets: '2',
                        reps: 'till failure'
                    }
                ]
            },
            day4: {
                title: 'Legs',
                exercises: [
                    {
                        name: 'Squats',
                        alternate: 'Bulgarian Split Squats',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Leg Press',
                        alternate: '',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Calf Raise',
                        alternate: '',
                        sets: '3',
                        reps: '10-15'
                    },
                    {
                        name: 'Leg Extensions',
                        alternate: '',
                        sets: '3',
                        reps: '10-12'
                    },
                    {
                        name: 'Leg Curl',
                        alternate: 'Seated Leg Curl',
                        sets: '3',
                        reps: '10-12'
                    },
                ]
            }
        }
    },
    //five days per week
    5: {
        split1: {
            title: 'Bro Split',
            musclesFocused: 'Full Body',
            workoutDaysPerWeek: 5,
            day1: {
                title: 'Chest',
                exercises: [
                    {
                        name: 'Flat Bench Press',
                        alternate: 'Flat Dumbbell Press',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Incline Dumbbell Press',
                        alternate: 'Inline Bench Press',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Cable Crossover',
                        alternate: 'pec Dec',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Machine Chest Press',
                        alternate: 'Any pressing movement',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Dips (Optional)',
                        alternate: '',
                        sets: '2',
                        reps: 'till failure'
                    },
                ]
            },
            day2: {
                title: 'Back',
                exercises: [
                    {
                        name: 'Deadlift (Optional)',
                        alternate: '',
                        sets: '3',
                        reps: '5-10'
                    },
                    {
                        name: 'Barbell Row',
                        alternate: 'Machine Row',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Lat Pull Down',
                        alternate: 'Pullups',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Lat Pull Over',
                        alternate: '',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Pullups',
                        alternate: '',
                        sets: '2',
                        reps: 'till failure'
                    },
                ]
            },
            day3: {
                title: 'Arms',
                exercises: [
                    {
                        name: 'Chin up',
                        alternate: '',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Tricep Pushdown',
                        alternate: '',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Dumbbell Curls',
                        alternate: 'Preacher Curl',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Tricep Overhead',
                        alternate: 'Skullcrushers',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Hammer Curls',
                        alternate: 'Incline Dumbbell Curls',
                        sets: '3',
                        reps: '6-12'
                    },
                ]
            },
            day4: {
                title: 'Legs',
                exercises: [
                    {
                        name: 'Squats',
                        alternate: 'Bulgarian Split Squats',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Leg Press',
                        alternate: '',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Calf Raise',
                        alternate: '',
                        sets: '3',
                        reps: '10-15'
                    },
                    {
                        name: 'Leg Extensions',
                        alternate: '',
                        sets: '3',
                        reps: '10-12'
                    },
                    {
                        name: 'Leg Curl',
                        alternate: 'Seated Leg Curl',
                        sets: '3',
                        reps: '10-12'
                    },
                ]
            },
            day5: {
                title: 'Shoulders',
                exercises: [
                    {
                        name: 'Overhead Press',
                        alternate: 'Military',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Side Lateral Raise',
                        alternate: 'Cable Lateral Raise',
                        sets: '3',
                        reps: '8-15'
                    },
                    {
                        name: 'Rear Delt Fly',
                        alternate: 'Face Pull',
                        sets: '3',
                        reps: '6-15'
                    },
                    {
                        name: 'Shrugs',
                        alternate: '',
                        sets: '3',
                        reps: '6-12'
                    },
                ]
            }
        },
        split2: {
            title: 'Upper/Lower/Push/Pull/Legs',
            musclesFocused: 'Full Body',
            workoutDaysPerWeek: 5,
            day1: {
                title: 'Upper Body',
                exercises: [
                    {
                        name: 'Bench Press',
                        alternate: 'Incline Dumbbell Press, Incline Bench Press',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Barbell Row',
                        alternate: 'Machine Row, Cable Row',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Overhead Dumbbell Press',
                        alternate: 'Military Press',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Pec Dec',
                        alternate: 'Cable Flies, Dumbbell Flies',
                        sets: '2',
                        reps: '10-12'
                    },
                    {
                        name: 'Lat Pull Down',
                        alternate: 'V-Bar Lat Pull Down',
                        sets: '2',
                        reps: '10-12'
                    },
                    {
                        name: 'Side Lateral Raise',
                        alternate: 'Cable Lateral Raise',
                        sets: '2',
                        reps: '10-15'
                    },
                    {
                        name: 'Tricep Extensions',
                        alternate: 'Tricep Overhead, Tricep Kickbacks',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Cable Curls',
                        alternate: 'Preacher Curls, Incline Dumbbell Curls, Hammer Curls',
                        sets: '3',
                        reps: '8-12'
                    },
                ],
            },
            day2: {
                title: 'Lower Body & Abs',
                exercises: [
                    {
                        name: 'Squats',
                        alternate: 'Leg Press, Bulgarian Split Squats',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Deadlifts',
                        alternate: 'Dumbbell Stiff Leg Deadlifts',
                        sets: '2',
                        reps: '6-10'
                    },
                    {
                        name: 'Calf Raise',
                        alternate: '',
                        sets: '3',
                        reps: '10-15'
                    },
                    {
                        name: 'Leg Extensions',
                        alternate: '',
                        sets: '3',
                        reps: '10-12'
                    },
                    {
                        name: 'Leg Curl',
                        alternate: 'Seated Leg Curl',
                        sets: '3',
                        reps: '10-12'
                    },
                    {
                        name: 'Cable Crunch',
                        alternate: 'Planks',
                        sets: '2',
                        reps: '10-12'
                    },
                    {
                        name: 'Cable Pull Through w/Rope',
                        alternate: 'Hyperextension',
                        sets: '3',
                        reps: '10-12'
                    },
                ],
            },
            day3: {
                title: 'Push Day',
                exercises: [
                    {
                        name: 'Bench Press',
                        alternate: 'Dumbbell Press',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Incline Dumbbell Press',
                        alternate: 'Incline Bench Press',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Overhead Press',
                        alternate: 'Military Press',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Side Lateral Raise',
                        alternate: 'Cable Lateral Raise',
                        sets: '3',
                        reps: '8-15'
                    },
                    {
                        name: 'Tricep Pushdowns',
                        alternate: '',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Skull Crushers',
                        alternate: 'Tricep Overhead',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Cable Crossover',
                        alternate: 'Pec Dec',
                        sets: '3',
                        reps: '8-12'
                    },
                ]
            },
            day4: {
                title: 'Pull Day',
                exercises: [
                    {
                        name: 'Barbell Row',
                        alternate: 'Machine Row',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Lat Pull Down',
                        alternate: 'Pullups',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Lat Pull Over',
                        alternate: '',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Dumbbell Curls',
                        alternate: 'Preacher Curls',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Incline Dumbbell Curls',
                        alternate: 'Hammer Curls',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Shrugs',
                        alternate: 'Hammer Curls',
                        sets: '3',
                        reps: '6-12'
                    },
                ]
            },
            day5: {
                title: 'Leg Day',
                exercises: [
                    {
                        name: 'Squats',
                        alternate: 'Bulgarian Split Squats',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Leg Press',
                        alternate: '',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Calf Raises',
                        alternate: '',
                        sets: '3',
                        reps: '10-15'
                    },
                    {
                        name: 'Leg Extensionss',
                        alternate: '',
                        sets: '3',
                        reps: '8-15'
                    },
                    {
                        name: 'Leg Curl',
                        alternate: 'Seated Hamstring Curl',
                        sets: '3',
                        reps: '6-12'
                    },
                ]
            }
        },
    },
    //six days per week
    6: {
        split1: {
            title: 'Push/Pull/Legs',
            musclesFocused: 'Full Body',
            workoutDaysPerWeek: 6,
            day1: {
                title: 'Push Day',
                exercises: [
                    {
                        name: 'Bench Press',
                        alternate: 'Dumbbell Press',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Incline Dumbbell Press',
                        alternate: 'Incline Bench Press',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Overhead Press',
                        alternate: 'Military Press',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Side Lateral Raise',
                        alternate: 'Cable Lateral Raise',
                        sets: '3',
                        reps: '8-15'
                    },
                    {
                        name: 'Tricep Pushdowns',
                        alternate: '',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Skull Crushers',
                        alternate: 'Tricep Overhead',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Cable Crossover',
                        alternate: 'Pec Dec',
                        sets: '3',
                        reps: '8-12'
                    },
                ]
            },
            day2: {
                title: 'Pull Day',
                exercises: [
                    {
                        name: 'Barbell Row',
                        alternate: 'Machine Row',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Lat Pull Down',
                        alternate: 'Pullups',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Lat Pull Over',
                        alternate: '',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Dumbbell Curls',
                        alternate: 'Preacher Curls',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Incline Dumbbell Curls',
                        alternate: 'Hammer Curls',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Shrugs',
                        alternate: 'Hammer Curls',
                        sets: '3',
                        reps: '6-12'
                    },
                ]
            },
            day3: {
                title: 'Leg Day',
                exercises: [
                    {
                        name: 'Squats',
                        alternate: 'Bulgarian Split Squats',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Leg Press',
                        alternate: '',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Calf Raises',
                        alternate: '',
                        sets: '3',
                        reps: '10-15'
                    },
                    {
                        name: 'Leg Extensionss',
                        alternate: '',
                        sets: '3',
                        reps: '8-15'
                    },
                    {
                        name: 'Leg Curl',
                        alternate: 'Seated Hamstring Curl',
                        sets: '3',
                        reps: '6-12'
                    },
                ]
            },
            day4: {
                title: 'Push Day',
                exercises: [
                    {
                        name: 'Bench Press',
                        alternate: 'Dumbbell Press',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Incline Dumbbell Press',
                        alternate: 'Incline Bench Press',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Overhead Press',
                        alternate: 'Military Press',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Side Lateral Raise',
                        alternate: 'Cable Lateral Raise',
                        sets: '3',
                        reps: '8-15'
                    },
                    {
                        name: 'Tricep Pushdowns',
                        alternate: '',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Skull Crushers',
                        alternate: 'Tricep Overhead',
                        sets: '3',
                        reps: '8-12'
                    },
                    {
                        name: 'Cable Crossover',
                        alternate: 'Pec Dec',
                        sets: '3',
                        reps: '8-12'
                    },
                ]
            },
            day5: {
                title: 'Pull Day',
                exercises: [
                    {
                        name: 'Barbell Row',
                        alternate: 'Machine Row',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Lat Pull Down',
                        alternate: 'Pullups',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Lat Pull Over',
                        alternate: '',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Dumbbell Curls',
                        alternate: 'Preacher Curls',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Incline Dumbbell Curls',
                        alternate: 'Hammer Curls',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Shrugs',
                        alternate: 'Hammer Curls',
                        sets: '3',
                        reps: '6-12'
                    },
                ]
            },
            day6: {
                title: 'Leg Day',
                exercises: [
                    {
                        name: 'Squats',
                        alternate: 'Bulgarian Split Squats',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Leg Press',
                        alternate: '',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Calf Raises',
                        alternate: '',
                        sets: '3',
                        reps: '10-15'
                    },
                    {
                        name: 'Leg Extensionss',
                        alternate: '',
                        sets: '3',
                        reps: '8-15'
                    },
                    {
                        name: 'Leg Curl',
                        alternate: 'Seated Hamstring Curl',
                        sets: '3',
                        reps: '6-12'
                    },
                ]
            }
        },
        split2: {
            title: 'Arnold Split',
            musclesFocused: 'Full Body',
            workoutDaysPerWeek: 6,
            day1: {
                title: 'Chest and Back',
                exercises: [
                    {
                        name: 'Bench Press',
                        alternate: 'Dumbbell Press',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Incline Dumbbell Press',
                        alternate: 'Incline Bench Press',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Dumbbell Pull Over',
                        alternate: 'Lat Pull Over',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Barbell Row',
                        alternate: 'Machine Row',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Chin up',
                        alternate: 'Pullups',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Deadlift',
                        alternate: '',
                        sets: '2',
                        reps: '5-8'
                    },
                ]
            },
            day2: {
                title: 'Shoulder & Arms',
                exercises: [
                    {
                        name: 'Overhead Press',
                        alternate: 'Military',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Side Lateral Raise',
                        alternate: 'Cable Lateral Raise',
                        sets: '3',
                        reps: '8-15'
                    },
                    {
                        name: 'Rear Delt Fly',
                        alternate: 'Face Pull',
                        sets: '3',
                        reps: '6-15'
                    },
                    {
                        name: 'Tricep Pushdown',
                        alternate: '',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Dumbbell Curls',
                        alternate: 'Preacher Curl',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Tricep Overhead',
                        alternate: 'Skullcrushers',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Hammer Curls',
                        alternate: 'Incline Dumbbell Curls',
                        sets: '3',
                        reps: '6-12'
                    },
                ]
            },
            day3: {
                title: 'Legs',
                exercises: [
                    {
                        name: 'Squats',
                        alternate: 'Bulgarian Split Squats',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Leg Press',
                        alternate: '',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Calf Raises',
                        alternate: '',
                        sets: '3',
                        reps: '10-15'
                    },
                    {
                        name: 'Leg Extensionss',
                        alternate: '',
                        sets: '3',
                        reps: '8-15'
                    },
                    {
                        name: 'Leg Curl',
                        alternate: 'Seated Hamstring Curl',
                        sets: '3',
                        reps: '6-12'
                    },
                ]
            },
            day4: {
                title: 'Chest and Back',
                exercises: [
                    {
                        name: 'Bench Press',
                        alternate: 'Dumbbell Press',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Incline Dumbbell Press',
                        alternate: 'Incline Bench Press',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Dumbbell Pull Over',
                        alternate: 'Lat Pull Over',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Barbell Row',
                        alternate: 'Machine Row',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Chin up',
                        alternate: 'Pullups',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Deadlift',
                        alternate: '',
                        sets: '2',
                        reps: '5-8'
                    },
                ]
            },
            day5: {
                title: 'Shoulder & Arms',
                exercises: [
                    {
                        name: 'Overhead Press',
                        alternate: 'Military',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Side Lateral Raise',
                        alternate: 'Cable Lateral Raise',
                        sets: '3',
                        reps: '8-15'
                    },
                    {
                        name: 'Rear Delt Fly',
                        alternate: 'Face Pull',
                        sets: '3',
                        reps: '6-15'
                    },
                    {
                        name: 'Tricep Pushdown',
                        alternate: '',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Dumbbell Curls',
                        alternate: 'Preacher Curl',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Tricep Overhead',
                        alternate: 'Skullcrushers',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Hammer Curls',
                        alternate: 'Incline Dumbbell Curls',
                        sets: '3',
                        reps: '6-12'
                    },
                ]
            },
            day6: {
                title: 'Legs',
                exercises: [
                    {
                        name: 'Squats',
                        alternate: 'Bulgarian Split Squats',
                        sets: '3',
                        reps: '6-10'
                    },
                    {
                        name: 'Leg Press',
                        alternate: '',
                        sets: '3',
                        reps: '6-12'
                    },
                    {
                        name: 'Calf Raises',
                        alternate: '',
                        sets: '3',
                        reps: '10-15'
                    },
                    {
                        name: 'Leg Extensionss',
                        alternate: '',
                        sets: '3',
                        reps: '8-15'
                    },
                    {
                        name: 'Leg Curl',
                        alternate: 'Seated Hamstring Curl',
                        sets: '3',
                        reps: '6-12'
                    },
                ]
            }
        }
    }
}

export default workoutData;