import { Chapter } from '../syllabus';

export const chapter8Enhanced: Chapter = {
    id: "force",
    title: "Chapter 8: Force and Laws of Motion",
    concepts: [
        {
            id: "newtons-laws",
            title: "Newton's Laws of Motion",
            videos: [{ id: "v1", title: "Force and Laws of Motion", url: "dQw4w9WgXcQ" }],
            explanation: "Newton's three laws describe the relationship between force and motion. They form the foundation of classical mechanics and explain how objects move when forces act on them.",
            keyPoints: [
                "First Law (Inertia): Object remains at rest or in uniform motion unless acted upon by external force",
                "Second Law: F = ma (Force = mass × acceleration)",
                "Third Law: For every action, there is equal and opposite reaction",
                "Momentum = mass × velocity (p = mv)",
                "Impulse = Change in momentum = Force × time",
                "Conservation of momentum: Total momentum before = Total momentum after (in isolated system)"
            ],
            diagrams: ["/diagrams/newtons_laws.png", "/diagrams/force_formula.png"],
            examples: [
                {
                    id: "ex1",
                    problem: "A force of 10N acts on a mass of 2kg. Find acceleration.",
                    solution: "Using F = ma\\n10 = 2 × a\\na = 10/2 = 5 m/s²"
                },
                {
                    id: "ex2",
                    problem: "A body of mass 5 kg moving with velocity 10 m/s collides with another body of mass 3 kg at rest. After collision, they move together. Find their common velocity.",
                    solution: "Using conservation of momentum:\\nInitial momentum = Final momentum\\nm₁u₁ + m₂u₂ = (m₁ + m₂)v\\n5×10 + 3×0 = (5+3)v\\n50 = 8v\\nv = 6.25 m/s"
                }
            ],
            practiceProblems: [
                {
                    id: "p1",
                    question: "A force of 20 N acts on a body of mass 5 kg. Find the acceleration produced.",
                    answer: "4 m/s²",
                    hint: "Use F = ma",
                    difficulty: "easy"
                },
                {
                    id: "p2",
                    question: "A body of mass 2 kg is moving with velocity 5 m/s. Find its momentum.",
                    answer: "10 kg m/s",
                    hint: "Momentum = mass × velocity",
                    difficulty: "easy"
                },
                {
                    id: "p3",
                    question: "A force of 50 N acts on a body for 0.2 seconds. Find the change in momentum.",
                    answer: "10 kg m/s",
                    hint: "Impulse = Force × time = Change in momentum",
                    difficulty: "medium"
                },
                {
                    id: "p4",
                    question: "Two bodies of masses 2 kg and 3 kg are moving with velocities 4 m/s and 2 m/s in the same direction. Find the velocity of their center of mass.",
                    answer: "2.8 m/s",
                    hint: "v_cm = (m₁v₁ + m₂v₂)/(m₁ + m₂)",
                    difficulty: "hard"
                }
            ],
            ncertExercises: [
                {
                    id: "ex8-q1",
                    exercise: "Exercise 8",
                    questionNumber: 1,
                    question: "Which of the following has more inertia: a rubber ball or a stone of the same size?",
                    solution: "A stone has more inertia because it has more mass than a rubber ball of the same size. Inertia depends on mass - greater the mass, greater the inertia.",
                    difficulty: "easy"
                },
                {
                    id: "ex8-q2",
                    exercise: "Exercise 8",
                    questionNumber: 2,
                    question: "In the following example, identify the number of times the velocity of the ball changes: A football player kicks a ball which hits a goal post and comes back to the player.",
                    solution: "The velocity changes 3 times:\\n(1) When kicked by player (from rest to motion)\\n(2) When it hits the goal post (direction changes)\\n(3) When caught by player (comes to rest)",
                    difficulty: "medium"
                },
                {
                    id: "ex8-q3",
                    exercise: "Exercise 8",
                    questionNumber: 3,
                    question: "An object of mass 2 kg is sliding with a constant velocity of 4 m/s on a frictionless surface. What is the force required to keep the object moving?",
                    solution: "Zero force is required. According to Newton's first law, an object moving with constant velocity continues to move with the same velocity unless acted upon by an external force. Since the surface is frictionless, no force is needed.",
                    difficulty: "medium"
                },
                {
                    id: "ex8-q4",
                    exercise: "Exercise 8",
                    questionNumber: 4,
                    question: "A force of 5 N gives a mass m₁ an acceleration of 10 m/s² and a mass m₂ an acceleration of 20 m/s². What acceleration would it give if both masses were tied together?",
                    solution: "Using F = ma:\\nFor m₁: 5 = m₁ × 10, so m₁ = 0.5 kg\\nFor m₂: 5 = m₂ × 20, so m₂ = 0.25 kg\\n\\nWhen tied together:\\nTotal mass = 0.5 + 0.25 = 0.75 kg\\nAcceleration = F/(m₁+m₂) = 5/0.75 = 6.67 m/s²",
                    difficulty: "hard"
                },
                {
                    id: "ex8-q5",
                    exercise: "Exercise 8",
                    questionNumber: 5,
                    question: "How much momentum will a dumb-bell of mass 10 kg transfer to the floor if it falls from a height of 80 cm? (g = 10 m/s²)",
                    solution: "First find velocity when it hits floor using v² = u² + 2gh:\\nv² = 0 + 2×10×0.8 = 16\\nv = 4 m/s\\n\\nMomentum transferred = mv = 10 × 4 = 40 kg m/s",
                    difficulty: "hard"
                }
            ]
        }
    ]
};
