import { Chapter } from '../syllabus';

export const chapter6: Chapter = {
    id: "lines-angles",
    title: "Chapter 6: Lines and Angles",
    concepts: [
        {
            id: "basic-terms",
            title: "Basic Terms and Definitions",
            videos: [{ id: "v1", title: "Lines and Angles Full Chapter", url: "dQw4w9WgXcQ" }],
            explanation: "Understanding fundamental concepts of points, lines, rays, line segments, and angles.",
            keyPoints: [
                "Point: Exact location in space",
                "Line: Extends infinitely in both directions",
                "Ray: Has one endpoint, extends infinitely in one direction",
                "Line segment: Part of line with two endpoints",
                "Angle: Formed by two rays with common endpoint",
                "Vertex: Common endpoint of two rays forming an angle"
            ],
            diagrams: ["diagrams/math_ch6_basic_terms.png"],
            examples: [
                {
                    id: "ex1",
                    problem: "Identify the type of angle: 45°, 90°, 120°, 180°.",
                    solution: "45° - Acute angle (less than 90°)\\n90° - Right angle\\n120° - Obtuse angle (between 90° and 180°)\\n180° - Straight angle"
                }
            ],
            ncertExercises: [
                {
                    id: "ex6.1-q1",
                    exercise: "Exercise 6.1",
                    questionNumber: 1,
                    question: "In the figure, lines AB and CD intersect at O. If ∠AOC + ∠BOE = 70° and ∠BOD = 40°, find ∠BOE and reflex ∠COE.",
                    solution: "∠AOC = ∠BOD = 40° (vertically opposite angles)\\n∠AOC + ∠BOE = 70°\\n40° + ∠BOE = 70°\\n∠BOE = 30°\\n∠COE = 180° - 40° - 30° = 110°\\nReflex ∠COE = 360° - 110° = 250°",
                    difficulty: "medium"
                }
            ]
        },
        {
            id: "pairs-of-angles",
            title: "Pairs of Angles",
            videos: [],
            explanation: "Special relationships between pairs of angles.",
            keyPoints: [
                "Complementary angles: Sum = 90°",
                "Supplementary angles: Sum = 180°",
                "Adjacent angles: Share common vertex and arm",
                "Linear pair: Adjacent angles whose sum = 180°",
                "Vertically opposite angles: Equal when two lines intersect"
            ],
            diagrams: ["diagrams/math_ch6_angle_pairs.png"],
            examples: [
                {
                    id: "ex2",
                    problem: "Find the complement and supplement of 65°.",
                    solution: "Complement = 90° - 65° = 25°\\nSupplement = 180° - 65° = 115°"
                }
            ],
            ncertExercises: [
                {
                    id: "ex6.1-q2",
                    exercise: "Exercise 6.1",
                    questionNumber: 2,
                    question: "In the figure, lines XY and MN intersect at O. If ∠POY = 90° and a:b = 2:3, find c.",
                    solution: "Let a = 2x and b = 3x\\na + b = 90° (linear pair with ∠POY)\\n2x + 3x = 90°\\n5x = 90°\\nx = 18°\\na = 36°, b = 54°\\nc = b = 54° (vertically opposite angles)",
                    difficulty: "medium"
                }
            ]
        },
        {
            id: "parallel-lines",
            title: "Parallel Lines and Transversal",
            videos: [],
            explanation: "When a transversal intersects two parallel lines, several angle relationships are formed.",
            keyPoints: [
                "Transversal: Line intersecting two or more lines",
                "Corresponding angles are equal",
                "Alternate interior angles are equal",
                "Alternate exterior angles are equal",
                "Co-interior angles are supplementary (sum = 180°)",
                "If corresponding angles are equal, lines are parallel"
            ],
            diagrams: ["diagrams/math_ch6_parallel_lines.png", "diagrams/math_ch6_transversal.png"],
            examples: [
                {
                    id: "ex3",
                    problem: "Two parallel lines are cut by a transversal. If one interior angle is 65°, find its co-interior angle.",
                    solution: "Co-interior angles are supplementary\\nCo-interior angle = 180° - 65° = 115°"
                }
            ],
            ncertExercises: [
                {
                    id: "ex6.2-q1",
                    exercise: "Exercise 6.2",
                    questionNumber: 1,
                    question: "In the figure, if AB || CD, CD || EF and y:z = 3:7, find x.",
                    solution: "Since AB || CD and CD || EF, we have AB || EF\\ny + z = 180° (co-interior angles)\\nGiven y:z = 3:7, let y = 3k and z = 7k\\n3k + 7k = 180°\\n10k = 180°\\nk = 18°\\ny = 54°, z = 126°\\nx = y = 54° (corresponding angles)",
                    difficulty: "hard"
                },
                {
                    id: "ex6.3-q1",
                    exercise: "Exercise 6.3",
                    questionNumber: 1,
                    question: "In the figure, sides QP and RQ of △PQR are produced to points S and T respectively. If ∠SPR = 135° and ∠PQT = 110°, find ∠PRQ.",
                    solution: "∠SPR + ∠QPR = 180° (linear pair)\\n∠QPR = 180° - 135° = 45°\\n∠PQT + ∠PQR = 180° (linear pair)\\n∠PQR = 180° - 110° = 70°\\nIn △PQR: ∠QPR + ∠PQR + ∠PRQ = 180°\\n45° + 70° + ∠PRQ = 180°\\n∠PRQ = 65°",
                    difficulty: "hard"
                }
            ]
        }
    ]
};
