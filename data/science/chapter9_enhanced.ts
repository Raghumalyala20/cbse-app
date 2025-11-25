import { Chapter } from '../syllabus';

export const chapter9Enhanced: Chapter = {
    id: "gravitation",
    title: "Chapter 9: Gravitation",
    concepts: [
        {
            id: "gravity",
            title: "Universal Law of Gravitation",
            videos: [{ id: "v1", title: "Gravitation", url: "dQw4w9WgXcQ" }],
            explanation: "Every object in the universe attracts every other object with a force called gravity. This universal law was discovered by Sir Isaac Newton and explains planetary motion, tides, and many other phenomena.",
            keyPoints: [
                "F = G(m₁m₂)/r² where G = 6.67×10⁻¹¹ Nm²/kg²",
                "Weight = mass × g (g = 9.8 m/s² on Earth)",
                "Mass is constant everywhere, weight changes with location",
                "Acceleration due to gravity is independent of mass of object",
                "Gravitational potential energy = mgh",
                "Free fall: Motion under gravity alone",
                "Escape velocity: Minimum velocity to escape Earth's gravity = 11.2 km/s"
            ],
            examples: [
                {
                    id: "ex1",
                    problem: "Find weight of 10kg object on Earth (g=10 m/s²)",
                    solution: "Weight = mg = 10 × 10 = 100 N"
                },
                {
                    id: "ex2",
                    problem: "An object weighs 60 N on Earth. What will be its weight on Moon? (g_moon = 1.6 m/s²)",
                    solution: "On Earth: W = mg\\n60 = m × 10\\nm = 6 kg\\n\\nOn Moon: W = mg = 6 × 1.6 = 9.6 N"
                }
            ],
            practiceProblems: [
                {
                    id: "p1",
                    question: "Calculate the weight of a 5 kg object on Earth (g = 10 m/s²).",
                    answer: "50 N",
                    hint: "Weight = mass × g",
                    difficulty: "easy"
                },
                {
                    id: "p2",
                    question: "If your mass is 50 kg, what is your weight on Earth?",
                    answer: "500 N (or 490 N if using g = 9.8 m/s²)",
                    hint: "Weight = mg, use g = 10 m/s²",
                    difficulty: "easy"
                },
                {
                    id: "p3",
                    question: "A stone is dropped from a height. After 2 seconds, what is its velocity? (g = 10 m/s²)",
                    answer: "20 m/s",
                    hint: "v = u + gt, where u = 0",
                    difficulty: "medium"
                },
                {
                    id: "p4",
                    question: "Calculate the gravitational force between two objects of masses 100 kg and 200 kg separated by 10 m.",
                    answer: "1.334 × 10⁻⁸ N",
                    hint: "Use F = G(m₁m₂)/r², G = 6.67×10⁻¹¹",
                    difficulty: "hard"
                }
            ],
            ncertExercises: [
                {
                    id: "ex9-q1",
                    exercise: "Exercise 9",
                    questionNumber: 1,
                    question: "State the universal law of gravitation.",
                    solution: "Every object in the universe attracts every other object with a force which is:\\n(i) Directly proportional to the product of their masses\\n(ii) Inversely proportional to the square of the distance between them\\n\\nMathematically: F = G(m₁m₂)/r²\\nwhere G = 6.67×10⁻¹¹ Nm²/kg² (universal gravitational constant)",
                    difficulty: "easy"
                },
                {
                    id: "ex9-q2",
                    exercise: "Exercise 9",
                    questionNumber: 2,
                    question: "What do you mean by free fall?",
                    solution: "When an object falls towards the earth under the gravitational force alone (without any other force acting on it like air resistance), it is said to be in free fall. During free fall:\\n- The acceleration is equal to g (9.8 m/s²)\\n- Initial velocity u = 0\\n- Only gravity acts on the object",
                    difficulty: "easy"
                },
                {
                    id: "ex9-q3",
                    exercise: "Exercise 9",
                    questionNumber: 3,
                    question: "What is the magnitude of gravitational force between Earth and a 1 kg object on its surface? (Mass of Earth = 6×10²⁴ kg, Radius = 6.4×10⁶ m, G = 6.67×10⁻¹¹ Nm²/kg²)",
                    solution: "Using F = G(Mm)/R²\\nF = (6.67×10⁻¹¹ × 6×10²⁴ × 1) / (6.4×10⁶)²\\nF = (40.02×10¹³) / (40.96×10¹²)\\nF ≈ 9.8 N\\n\\nThis is equal to the weight of 1 kg object (W = mg = 1×9.8 = 9.8 N)",
                    difficulty: "hard"
                },
                {
                    id: "ex9-q4",
                    exercise: "Exercise 9",
                    questionNumber: 4,
                    question: "The earth and moon attract each other. Does the earth attract the moon with a force greater, smaller or same as the force with which the moon attracts the earth? Why?",
                    solution: "According to Newton's third law, the earth attracts the moon with the SAME force as the moon attracts the earth.\\n\\nHowever, the acceleration produced is different because:\\n- Acceleration = Force / Mass\\n- Earth has much larger mass than moon\\n- So moon's acceleration towards Earth is much greater than Earth's acceleration towards moon\\n\\nBut the forces are equal in magnitude and opposite in direction.",
                    difficulty: "medium"
                },
                {
                    id: "ex9-q5",
                    exercise: "Exercise 9",
                    questionNumber: 5,
                    question: "Gravitational force acts on all objects in proportion to their masses. Why then, a heavy object does not fall faster than a light object?",
                    solution: "Although gravitational force is proportional to mass (F = mg), the acceleration due to gravity is independent of mass.\\n\\nFrom F = ma and F = mg:\\nma = mg\\na = g\\n\\nThe acceleration 'g' is constant (9.8 m/s²) for all objects regardless of their mass. This is why all objects fall at the same rate in vacuum (when air resistance is absent).\\n\\nExample: A feather and a hammer fall at the same rate on the Moon (no air resistance).",
                    difficulty: "hard"
                }
            ]
        }
    ]
};
