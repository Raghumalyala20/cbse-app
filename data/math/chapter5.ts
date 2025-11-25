import { Chapter } from '../syllabus';

export const chapter5: Chapter = {
    id: "euclid",
    title: "Chapter 5: Introduction to Euclid's Geometry",
    concepts: [
        {
            id: "euclid-intro",
            title: "Euclid's Definitions and Axioms",
            videos: [{ id: "v1", title: "Euclid's Geometry Full Chapter", url: "dQw4w9WgXcQ" }],
            explanation: "Euclid, the Greek mathematician, introduced a systematic approach to geometry through definitions, axioms, and postulates around 300 BCE.",
            keyPoints: [
                "Point: That which has no part (no dimensions)",
                "Line: Breadthless length",
                "Surface: That which has length and breadth only",
                "Axiom: Self-evident truth (applies to all sciences)",
                "Postulate: Assumption specific to geometry",
                "Theorem: Statement that requires proof"
            ],
            diagrams: ["diagrams/math_ch5_euclid_elements.png"],
            examples: [
                {
                    id: "ex1",
                    problem: "Give an example of Euclid's axiom from everyday life.",
                    solution: "Axiom: Things which are equal to the same thing are equal to one another.\\nExample: If Ram's height = Shyam's height and Shyam's height = Mohan's height, then Ram's height = Mohan's height."
                }
            ],
            ncertExercises: [
                {
                    id: "ex5.1-q1",
                    exercise: "Exercise 5.1",
                    questionNumber: 1,
                    question: "Which of the following statements are true and which are false? Give reasons. (i) Only one line can pass through a single point (ii) There are infinite number of lines which pass through two distinct points",
                    solution: "(i) False. Infinitely many lines can pass through a single point.\\n(ii) False. Only one unique line can pass through two distinct points (Euclid's Postulate 1).",
                    difficulty: "easy"
                },
                {
                    id: "ex5.1-q2",
                    exercise: "Exercise 5.1",
                    questionNumber: 2,
                    question: "Give a definition for each of the following terms. Are there other terms that need to be defined first? (i) parallel lines (ii) perpendicular lines (iii) line segment",
                    solution: "(i) Parallel lines: Two lines in a plane that never intersect. (Need: line, plane)\\n(ii) Perpendicular lines: Two lines that intersect at 90°. (Need: line, angle)\\n(iii) Line segment: Part of a line with two endpoints. (Need: line, point)",
                    difficulty: "medium"
                }
            ]
        },
        {
            id: "euclid-postulates",
            title: "Euclid's Five Postulates",
            videos: [],
            explanation: "Euclid's five postulates form the foundation of plane geometry.",
            keyPoints: [
                "Postulate 1: A straight line may be drawn from any point to any other point",
                "Postulate 2: A terminated line can be produced indefinitely",
                "Postulate 3: A circle can be drawn with any center and any radius",
                "Postulate 4: All right angles are equal to one another",
                "Postulate 5: If a line falls on two lines making interior angles on same side less than 180°, the lines will meet on that side"
            ],
            diagrams: ["diagrams/math_ch5_postulates.png", "diagrams/math_ch5_parallel_postulate.png"],
            examples: [
                {
                    id: "ex2",
                    problem: "State Euclid's fifth postulate in simple terms.",
                    solution: "If a straight line falling on two straight lines makes the interior angles on the same side less than two right angles (180°), then the two lines, if extended indefinitely, will meet on that side."
                }
            ],
            ncertExercises: [
                {
                    id: "ex5.2-q1",
                    exercise: "Exercise 5.2",
                    questionNumber: 1,
                    question: "How would you rewrite Euclid's fifth postulate so that it would be easier to understand?",
                    solution: "Two distinct intersecting lines cannot be parallel to the same line. OR: For every line and a point not on it, there exists a unique line through that point parallel to the given line.",
                    difficulty: "medium"
                },
                {
                    id: "ex5.2-q2",
                    exercise: "Exercise 5.2",
                    questionNumber: 2,
                    question: "Does Euclid's fifth postulate imply the existence of parallel lines? Explain.",
                    solution: "Yes. If the sum of interior angles equals 180°, the lines will never meet, meaning they are parallel. This is the converse interpretation of the fifth postulate.",
                    difficulty: "hard"
                }
            ]
        }
    ]
};
