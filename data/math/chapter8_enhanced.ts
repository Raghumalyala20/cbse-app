import { Chapter } from '../syllabus';

export const chapter8Enhanced: Chapter = {
    id: "quadrilaterals",
    title: "Chapter 8: Quadrilaterals",
    concepts: [
        {
            id: "quad-basics",
            title: "Properties of Quadrilaterals",
            videos: [{ id: "v1", title: "Quadrilaterals Full Chapter", url: "dQw4w9WgXcQ" }],
            explanation: "A quadrilateral is a closed figure with four sides. The sum of all interior angles is 360°. Different types of quadrilaterals have special properties based on their sides and angles.",
            keyPoints: [
                "Sum of all interior angles = 360°",
                "Parallelogram: Opposite sides parallel and equal, opposite angles equal",
                "Rectangle: All angles 90°, opposite sides equal, diagonals equal",
                "Square: All sides equal, all angles 90°, diagonals equal and perpendicular",
                "Rhombus: All sides equal, opposite angles equal, diagonals perpendicular",
                "Trapezium: One pair of opposite sides parallel",
                "Kite: Two pairs of adjacent sides equal"
            ],
            diagrams: [
                "/diagrams/math/chapter8/types_of_quadrilaterals.png",
                "/diagrams/math/chapter8/angle_sum_property.png"
            ],
            examples: [
                {
                    id: "ex1",
                    problem: "Find the fourth angle of a quadrilateral if three angles are 80°, 90°, and 100°.",
                    solution: "Sum of angles = 360°\\nFourth angle = 360° - (80° + 90° + 100°) = 360° - 270° = 90°"
                },
                {
                    id: "ex2",
                    problem: "In a parallelogram, one angle is 65°. Find the other three angles.",
                    solution: "In a parallelogram, opposite angles are equal and adjacent angles are supplementary.\\nOpposite angle = 65°\\nAdjacent angles = 180° - 65° = 115° (two angles)\\nAngles are: 65°, 115°, 65°, 115°"
                }
            ],
            practiceProblems: [
                {
                    id: "p1",
                    question: "Three angles of a quadrilateral are 110°, 72°, and 55°. Find the fourth angle.",
                    answer: "123°",
                    hint: "Sum of all angles in a quadrilateral = 360°",
                    difficulty: "easy"
                },
                {
                    id: "p2",
                    question: "Can a quadrilateral have all four angles as acute angles?",
                    answer: "No, because sum of four acute angles would be less than 360°",
                    hint: "An acute angle is less than 90°",
                    difficulty: "easy"
                },
                {
                    id: "p3",
                    question: "In a rhombus, one diagonal is 12 cm and the other is 16 cm. Find the area.",
                    answer: "96 cm²",
                    hint: "Area of rhombus = (1/2) × d₁ × d₂",
                    difficulty: "medium"
                },
                {
                    id: "p4",
                    question: "The diagonals of a rectangle are 10 cm each. If one side is 6 cm, find the other side.",
                    answer: "8 cm",
                    hint: "Use Pythagoras theorem: diagonal² = length² + breadth²",
                    difficulty: "medium"
                },
                {
                    id: "p5",
                    question: "Prove that the diagonals of a rhombus bisect each other at right angles.",
                    answer: "In a rhombus, all sides are equal. By symmetry and properties of parallelogram, diagonals bisect each other. Since all sides equal, triangles formed are isosceles, making diagonals perpendicular.",
                    hint: "Use properties of parallelogram and isosceles triangles",
                    difficulty: "hard"
                }
            ],
            ncertExercises: [
                {
                    id: "ex8.1-q1",
                    exercise: "Exercise 8.1",
                    questionNumber: 1,
                    question: "The angles of a quadrilateral are in the ratio 3:5:9:13. Find all the angles.",
                    solution: "Let angles be 3x, 5x, 9x, 13x\\nSum = 360°\\n3x + 5x + 9x + 13x = 360°\\n30x = 360°\\nx = 12°\\nAngles are: 36°, 60°, 108°, 156°",
                    difficulty: "medium"
                },
                {
                    id: "ex8.1-q2",
                    exercise: "Exercise 8.1",
                    questionNumber: 2,
                    question: "If the diagonals of a parallelogram are equal, then show that it is a rectangle.",
                    solution: "In a parallelogram ABCD, let AC = BD (diagonals equal)\\nIn △ABC and △DCB:\\nAB = DC (opposite sides of parallelogram)\\nBC = BC (common)\\nAC = DB (given)\\nBy SSS, △ABC ≅ △DCB\\n∴ ∠ABC = ∠DCB\\nBut ∠ABC + ∠DCB = 180° (co-interior angles)\\n∴ ∠ABC = ∠DCB = 90°\\nSimilarly, all angles are 90°\\nHence, it is a rectangle.",
                    difficulty: "hard"
                },
                {
                    id: "ex8.1-q3",
                    exercise: "Exercise 8.1",
                    questionNumber: 3,
                    question: "Show that the diagonals of a square are equal and bisect each other at right angles.",
                    solution: "Let ABCD be a square with diagonals AC and BD intersecting at O.\\n\\n1) Diagonals are equal:\\nIn △ABC and △DCB:\\nAB = DC (sides of square)\\nBC = BC (common)\\n∠ABC = ∠DCB = 90°\\nBy SAS, △ABC ≅ △DCB\\n∴ AC = DB\\n\\n2) Diagonals bisect each other:\\nSquare is a parallelogram, so diagonals bisect each other.\\n\\n3) Diagonals are perpendicular:\\nIn △AOB and △AOD:\\nAO = AO (common)\\nOB = OD (diagonals bisect)\\nAB = AD (sides of square)\\nBy SSS, △AOB ≅ △AOD\\n∴ ∠AOB = ∠AOD\\nBut ∠AOB + ∠AOD = 180° (linear pair)\\n∴ ∠AOB = ∠AOD = 90°",
                    difficulty: "hard"
                },
                {
                    id: "ex8.1-q4",
                    exercise: "Exercise 8.1",
                    questionNumber: 4,
                    question: "Show that if the diagonals of a quadrilateral bisect each other at right angles, then it is a rhombus.",
                    solution: "Let ABCD be a quadrilateral with diagonals AC and BD bisecting at O at 90°.\\nIn △AOB and △AOD:\\nAO = AO (common)\\nOB = OD (diagonals bisect)\\n∠AOB = ∠AOD = 90° (given)\\nBy SAS, △AOB ≅ △AOD\\n∴ AB = AD\\n\\nSimilarly, we can prove:\\nBC = CD, AB = BC, AD = CD\\n∴ AB = BC = CD = DA\\nHence, ABCD is a rhombus.",
                    difficulty: "hard"
                },
                {
                    id: "ex8.1-q5",
                    exercise: "Exercise 8.1",
                    questionNumber: 5,
                    question: "ABCD is a parallelogram and AP and CQ are perpendiculars from vertices A and C on diagonal BD. Show that: (i) △APB ≅ △CQD (ii) AP = CQ",
                    solution: "(i) In △APB and △CQD:\\n∠APB = ∠CQD = 90° (given)\\nAB = CD (opposite sides of parallelogram)\\n∠ABP = ∠CDQ (alternate angles, AB || CD)\\nBy AAS, △APB ≅ △CQD\\n\\n(ii) Since △APB ≅ △CQD\\n∴ AP = CQ (CPCT)",
                    difficulty: "hard"
                },
                {
                    id: "ex8.2-q1",
                    exercise: "Exercise 8.2",
                    questionNumber: 1,
                    question: "ABCD is a quadrilateral in which P, Q, R and S are mid-points of the sides AB, BC, CD and DA. Show that PQRS is a parallelogram.",
                    solution: "Join AC.\\nIn △ABC, P and Q are midpoints of AB and BC.\\nBy midpoint theorem: PQ || AC and PQ = ½AC ... (1)\\n\\nIn △ADC, S and R are midpoints of AD and DC.\\nBy midpoint theorem: SR || AC and SR = ½AC ... (2)\\n\\nFrom (1) and (2):\\nPQ || SR and PQ = SR\\n∴ PQRS is a parallelogram (one pair of opposite sides equal and parallel)",
                    difficulty: "hard"
                },
                {
                    id: "ex8.2-q2",
                    exercise: "Exercise 8.2",
                    questionNumber: 2,
                    question: "ABCD is a rhombus and P, Q, R and S are the mid-points of the sides AB, BC, CD and DA respectively. Show that PQRS is a rectangle.",
                    solution: "From previous question, PQRS is a parallelogram.\\nJoin diagonals AC and BD of rhombus ABCD.\\nIn rhombus, diagonals bisect at right angles.\\n\\nIn △ABC: PQ || AC and PQ = ½AC (midpoint theorem)\\nIn △ABD: PS || BD and PS = ½BD (midpoint theorem)\\n\\nSince AC ⊥ BD in rhombus,\\n∴ PQ ⊥ PS\\n∴ ∠QPS = 90°\\n\\nSince PQRS is a parallelogram with one angle 90°,\\n∴ PQRS is a rectangle.",
                    difficulty: "hard"
                },
                {
                    id: "ex8.2-q3",
                    exercise: "Exercise 8.2",
                    questionNumber: 3,
                    question: "ABCD is a rectangle and P, Q, R and S are mid-points of the sides AB, BC, CD and DA respectively. Show that PQRS is a rhombus.",
                    solution: "PQRS is a parallelogram (proved earlier).\\nJoin diagonals AC and BD of rectangle ABCD.\\nIn rectangle, diagonals are equal: AC = BD\\n\\nIn △ABC: PQ = ½AC (midpoint theorem)\\nIn △ABD: PS = ½BD (midpoint theorem)\\n\\nSince AC = BD,\\n∴ PQ = PS\\n\\nSince PQRS is a parallelogram with adjacent sides equal,\\n∴ PQRS is a rhombus.",
                    difficulty: "hard"
                }
            ]
        }
    ]
};
