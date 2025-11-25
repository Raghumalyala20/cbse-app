import { Chapter } from '../syllabus';

export const chapter1: Chapter = {
    id: "num-sys",
    title: "Chapter 1: Number Systems",
    concepts: [
        {
            id: "rational-numbers",
            title: "Rational Numbers",
            videos: [{ id: "v1", title: "Number Systems Full Chapter", url: "dQw4w9WgXcQ" }],
            explanation: "A rational number is any number that can be expressed as p/q where p and q are integers and q ≠ 0.",
            keyPoints: [
                "Every integer is a rational number",
                "Rational numbers can be terminating or non-terminating recurring decimals",
                "Between any two rational numbers, there are infinitely many rational numbers",
                "Rational numbers can be represented on a number line"
            ],
            diagrams: ["diagrams/math_ch1_number_line.png"],
            examples: [
                {
                    id: "ex1",
                    problem: "Express 0.6̅ as a rational number.",
                    solution: "Let x = 0.6̅ = 0.666...\\nThen 10x = 6.666...\\n10x - x = 6\\n9x = 6\\nx = 6/9 = 2/3"
                }
            ],
            ncertExercises: [
                {
                    id: "ex1.1-q1",
                    exercise: "Exercise 1.1",
                    questionNumber: 1,
                    question: "Is zero a rational number? Can you write it in the form p/q, where p and q are integers and q ≠ 0?",
                    solution: "Yes, zero is a rational number. It can be written as 0/1, 0/2, 0/3, etc., where the numerator is 0 and denominator is any non-zero integer.",
                    difficulty: "easy"
                },
                {
                    id: "ex1.1-q2",
                    exercise: "Exercise 1.1",
                    questionNumber: 2,
                    question: "Find six rational numbers between 3 and 4.",
                    solution: "Method: Convert to fractions with common denominator.\\n3 = 21/7 and 4 = 28/7\\nSix rational numbers: 22/7, 23/7, 24/7, 25/7, 26/7, 27/7\\nOr in decimal: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6",
                    difficulty: "easy"
                }
            ]
        },
        {
            id: "irrational-numbers",
            title: "Irrational Numbers",
            videos: [],
            explanation: "An irrational number is a number that cannot be expressed as p/q where p and q are integers. Their decimal expansion is non-terminating and non-recurring.",
            keyPoints: [
                "√2, √3, √5, π, e are irrational numbers",
                "Sum or product of rational and irrational can be irrational",
                "Irrational numbers cannot be represented as fractions",
                "Decimal expansion is non-terminating non-recurring"
            ],
            diagrams: ["diagrams/math_ch1_irrational_spiral.png"],
            examples: [
                {
                    id: "ex2",
                    problem: "Prove that √2 is irrational.",
                    solution: "Proof by contradiction:\\nAssume √2 = p/q (in lowest terms)\\nThen 2 = p²/q²\\n2q² = p²\\nThis means p² is even, so p is even.\\nLet p = 2m\\nThen 2q² = 4m²\\nq² = 2m²\\nSo q is also even.\\nThis contradicts our assumption that p/q is in lowest terms.\\nTherefore √2 is irrational."
                }
            ],
            ncertExercises: [
                {
                    id: "ex1.3-q1",
                    exercise: "Exercise 1.3",
                    questionNumber: 1,
                    question: "Write the following in decimal form and state what kind of decimal expansion each has: (i) 36/100 (ii) 1/11 (iii) 4/8",
                    solution: "(i) 36/100 = 0.36 (terminating)\\n(ii) 1/11 = 0.090909... = 0.0̅9̅ (non-terminating recurring)\\n(iii) 4/8 = 1/2 = 0.5 (terminating)",
                    difficulty: "easy"
                },
                {
                    id: "ex1.4-q1",
                    exercise: "Exercise 1.4",
                    questionNumber: 1,
                    question: "Classify the following numbers as rational or irrational: (i) 2-√5 (ii) (3+√23)-√23 (iii) 2√7/7√7",
                    solution: "(i) 2-√5 is irrational (rational - irrational = irrational)\\n(ii) (3+√23)-√23 = 3, which is rational\\n(iii) 2√7/7√7 = 2/7, which is rational",
                    difficulty: "medium"
                }
            ]
        },
        {
            id: "real-numbers",
            title: "Real Numbers and Their Decimal Expansions",
            videos: [],
            explanation: "Real numbers include all rational and irrational numbers. Every real number can be represented on the number line.",
            keyPoints: [
                "Real numbers = Rational numbers ∪ Irrational numbers",
                "Every real number has a decimal expansion",
                "Terminating/recurring decimals are rational",
                "Non-terminating non-recurring decimals are irrational",
                "Real numbers satisfy closure, commutative, associative, and distributive properties"
            ],
            diagrams: ["diagrams/math_ch1_real_number_system.png"],
            examples: [
                {
                    id: "ex3",
                    problem: "Find three different irrational numbers between 5/7 and 9/11.",
                    solution: "5/7 ≈ 0.714285... and 9/11 ≈ 0.818181...\\nThree irrational numbers:\\n0.72072007200072...\\n0.75075007500075...\\n0.80080008000080..."
                }
            ],
            ncertExercises: [
                {
                    id: "ex1.5-q1",
                    exercise: "Exercise 1.5",
                    questionNumber: 1,
                    question: "Classify the following as rational or irrational: √23, √225, 0.3796, 7.478478..., 1.101001000100001...",
                    solution: "√23 - irrational (non-perfect square)\\n√225 = 15 - rational\\n0.3796 - rational (terminating)\\n7.478478... = 7.4̅7̅8̅ - rational (recurring)\\n1.101001000100001... - irrational (non-terminating non-recurring)",
                    difficulty: "medium"
                },
                {
                    id: "ex1.6-q1",
                    exercise: "Exercise 1.6",
                    questionNumber: 1,
                    question: "Find: (i) 64^(1/2) (ii) 32^(1/5) (iii) 125^(1/3)",
                    solution: "(i) 64^(1/2) = √64 = 8\\n(ii) 32^(1/5) = ⁵√32 = 2\\n(iii) 125^(1/3) = ³√125 = 5",
                    difficulty: "easy"
                }
            ]
        }
    ]
};
