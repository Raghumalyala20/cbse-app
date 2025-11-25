import { Chapter } from '../syllabus';

export const chapter2: Chapter = {
    id: "polynomials",
    title: "Chapter 2: Polynomials",
    concepts: [
        {
            id: "polynomial-basics",
            title: "Introduction to Polynomials",
            videos: [{ id: "v1", title: "Polynomials Full Chapter", url: "dQw4w9WgXcQ" }],
            explanation: "A polynomial is an algebraic expression consisting of variables and coefficients, involving only addition, subtraction, multiplication, and non-negative integer exponents.",
            keyPoints: [
                "Degree: Highest power of the variable",
                "Linear polynomial: degree 1 (ax + b)",
                "Quadratic polynomial: degree 2 (ax² + bx + c)",
                "Cubic polynomial: degree 3 (ax³ + bx² + cx + d)",
                "Constant polynomial: degree 0",
                "Zero polynomial: has no degree"
            ],
            diagrams: ["diagrams/math_ch2_polynomial_types.png"],
            examples: [
                {
                    id: "ex1",
                    problem: "Find the degree of the polynomial 5x³ + 4x² + 7x.",
                    solution: "The highest power of x is 3.\\nTherefore, degree = 3 (cubic polynomial)"
                }
            ],
            ncertExercises: [
                {
                    id: "ex2.1-q1",
                    exercise: "Exercise 2.1",
                    questionNumber: 1,
                    question: "Which of the following expressions are polynomials? Justify your answer: (i) 8 (ii) √3x² - 2x (iii) 1 - √5x (iv) 1/5x⁻² + 5x + 7",
                    solution: "(i) 8 is a polynomial (constant polynomial)\\n(ii) √3x² - 2x is a polynomial (coefficients can be irrational)\\n(iii) 1 - √5x is a polynomial\\n(iv) 1/5x⁻² + 5x + 7 is NOT a polynomial (negative exponent)",
                    difficulty: "easy"
                },
                {
                    id: "ex2.1-q2",
                    exercise: "Exercise 2.1",
                    questionNumber: 2,
                    question: "Write the coefficients of x² in each of the following: (i) 2 + x² + x (ii) 2 - x² + x³ (iii) πx²/2 + x",
                    solution: "(i) Coefficient of x² = 1\\n(ii) Coefficient of x² = -1\\n(iii) Coefficient of x² = π/2",
                    difficulty: "easy"
                }
            ]
        },
        {
            id: "zeroes-polynomial",
            title: "Zeroes of a Polynomial",
            videos: [],
            explanation: "A zero of a polynomial p(x) is a value of x for which p(x) = 0. Geometrically, zeroes are the x-coordinates where the graph intersects the x-axis.",
            keyPoints: [
                "If p(a) = 0, then a is a zero of polynomial p(x)",
                "A linear polynomial has at most 1 zero",
                "A quadratic polynomial has at most 2 zeroes",
                "A cubic polynomial has at most 3 zeroes",
                "Number of zeroes ≤ degree of polynomial"
            ],
            diagrams: ["diagrams/math_ch2_polynomial_graph.png"],
            examples: [
                {
                    id: "ex2",
                    problem: "Find the zero of the polynomial p(x) = 2x + 5.",
                    solution: "Set p(x) = 0\\n2x + 5 = 0\\n2x = -5\\nx = -5/2\\nZero is -5/2"
                }
            ],
            ncertExercises: [
                {
                    id: "ex2.2-q1",
                    exercise: "Exercise 2.2",
                    questionNumber: 1,
                    question: "Find the value of the polynomial 5x - 4x² + 3 at x = 0, x = -1, and x = 2.",
                    solution: "At x = 0: 5(0) - 4(0)² + 3 = 3\\nAt x = -1: 5(-1) - 4(-1)² + 3 = -5 - 4 + 3 = -6\\nAt x = 2: 5(2) - 4(2)² + 3 = 10 - 16 + 3 = -3",
                    difficulty: "easy"
                },
                {
                    id: "ex2.2-q2",
                    exercise: "Exercise 2.2",
                    questionNumber: 2,
                    question: "Find p(0), p(1), and p(2) for the polynomial p(y) = y² - y + 1.",
                    solution: "p(0) = 0² - 0 + 1 = 1\\np(1) = 1² - 1 + 1 = 1\\np(2) = 2² - 2 + 1 = 4 - 2 + 1 = 3",
                    difficulty: "easy"
                }
            ]
        },
        {
            id: "remainder-theorem",
            title: "Remainder Theorem and Factor Theorem",
            videos: [],
            explanation: "Remainder Theorem: When polynomial p(x) is divided by (x - a), the remainder is p(a). Factor Theorem: (x - a) is a factor of p(x) if and only if p(a) = 0.",
            keyPoints: [
                "Remainder Theorem: remainder = p(a) when dividing by (x - a)",
                "Factor Theorem: if p(a) = 0, then (x - a) is a factor",
                "Used to find factors without actual division",
                "Helps in factorization of polynomials"
            ],
            diagrams: ["diagrams/math_ch2_factor_theorem.png"],
            examples: [
                {
                    id: "ex3",
                    problem: "Find the remainder when x³ + 3x² + 3x + 1 is divided by x + 1.",
                    solution: "Using Remainder Theorem:\\nDividing by (x + 1) means a = -1\\np(-1) = (-1)³ + 3(-1)² + 3(-1) + 1\\n= -1 + 3 - 3 + 1 = 0\\nRemainder = 0"
                }
            ],
            ncertExercises: [
                {
                    id: "ex2.3-q1",
                    exercise: "Exercise 2.3",
                    questionNumber: 1,
                    question: "Find the remainder when x³ + 3x² + 3x + 1 is divided by x.",
                    solution: "Using Remainder Theorem, divide by x means a = 0\\np(0) = 0³ + 3(0)² + 3(0) + 1 = 1\\nRemainder = 1",
                    difficulty: "easy"
                },
                {
                    id: "ex2.4-q1",
                    exercise: "Exercise 2.4",
                    questionNumber: 1,
                    question: "Determine which of the following polynomials has (x + 1) as a factor: (i) x³ + x² + x + 1 (ii) x⁴ + x³ + x² + x + 1",
                    solution: "(i) p(x) = x³ + x² + x + 1\\np(-1) = (-1)³ + (-1)² + (-1) + 1 = -1 + 1 - 1 + 1 = 0\\nYes, (x + 1) is a factor\\n\\n(ii) p(x) = x⁴ + x³ + x² + x + 1\\np(-1) = 1 - 1 + 1 - 1 + 1 = 1 ≠ 0\\nNo, (x + 1) is not a factor",
                    difficulty: "medium"
                }
            ]
        },
        {
            id: "factorization",
            title: "Factorization of Polynomials",
            videos: [],
            explanation: "Factorization is the process of expressing a polynomial as a product of its factors. Common methods include splitting the middle term, using identities, and factor theorem.",
            keyPoints: [
                "a² - b² = (a + b)(a - b)",
                "(a + b)² = a² + 2ab + b²",
                "(a - b)² = a² - 2ab + b²",
                "a³ + b³ = (a + b)(a² - ab + b²)",
                "a³ - b³ = (a - b)(a² + ab + b²)",
                "(x + a)(x + b) = x² + (a + b)x + ab"
            ],
            diagrams: ["diagrams/math_ch2_algebraic_identities.png"],
            examples: [
                {
                    id: "ex4",
                    problem: "Factorize x² + 5x + 6.",
                    solution: "Find two numbers whose sum = 5 and product = 6\\nNumbers are 2 and 3\\nx² + 5x + 6 = x² + 2x + 3x + 6\\n= x(x + 2) + 3(x + 2)\\n= (x + 2)(x + 3)"
                }
            ],
            ncertExercises: [
                {
                    id: "ex2.5-q1",
                    exercise: "Exercise 2.5",
                    questionNumber: 1,
                    question: "Use suitable identities to find the following products: (i) (x + 4)(x + 10) (ii) (x + 8)(x - 10)",
                    solution: "(i) (x + 4)(x + 10) = x² + (4 + 10)x + 4×10 = x² + 14x + 40\\n(ii) (x + 8)(x - 10) = x² + (8 - 10)x + 8×(-10) = x² - 2x - 80",
                    difficulty: "easy"
                },
                {
                    id: "ex2.5-q2",
                    exercise: "Exercise 2.5",
                    questionNumber: 2,
                    question: "Factorize: (i) 4x² + 9y² + 16z² + 12xy - 24yz - 16xz",
                    solution: "Rearrange: (2x)² + (3y)² + (-4z)² + 2(2x)(3y) + 2(3y)(-4z) + 2(-4z)(2x)\\nThis is of the form a² + b² + c² + 2ab + 2bc + 2ca = (a + b + c)²\\n= (2x + 3y - 4z)²",
                    difficulty: "hard"
                }
            ]
        }
    ]
};
