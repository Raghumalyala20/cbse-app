import { Chapter } from '../syllabus';

export const chapter9Enhanced: Chapter = {
    id: "circles",
    title: "Chapter 9: Circles",
    concepts: [
        {
            id: "circle-basics",
            title: "Circles and their Properties",
            videos: [{ id: "v1", title: "Circles Full Chapter", url: "dQw4w9WgXcQ" }],
            explanation: "A circle is the locus of all points equidistant from a fixed point called the center. Understanding circle properties is fundamental to geometry.",
            keyPoints: [
                "Radius: Distance from center to any point on circle",
                "Diameter = 2 × Radius (longest chord)",
                "Chord: Line segment joining two points on circle",
                "Equal chords are equidistant from center",
                "Perpendicular from center to chord bisects the chord",
                "Angle in a semicircle is 90°",
                "Angles in the same segment are equal",
                "Cyclic quadrilateral: opposite angles sum to 180°"
            ],
            diagrams: ["/diagrams/circle_parts.png", "/diagrams/chord_bisection.png", "/diagrams/equal_chords.png"],
            examples: [
                {
                    id: "ex1",
                    problem: "If radius of a circle is 5 cm, find the length of a chord that is 3 cm from the center.",
                    solution: "Using Pythagoras theorem in the right triangle formed:\\nLet half of chord = x\\nx² + 3² = 5²\\nx² = 25 - 9 = 16\\nx = 4 cm\\nChord length = 2x = 8 cm"
                },
                {
                    id: "ex2",
                    problem: "Two chords AB and CD of a circle are each at distances 4 cm from the center. If AB = 6 cm, find CD.",
                    solution: "Equal chords are equidistant from center.\\nSince both chords are at same distance (4 cm) from center,\\nAB = CD\\nTherefore, CD = 6 cm"
                }
            ],
            practiceProblems: [
                {
                    id: "p1",
                    question: "If the diameter of a circle is 14 cm, find its radius.",
                    answer: "7 cm",
                    hint: "Radius = Diameter ÷ 2",
                    difficulty: "easy"
                },
                {
                    id: "p2",
                    question: "A chord of length 8 cm is at a distance of 3 cm from the center. Find the radius.",
                    answer: "5 cm",
                    hint: "Use Pythagoras: r² = (chord/2)² + distance²",
                    difficulty: "medium"
                },
                {
                    id: "p3",
                    question: "Two circles of radii 5 cm and 3 cm intersect. Can the distance between their centers be 10 cm?",
                    answer: "No, maximum distance = 5 + 3 = 8 cm",
                    hint: "Distance between centers ≤ sum of radii for intersecting circles",
                    difficulty: "medium"
                },
                {
                    id: "p4",
                    question: "In a circle, a chord of length 24 cm is at a distance of 5 cm from the center. Find the length of another chord at distance 12 cm.",
                    answer: "10 cm",
                    hint: "First find radius using Pythagoras, then use it for second chord",
                    difficulty: "hard"
                }
            ],
            ncertExercises: [
                {
                    id: "ex9.1-q1",
                    exercise: "Exercise 9.1",
                    questionNumber: 1,
                    question: "Fill in the blanks: (i) The center of a circle lies in _____ of the circle. (ii) A point whose distance from the center is greater than radius lies in _____ of the circle.",
                    solution: "(i) The center lies in **interior** of the circle.\\n(ii) A point at distance greater than radius lies in **exterior** of the circle.",
                    difficulty: "easy"
                },
                {
                    id: "ex9.1-q2",
                    exercise: "Exercise 9.1",
                    questionNumber: 2,
                    question: "Write True or False: (i) A chord of a circle which is twice as long as its radius is a diameter. (ii) If a circle is divided into three equal arcs, each is a major arc.",
                    solution: "(i) False. Diameter = 2 × radius, but a chord of length 2r may not pass through center.\\n(ii) False. Each arc is 120°, which is less than 180°, so each is a minor arc.",
                    difficulty: "easy"
                },
                {
                    id: "ex9.2-q1",
                    exercise: "Exercise 9.2",
                    questionNumber: 1,
                    question: "Two circles of radii 5 cm and 3 cm intersect at two points and the distance between their centers is 4 cm. Find the length of the common chord.",
                    solution: "Let O₁ and O₂ be centers with radii 5 cm and 3 cm.\\nLet AB be common chord intersecting O₁O₂ at M.\\nO₁M ⊥ AB (perpendicular from center bisects chord)\\nLet O₁M = x, then O₂M = 4 - x\\nIn △O₁MA: AM² = 5² - x²\\nIn △O₂MA: AM² = 3² - (4-x)²\\n25 - x² = 9 - 16 + 8x - x²\\n25 = -7 + 8x\\n8x = 32\\nx = 4 cm\\nAM² = 25 - 16 = 9\\nAM = 3 cm\\nAB = 2 × 3 = 6 cm",
                    difficulty: "hard"
                },
                {
                    id: "ex9.3-q1",
                    exercise: "Exercise 9.3",
                    questionNumber: 1,
                    question: "Prove that equal chords of a circle subtend equal angles at the center.",
                    solution: "Let AB and CD be equal chords of circle with center O.\\nTo prove: ∠AOB = ∠COD\\n\\nIn △AOB and △COD:\\nOA = OC (radii)\\nOB = OD (radii)\\nAB = CD (given)\\nBy SSS congruence, △AOB ≅ △COD\\n∴ ∠AOB = ∠COD (CPCT)",
                    difficulty: "medium"
                },
                {
                    id: "ex9.3-q2",
                    exercise: "Exercise 9.3",
                    questionNumber: 2,
                    question: "Prove that if chords of congruent circles subtend equal angles at their centers, then the chords are equal.",
                    solution: "Let circles with centers O and O' be congruent (equal radii).\\nLet AB and CD be chords with ∠AOB = ∠CO'D\\n\\nIn △AOB and △CO'D:\\nOA = O'C (radii of congruent circles)\\nOB = O'D (radii of congruent circles)\\n∠AOB = ∠CO'D (given)\\nBy SAS congruence, △AOB ≅ △CO'D\\n∴ AB = CD (CPCT)",
                    difficulty: "medium"
                }
            ]
        }
    ]
};
