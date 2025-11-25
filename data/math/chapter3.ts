import { Chapter } from '../syllabus';

export const chapter3: Chapter = {
    id: "coord-geom",
    title: "Chapter 3: Coordinate Geometry",
    concepts: [
        {
            id: "cartesian-system",
            title: "Cartesian System",
            videos: [{ id: "v1", title: "Coordinate Geometry Full Chapter", url: "dQw4w9WgXcQ" }],
            explanation: "The Cartesian coordinate system uses two perpendicular number lines (x-axis and y-axis) to locate points in a plane.",
            keyPoints: [
                "Origin: Point of intersection of axes (0, 0)",
                "x-coordinate (abscissa): distance from y-axis",
                "y-coordinate (ordinate): distance from x-axis",
                "Point notation: (x, y)",
                "Four quadrants: I (+,+), II (-,+), III (-,-), IV (+,-)",
                "Points on x-axis have y = 0",
                "Points on y-axis have x = 0"
            ],
            diagrams: ["diagrams/math_ch3_cartesian_plane.png", "diagrams/math_ch3_quadrants.png"],
            examples: [
                {
                    id: "ex1",
                    problem: "Plot the points (2, 3), (-1, 4), (-3, -2), and (4, -1) on a graph.",
                    solution: "Point (2, 3): 2 units right, 3 units up (Quadrant I)\\nPoint (-1, 4): 1 unit left, 4 units up (Quadrant II)\\nPoint (-3, -2): 3 units left, 2 units down (Quadrant III)\\nPoint (4, -1): 4 units right, 1 unit down (Quadrant IV)"
                }
            ],
            ncertExercises: [
                {
                    id: "ex3.1-q1",
                    exercise: "Exercise 3.1",
                    questionNumber: 1,
                    question: "How will you describe the position of a table lamp on your study table to another person?",
                    solution: "We can describe it using perpendicular distances from two adjacent edges of the table. For example: 'The lamp is 25 cm from the left edge and 30 cm from the front edge.'",
                    difficulty: "easy"
                },
                {
                    id: "ex3.2-q1",
                    exercise: "Exercise 3.2",
                    questionNumber: 1,
                    question: "Write the answer of each of the following: (i) What is the name of horizontal and vertical lines? (ii) What is the name of each part of the plane formed by these lines? (iii) Write the name of the point where these lines intersect.",
                    solution: "(i) Horizontal line: x-axis, Vertical line: y-axis\\n(ii) Each part is called a quadrant\\n(iii) The point of intersection is called the origin",
                    difficulty: "easy"
                },
                {
                    id: "ex3.3-q1",
                    exercise: "Exercise 3.3",
                    questionNumber: 1,
                    question: "In which quadrant or on which axis do each of the points lie? (i) (-2, 4) (ii) (3, -1) (iii) (-1, 0) (iv) (1, 2) (v) (-3, -5)",
                    solution: "(i) (-2, 4): Quadrant II (x negative, y positive)\\n(ii) (3, -1): Quadrant IV (x positive, y negative)\\n(iii) (-1, 0): On negative x-axis\\n(iv) (1, 2): Quadrant I (both positive)\\n(v) (-3, -5): Quadrant III (both negative)",
                    difficulty: "medium"
                }
            ]
        },
        {
            id: "plotting-points",
            title: "Plotting Points and Lines",
            videos: [],
            explanation: "Points can be plotted on a coordinate plane by moving along the x-axis and then the y-axis. Lines can be drawn by connecting multiple points.",
            keyPoints: [
                "To plot (a, b): move 'a' units along x-axis, then 'b' units parallel to y-axis",
                "A line requires at least two points",
                "Equation x = a represents a vertical line",
                "Equation y = b represents a horizontal line",
                "Linear equations form straight lines"
            ],
            diagrams: ["diagrams/math_ch3_plotting_points.png"],
            examples: [
                {
                    id: "ex2",
                    problem: "Plot the points (1, 2), (2, 4), (3, 6). What do you observe?",
                    solution: "All three points lie on a straight line passing through the origin. This represents the equation y = 2x."
                }
            ],
            ncertExercises: [
                {
                    id: "ex3.3-q2",
                    exercise: "Exercise 3.3",
                    questionNumber: 2,
                    question: "Plot the points (x, y) given by the table: x: 2, -3, 0, -1, 1 and y: 8, -12, 0, -4, 4",
                    solution: "Points to plot: (2, 8), (-3, -12), (0, 0), (-1, -4), (1, 4)\\nAll these points lie on the line y = 4x",
                    difficulty: "medium"
                }
            ]
        }
    ]
};
