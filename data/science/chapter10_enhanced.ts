import { Chapter } from '../syllabus';

export const chapter10Enhanced: Chapter = {
    id: "work-energy",
    title: "Chapter 10: Work and Energy",
    concepts: [
        {
            id: "work-energy-def",
            title: "Work and Energy",
            videos: [{ id: "v1", title: "Work and Energy", url: "dQw4w9WgXcQ" }],
            explanation: "Work is done when force causes displacement. Energy is the capacity to do work. Understanding the relationship between work and energy is fundamental to physics.",
            keyPoints: [
                "Work = Force × Displacement × cos(θ)",
                "Work is done only when force causes displacement",
                "SI unit of work: Joule (J) = 1 Nm",
                "Kinetic Energy = ½mv² (energy due to motion)",
                "Potential Energy = mgh (energy due to position)",
                "Law of Conservation of Energy: Energy cannot be created or destroyed, only transformed",
                "Power = Work/Time (measured in Watts)",
                "1 Watt = 1 Joule/second"
            ],
            examples: [
                {
                    id: "ex1",
                    problem: "Find KE of 2kg object moving at 5 m/s",
                    solution: "KE = ½mv²\\n= ½ × 2 × 5²\\n= ½ × 2 × 25\\n= 25 J"
                },
                {
                    id: "ex2",
                    problem: "A force of 10 N displaces an object by 5 m in the direction of force. Calculate work done.",
                    solution: "Work = F × s × cos(θ)\\nSince displacement is in direction of force, θ = 0°\\nW = 10 × 5 × cos(0°)\\nW = 10 × 5 × 1\\nW = 50 J"
                }
            ],
            practiceProblems: [
                {
                    id: "p1",
                    question: "A force of 20 N moves an object through 4 m in the direction of force. Find work done.",
                    answer: "80 J",
                    hint: "Work = Force × Displacement",
                    difficulty: "easy"
                },
                {
                    id: "p2",
                    question: "Calculate the kinetic energy of a 10 kg object moving at 6 m/s.",
                    answer: "180 J",
                    hint: "KE = ½mv²",
                    difficulty: "easy"
                },
                {
                    id: "p3",
                    question: "A 5 kg object is lifted to a height of 10 m. Find the potential energy gained. (g = 10 m/s²)",
                    answer: "500 J",
                    hint: "PE = mgh",
                    difficulty: "medium"
                },
                {
                    id: "p4",
                    question: "A machine does 5000 J of work in 10 seconds. Find its power.",
                    answer: "500 W",
                    hint: "Power = Work/Time",
                    difficulty: "medium"
                }
            ],
            ncertExercises: [
                {
                    id: "ex10-q1",
                    exercise: "Exercise 10",
                    questionNumber: 1,
                    question: "A force of 7 N acts on an object. The displacement is 8 m in the direction of the force. What is the work done?",
                    solution: "Work = Force × Displacement\\nW = 7 N × 8 m\\nW = 56 J",
                    difficulty: "easy"
                },
                {
                    id: "ex10-q2",
                    exercise: "Exercise 10",
                    questionNumber: 2,
                    question: "When do we say that work is done?",
                    solution: "Work is done when:\\n(1) A force acts on an object, AND\\n(2) The object is displaced in the direction of the force\\n\\nIf either condition is not satisfied, no work is done.\\n\\nExamples of no work:\\n- Pushing a wall (no displacement)\\n- Carrying a bag while walking (force perpendicular to displacement)",
                    difficulty: "easy"
                },
                {
                    id: "ex10-q3",
                    exercise: "Exercise 10",
                    questionNumber: 3,
                    question: "Write an expression for the kinetic energy of an object.",
                    solution: "Kinetic Energy (KE) = ½mv²\\n\\nwhere:\\nm = mass of the object (in kg)\\nv = velocity of the object (in m/s)\\n\\nKE is measured in Joules (J)",
                    difficulty: "easy"
                },
                {
                    id: "ex10-q4",
                    exercise: "Exercise 10",
                    questionNumber: 4,
                    question: "The KE of an object of mass m moving with velocity 5 m/s is 25 J. What will be its KE when velocity is doubled? When tripled?",
                    solution: "Initial: KE₁ = ½m(5)² = 25 J\\n\\nWhen velocity is doubled (v = 10 m/s):\\nKE₂ = ½m(10)²\\n= ½m(4 × 5²)\\n= 4 × ½m(5²)\\n= 4 × 25\\n= 100 J\\n\\nWhen velocity is tripled (v = 15 m/s):\\nKE₃ = ½m(15)²\\n= ½m(9 × 5²)\\n= 9 × ½m(5²)\\n= 9 × 25\\n= 225 J\\n\\nNote: KE is proportional to v². If velocity doubles, KE becomes 4 times. If velocity triples, KE becomes 9 times.",
                    difficulty: "medium"
                },
                {
                    id: "ex10-q5",
                    exercise: "Exercise 10",
                    questionNumber: 5,
                    question: "What is power? How do you differentiate kilowatt from kilowatt hour?",
                    solution: "**Power:** Rate of doing work or rate of energy transfer.\\nPower = Work/Time\\nSI unit: Watt (W) = 1 Joule/second\\n\\n**Kilowatt (kW):**\\n- Unit of POWER\\n- 1 kW = 1000 W\\n- Measures how fast work is done\\n\\n**Kilowatt hour (kWh):**\\n- Unit of ENERGY (not power)\\n- 1 kWh = Energy consumed when 1 kW power is used for 1 hour\\n- 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J\\n- Used in electricity bills\\n\\nExample: A 100 W bulb running for 10 hours consumes:\\nEnergy = 100 W × 10 h = 1000 Wh = 1 kWh",
                    difficulty: "hard"
                }
            ]
        }
    ]
};
