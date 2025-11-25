import { Chapter } from '../syllabus';

export const chapter7: Chapter = {
    id: "motion",
    title: "Chapter 7: Motion",
    concepts: [
        {
            id: "motion-intro",
            title: "Describing Motion",
            videos: [{ id: "v1", title: "Motion Full Chapter", url: "dQw4w9WgXcQ" }],
            explanation: "Motion is the change in position of an object with respect to time. It can be described using distance, displacement, speed, and velocity.",
            keyPoints: [
                "Distance: Total path length (scalar)",
                "Displacement: Shortest distance between initial and final position (vector)",
                "Speed: Distance/Time (scalar)",
                "Velocity: Displacement/Time (vector)",
                "Uniform motion: Equal distances in equal time intervals",
                "Non-uniform motion: Unequal distances in equal time intervals"
            ],
            diagrams: ["diagrams/science_ch7_distance_displacement.png"],
            examples: [
                {
                    id: "ex1",
                    problem: "A car travels 100m north, then 60m south. Find distance and displacement.",
                    solution: "Distance = 100 + 60 = 160m\\nDisplacement = 100 - 60 = 40m north (shortest distance from start to end)"
                }
            ],
            ncertExercises: [
                {
                    id: "ex7-q1",
                    exercise: "Exercise 7",
                    questionNumber: 1,
                    question: "An object has moved through a distance. Can it have zero displacement? If yes, support your answer with an example.",
                    solution: "Yes, an object can have zero displacement even after moving through a distance.\\nExample: If you walk around a circular track and return to the starting point, distance = circumference of track, but displacement = 0 (start and end points are same).",
                    difficulty: "medium"
                },
                {
                    id: "ex7-q2",
                    exercise: "Exercise 7",
                    questionNumber: 2,
                    question: "A farmer moves along the boundary of a square field of side 10m in 40s. What will be the magnitude of displacement of the farmer at the end of 2 minutes 20 seconds?",
                    solution: "Side of square = 10m, Perimeter = 40m\\nTime for one round = 40s\\nIn 140s (2 min 20s): Number of rounds = 140/40 = 3.5 rounds\\nAfter 3 complete rounds, farmer is at starting point.\\n0.5 round means farmer is at diagonally opposite corner.\\nDisplacement = diagonal = 10√2 = 14.14m",
                    difficulty: "hard"
                }
            ]
        },
        {
            id: "acceleration",
            title: "Acceleration and Equations of Motion",
            videos: [],
            explanation: "Acceleration is the rate of change of velocity. Equations of motion relate displacement, velocity, acceleration, and time.",
            keyPoints: [
                "Acceleration (a) = Change in velocity / Time",
                "Positive acceleration: Velocity increasing",
                "Negative acceleration (retardation): Velocity decreasing",
                "First equation: v = u + at",
                "Second equation: s = ut + ½at²",
                "Third equation: v² = u² + 2as",
                "Where: u = initial velocity, v = final velocity, a = acceleration, s = displacement, t = time"
            ],
            diagrams: ["diagrams/science_ch7_equations_of_motion.png"],
            examples: [
                {
                    id: "ex2",
                    problem: "A car accelerates from 10 m/s to 30 m/s in 4 seconds. Find acceleration.",
                    solution: "u = 10 m/s, v = 30 m/s, t = 4s\\na = (v - u)/t = (30 - 10)/4 = 20/4 = 5 m/s²"
                }
            ],
            ncertExercises: [
                {
                    id: "ex7-q3",
                    exercise: "Exercise 7",
                    questionNumber: 3,
                    question: "A bus starting from rest moves with a uniform acceleration of 0.1 m/s² for 2 minutes. Find: (a) speed acquired (b) distance travelled.",
                    solution: "u = 0, a = 0.1 m/s², t = 2 min = 120s\\n(a) v = u + at = 0 + 0.1 × 120 = 12 m/s\\n(b) s = ut + ½at² = 0 + ½ × 0.1 × (120)² = 720m",
                    difficulty: "medium"
                },
                {
                    id: "ex7-q4",
                    exercise: "Exercise 7",
                    questionNumber: 4,
                    question: "A train is travelling at a speed of 90 km/h. Brakes are applied so as to produce a uniform acceleration of -0.5 m/s². Find how far the train will go before it is brought to rest.",
                    solution: "u = 90 km/h = 90 × 5/18 = 25 m/s\\nv = 0 (comes to rest)\\na = -0.5 m/s²\\nUsing v² = u² + 2as\\n0 = (25)² + 2(-0.5)s\\n0 = 625 - s\\ns = 625m",
                    difficulty: "hard"
                }
            ]
        },
        {
            id: "graphs",
            title: "Graphical Representation of Motion",
            videos: [],
            explanation: "Motion can be represented graphically using distance-time and velocity-time graphs.",
            keyPoints: [
                "Distance-time graph: Shows how distance changes with time",
                "Slope of distance-time graph = speed",
                "Velocity-time graph: Shows how velocity changes with time",
                "Slope of velocity-time graph = acceleration",
                "Area under velocity-time graph = displacement",
                "Horizontal line in v-t graph = uniform velocity (zero acceleration)"
            ],
            diagrams: ["diagrams/science_ch7_graphs.png", "diagrams/science_ch7_velocity_time_graph.png"],
            examples: [
                {
                    id: "ex3",
                    problem: "What does a horizontal line in a velocity-time graph represent?",
                    solution: "A horizontal line in a velocity-time graph represents uniform velocity (constant speed). The slope is zero, meaning acceleration is zero."
                }
            ],
            ncertExercises: [
                {
                    id: "ex7-q5",
                    exercise: "Exercise 7",
                    questionNumber: 5,
                    question: "What is the nature of the distance-time graphs for uniform and non-uniform motion of an object?",
                    solution: "Uniform motion: Straight line (constant slope)\\nNon-uniform motion: Curved line (changing slope)\\nThe slope represents speed, so uniform motion has constant speed (straight line) while non-uniform motion has varying speed (curve).",
                    difficulty: "medium"
                },
                {
                    id: "ex7-q6",
                    exercise: "Exercise 7",
                    questionNumber: 6,
                    question: "What can you say about the motion of an object whose distance-time graph is a straight line parallel to the time axis?",
                    solution: "If the distance-time graph is parallel to the time axis, it means distance is not changing with time. The object is at rest (stationary). Speed = 0.",
                    difficulty: "easy"
                }
            ]
        }
    ]
};
