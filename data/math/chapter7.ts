import { Chapter } from '../syllabus';

export const chapter7: Chapter = {
    id: "triangles",
    title: "Chapter 7: Triangles",
    concepts: [
        {
            id: "triangle-basics",
            title: "Introduction to Triangles",
            videos: [{ id: "v1", title: "Triangles Full Chapter", url: "dQw4w9WgXcQ" }],
            explanation: "A triangle is a closed figure formed by three line segments. It has three sides, three angles, and three vertices.",
            keyPoints: [
                "Sum of all angles = 180°",
                "Sum of any two sides > third side",
                "Exterior angle = sum of two opposite interior angles",
                "Types by sides: Equilateral, Isosceles, Scalene",
                "Types by angles: Acute, Right, Obtuse"
            ],
            diagrams: ["diagrams/math_ch7_triangle_types.png"],
            examples: [
                {
                    id: "ex1",
                    problem: "Two angles of a triangle are 65° and 45°. Find the third angle.",
                    solution: "Sum of angles = 180°\\nThird angle = 180° - (65° + 45°) = 180° - 110° = 70°"
                }
            ],
            ncertExercises: [
                {
                    id: "ex7.1-q1",
                    exercise: "Exercise 7.1",
                    questionNumber: 1,
                    question: "In △ABC, if ∠A = 50° and ∠B = 60°, find ∠C.",
                    solution: "∠A + ∠B + ∠C = 180° (angle sum property)\\n50° + 60° + ∠C = 180°\\n∠C = 180° - 110° = 70°",
                    difficulty: "easy"
                },
                {
                    id: "ex7.1-q2",
                    exercise: "Exercise 7.1",
                    questionNumber: 2,
                    question: "The angles of a triangle are in the ratio 2:3:4. Find the angles.",
                    solution: "Let angles be 2x, 3x, 4x\\n2x + 3x + 4x = 180°\\n9x = 180°\\nx = 20°\\nAngles are: 40°, 60°, 80°",
                    difficulty: "medium"
                }
            ]
        },
        {
            id: "congruence",
            title: "Congruence of Triangles",
            videos: [],
            explanation: "Two triangles are congruent if they have the same shape and size. All corresponding sides and angles are equal.",
            keyPoints: [
                "SSS: Three sides equal",
                "SAS: Two sides and included angle equal",
                "ASA: Two angles and included side equal",
                "AAS: Two angles and one side equal",
                "RHS: Right angle, hypotenuse, and one side equal",
                "Congruent triangles: ≅ symbol"
            ],
            diagrams: ["diagrams/math_ch7_congruence_criteria.png"],
            examples: [
                {
                    id: "ex2",
                    problem: "In △ABC and △PQR, AB = PQ, BC = QR, and ∠B = ∠Q. Are the triangles congruent?",
                    solution: "Yes, by SAS congruence criterion.\\nTwo sides (AB = PQ, BC = QR) and the included angle (∠B = ∠Q) are equal.\\nTherefore, △ABC ≅ △PQR"
                }
            ],
            ncertExercises: [
                {
                    id: "ex7.2-q1",
                    exercise: "Exercise 7.2",
                    questionNumber: 1,
                    question: "In △ABC and △DEF, AB = DE, BC = EF, and ∠B = ∠E. Which congruence criterion can be used?",
                    solution: "SAS (Side-Angle-Side) congruence criterion.\\nTwo sides and the included angle are equal.",
                    difficulty: "easy"
                },
                {
                    id: "ex7.2-q2",
                    exercise: "Exercise 7.2",
                    questionNumber: 2,
                    question: "In △ABC and △PQR, ∠A = ∠P, ∠C = ∠R, and AC = PR. Are the triangles congruent?",
                    solution: "Yes, by ASA congruence criterion.\\n∠A = ∠P, AC = PR (included side), ∠C = ∠R\\nTherefore, △ABC ≅ △PQR",
                    difficulty: "medium"
                }
            ]
        },
        {
            id: "inequalities",
            title: "Inequalities in Triangles",
            videos: [],
            explanation: "Relationships between sides and angles of a triangle based on inequalities.",
            keyPoints: [
                "If two sides are unequal, the longer side has greater opposite angle",
                "If two angles are unequal, the greater angle has longer opposite side",
                "Sum of any two sides > third side",
                "Difference of any two sides < third side"
            ],
            diagrams: ["diagrams/math_ch7_triangle_inequality.png"],
            examples: [
                {
                    id: "ex3",
                    problem: "Can a triangle have sides 3 cm, 4 cm, and 8 cm?",
                    solution: "Check triangle inequality: sum of two sides > third side\\n3 + 4 = 7, which is NOT > 8\\nTherefore, NO, such a triangle cannot exist."
                }
            ],
            ncertExercises: [
                {
                    id: "ex7.3-q1",
                    exercise: "Exercise 7.3",
                    questionNumber: 1,
                    question: "Is it possible to have a triangle with sides 2 cm, 3 cm, 5 cm?",
                    solution: "Check: 2 + 3 = 5 (not greater than 5)\\nNo, it's not possible. The sum of two sides must be strictly greater than the third side.",
                    difficulty: "easy"
                },
                {
                    id: "ex7.4-q1",
                    exercise: "Exercise 7.4",
                    questionNumber: 1,
                    question: "Show that in a right triangle, the hypotenuse is the longest side.",
                    solution: "In a right triangle, one angle is 90°, which is the largest angle.\\nThe side opposite to the largest angle is the longest side.\\nTherefore, the hypotenuse (opposite to 90°) is the longest side.",
                    difficulty: "medium"
                }
            ]
        }
    ]
};
