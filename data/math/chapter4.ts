import { Chapter } from '../syllabus';

export const chapter4: Chapter = {
    id: "linear-eq",
    title: "Chapter 4: Linear Equations in Two Variables",
    concepts: [
        {
            id: "linear-equations-intro",
            title: "Linear Equations in Two Variables",
            videos: [{ id: "v1", title: "Linear Equations Full Chapter", url: "dQw4w9WgXcQ" }],
            explanation: "A linear equation in two variables is an equation of the form ax + by + c = 0, where a, b, c are real numbers and a, b are not both zero.",
            keyPoints: [
                "Standard form: ax + by + c = 0",
                "Has infinitely many solutions",
                "Each solution is an ordered pair (x, y)",
                "Graph is always a straight line",
                "Two variables: usually x and y"
            ],
            diagrams: ["diagrams/math_ch4_linear_equation.png"],
            examples: [
                {
                    id: "ex1",
                    problem: "Write three solutions for the equation 2x + y = 7.",
                    solution: "When x = 0: y = 7, solution (0, 7)\\nWhen x = 1: y = 5, solution (1, 5)\\nWhen x = 2: y = 3, solution (2, 3)\\nThree solutions: (0, 7), (1, 5), (2, 3)"
                }
            ],
            ncertExercises: [
                {
                    id: "ex4.1-q1",
                    exercise: "Exercise 4.1",
                    questionNumber: 1,
                    question: "The cost of a notebook is twice the cost of a pen. Write a linear equation in two variables to represent this statement.",
                    solution: "Let cost of notebook = x and cost of pen = y\\nAccording to the statement: x = 2y\\nOr: x - 2y = 0\\nLinear equation: x - 2y = 0",
                    difficulty: "easy"
                },
                {
                    id: "ex4.2-q1",
                    exercise: "Exercise 4.2",
                    questionNumber: 1,
                    question: "Which one of the following options is true, and why? y = 3x + 5 has: (i) a unique solution (ii) only two solutions (iii) infinitely many solutions",
                    solution: "(iii) infinitely many solutions is correct.\\nReason: A linear equation in two variables has infinitely many solutions because for each value of x, we get a corresponding value of y.",
                    difficulty: "easy"
                },
                {
                    id: "ex4.3-q1",
                    exercise: "Exercise 4.3",
                    questionNumber: 1,
                    question: "Draw the graph of each of the following linear equations: (i) x + y = 4 (ii) x - y = 2",
                    solution: "(i) x + y = 4\\nWhen x = 0, y = 4: point (0, 4)\\nWhen y = 0, x = 4: point (4, 0)\\nWhen x = 2, y = 2: point (2, 2)\\nPlot and join these points\\n\\n(ii) x - y = 2\\nWhen x = 0, y = -2: point (0, -2)\\nWhen y = 0, x = 2: point (2, 0)\\nWhen x = 4, y = 2: point (4, 2)\\nPlot and join these points",
                    difficulty: "medium"
                }
            ]
        },
        {
            id: "graph-linear-equations",
            title: "Graph of Linear Equations",
            videos: [],
            explanation: "The graph of a linear equation in two variables is always a straight line. Every point on the line is a solution of the equation.",
            keyPoints: [
                "Graph is a straight line",
                "Need at least 2 points to draw the line",
                "x-intercept: point where line crosses x-axis (y = 0)",
                "y-intercept: point where line crosses y-axis (x = 0)",
                "Parallel lines have same slope",
                "Equation y = mx + c: m is slope, c is y-intercept"
            ],
            diagrams: ["diagrams/math_ch4_graph_lines.png"],
            examples: [
                {
                    id: "ex2",
                    problem: "Find the points where the line 3x + 2y = 12 intersects the axes.",
                    solution: "x-intercept (y = 0): 3x = 12, x = 4, point (4, 0)\\ny-intercept (x = 0): 2y = 12, y = 6, point (0, 6)"
                }
            ],
            ncertExercises: [
                {
                    id: "ex4.3-q2",
                    exercise: "Exercise 4.3",
                    questionNumber: 2,
                    question: "Give the equations of two lines passing through (2, 14). How many more such lines are there, and why?",
                    solution: "Two equations: x + y = 16 and 2x + y = 18\\n(Both satisfy the point (2, 14))\\nThere are infinitely many such lines because infinite lines can pass through a single point.",
                    difficulty: "medium"
                },
                {
                    id: "ex4.4-q1",
                    exercise: "Exercise 4.4",
                    questionNumber: 1,
                    question: "Give the geometric representations of y = 3 as an equation in: (i) one variable (ii) two variables",
                    solution: "(i) In one variable: y = 3 represents a point on the number line\\n(ii) In two variables: y = 3 represents a line parallel to the x-axis passing through (0, 3)",
                    difficulty: "medium"
                }
            ]
        }
    ]
};
