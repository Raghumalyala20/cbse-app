import { Chapter } from '../syllabus';

export const chapter1: Chapter = {
    id: "matter",
    title: "Chapter 1: Matter in Our Surroundings",
    concepts: [
        {
            id: "matter-intro",
            title: "What is Matter?",
            videos: [{ id: "v1", title: "Matter in Our Surroundings Full Chapter", url: "dQw4w9WgXcQ" }],
            explanation: "Matter is anything that has mass and occupies space. Everything around us is made of matter.",
            keyPoints: [
                "Matter is made up of tiny particles",
                "Particles have space between them",
                "Particles are continuously moving",
                "Particles attract each other",
                "Three states: Solid, Liquid, Gas"
            ],
            diagrams: ["diagrams/science_ch1_states_of_matter.png"],
            examples: [
                {
                    id: "ex1",
                    problem: "Why does a gas fill completely the vessel in which it is kept?",
                    solution: "Gas particles have very weak forces of attraction and move freely. They spread out to fill the entire volume of the container."
                }
            ],
            ncertExercises: [
                {
                    id: "ex1-q1",
                    exercise: "Exercise 1",
                    questionNumber: 1,
                    question: "Which of the following are matter? Chair, air, love, smell, hate, almonds, thought, cold, lemon water, smell of perfume.",
                    solution: "Matter: Chair, air, almonds, lemon water, smell of perfume (particles of perfume)\\nNot matter: Love, hate, thought, cold (these are feelings/sensations)",
                    difficulty: "easy"
                },
                {
                    id: "ex1-q2",
                    exercise: "Exercise 1",
                    questionNumber: 2,
                    question: "Give reasons: (a) A gas fills completely the vessel in which it is kept. (b) A gas exerts pressure on the walls of the container. (c) A wooden table should be called a solid.",
                    solution: "(a) Gas particles move freely with negligible attraction, spreading to fill entire volume\\n(b) Gas particles move randomly and collide with container walls, exerting pressure\\n(c) Wooden table has definite shape and volume, particles are closely packed with strong forces - characteristics of a solid",
                    difficulty: "medium"
                }
            ]
        },
        {
            id: "states-of-matter",
            title: "Characteristics of States of Matter",
            videos: [],
            explanation: "Matter exists in three states: solid, liquid, and gas. Each state has distinct properties based on particle arrangement and movement.",
            keyPoints: [
                "Solids: Fixed shape, fixed volume, high density, incompressible",
                "Liquids: No fixed shape, fixed volume, moderate density, nearly incompressible",
                "Gases: No fixed shape, no fixed volume, low density, highly compressible",
                "Diffusion: Mixing of particles on their own",
                "Diffusion is fastest in gases, slowest in solids"
            ],
            diagrams: ["diagrams/science_ch1_particle_arrangement.png"],
            examples: [
                {
                    id: "ex2",
                    problem: "Explain why solids have a definite shape but liquids and gases don't.",
                    solution: "Solids have strong intermolecular forces keeping particles in fixed positions, giving definite shape. Liquids have weaker forces allowing particles to move, taking container's shape. Gases have very weak forces, particles move freely in all directions."
                }
            ],
            ncertExercises: [
                {
                    id: "ex1-q3",
                    exercise: "Exercise 1",
                    questionNumber: 3,
                    question: "Liquids generally have lower density as compared to solids. But you must have observed that ice floats on water. Find out why.",
                    solution: "When water freezes to ice, it expands and becomes less dense. Ice has a cage-like structure with more empty spaces between molecules. Since ice is less dense than water, it floats.",
                    difficulty: "medium"
                }
            ]
        },
        {
            id: "change-of-state",
            title: "Change of State",
            videos: [],
            explanation: "Matter can change from one state to another by changing temperature or pressure.",
            keyPoints: [
                "Melting: Solid → Liquid (absorbs heat)",
                "Freezing: Liquid → Solid (releases heat)",
                "Evaporation: Liquid → Gas (absorbs heat)",
                "Condensation: Gas → Liquid (releases heat)",
                "Sublimation: Solid → Gas directly (e.g., camphor, dry ice)",
                "Latent heat: Heat absorbed/released during state change without temperature change"
            ],
            diagrams: ["diagrams/science_ch1_state_changes.png"],
            examples: [
                {
                    id: "ex3",
                    problem: "Why does our palm feel cold when we put some acetone or petrol on it?",
                    solution: "Acetone/petrol evaporates quickly, absorbing heat from our palm (latent heat of vaporization). This makes our palm feel cold."
                }
            ],
            ncertExercises: [
                {
                    id: "ex1-q4",
                    exercise: "Exercise 1",
                    questionNumber: 4,
                    question: "Convert the following temperatures to Celsius scale: (a) 300 K (b) 573 K",
                    solution: "Formula: °C = K - 273\\n(a) 300 K = 300 - 273 = 27°C\\n(b) 573 K = 573 - 273 = 300°C",
                    difficulty: "easy"
                },
                {
                    id: "ex1-q5",
                    exercise: "Exercise 1",
                    questionNumber: 5,
                    question: "Why does the temperature of a substance remain constant during its melting point or boiling point?",
                    solution: "During state change, the heat energy supplied is used to overcome intermolecular forces (latent heat) rather than increasing kinetic energy. Therefore, temperature remains constant until the state change is complete.",
                    difficulty: "hard"
                }
            ]
        }
    ]
};
