import { Chapter } from '../syllabus';

export const chapter2: Chapter = {
    id: "pure-matter",
    title: "Chapter 2: Is Matter Around Us Pure",
    concepts: [
        {
            id: "mixtures",
            title: "Mixtures and Pure Substances",
            videos: [{ id: "v1", title: "Is Matter Around Us Pure - Full Chapter", url: "dQw4w9WgXcQ" }],
            explanation: "A pure substance has a uniform composition throughout. A mixture contains two or more substances mixed together.",
            keyPoints: [
                "Pure substance: Fixed composition (e.g., pure water, gold)",
                "Mixture: Variable composition (e.g., air, milk, soil)",
                "Homogeneous mixture: Uniform composition (e.g., salt solution)",
                "Heterogeneous mixture: Non-uniform composition (e.g., sand in water)",
                "Solution = Solute + Solvent"
            ],
            diagrams: ["diagrams/science_ch2_mixtures.png"],
            examples: [
                {
                    id: "ex1",
                    problem: "Classify: Sugar solution, soil, air, bronze.",
                    solution: "Sugar solution - Homogeneous mixture\\nSoil - Heterogeneous mixture\\nAir - Homogeneous mixture\\nBronze - Homogeneous mixture (alloy)"
                }
            ],
            ncertExercises: [
                {
                    id: "ex2-q1",
                    exercise: "Exercise 2",
                    questionNumber: 1,
                    question: "What is meant by a pure substance?",
                    solution: "A pure substance is a material that has a constant composition and has consistent properties throughout the sample. It contains only one type of particle (element or compound).",
                    difficulty: "easy"
                },
                {
                    id: "ex2-q2",
                    exercise: "Exercise 2",
                    questionNumber: 2,
                    question: "Classify each of the following as a homogeneous or heterogeneous mixture: soda water, wood, air, soil, vinegar, filtered tea.",
                    solution: "Homogeneous: Soda water, air, vinegar, filtered tea\\nHeterogeneous: Wood, soil",
                    difficulty: "medium"
                }
            ]
        },
        {
            id: "solutions",
            title: "Solutions and Their Properties",
            videos: [],
            explanation: "A solution is a homogeneous mixture of two or more substances. The solute dissolves in the solvent.",
            keyPoints: [
                "Solute: Substance that dissolves (lesser quantity)",
                "Solvent: Substance in which solute dissolves (larger quantity)",
                "Concentration: Amount of solute in given amount of solution",
                "Saturated solution: No more solute can dissolve at that temperature",
                "Unsaturated solution: More solute can dissolve",
                "Solubility: Maximum amount of solute that can dissolve in 100g solvent"
            ],
            diagrams: ["diagrams/science_ch2_solution.png"],
            examples: [
                {
                    id: "ex2",
                    problem: "Calculate mass percentage of a solution containing 20g salt in 100g water.",
                    solution: "Mass of solution = 20 + 100 = 120g\\nMass percentage = (20/120) × 100 = 16.67%"
                }
            ],
            ncertExercises: [
                {
                    id: "ex2-q3",
                    exercise: "Exercise 2",
                    questionNumber: 3,
                    question: "How would you confirm that a colorless liquid given to you is pure water?",
                    solution: "Check the boiling point. Pure water boils at exactly 100°C at 1 atmospheric pressure. Also check freezing point (should be 0°C). Pure water shows these fixed values.",
                    difficulty: "medium"
                },
                {
                    id: "ex2-q4",
                    exercise: "Exercise 2",
                    questionNumber: 4,
                    question: "A solution contains 40g of common salt in 320g of water. Calculate the concentration in terms of mass by mass percentage.",
                    solution: "Mass of solution = 40 + 320 = 360g\\nConcentration = (Mass of solute / Mass of solution) × 100\\n= (40/360) × 100 = 11.11%",
                    difficulty: "medium"
                }
            ]
        },
        {
            id: "separation-techniques",
            title: "Separation of Mixtures",
            videos: [],
            explanation: "Different techniques are used to separate components of mixtures based on their physical properties.",
            keyPoints: [
                "Evaporation: Separate solid from liquid (e.g., salt from water)",
                "Centrifugation: Separate denser particles (e.g., cream from milk)",
                "Filtration: Separate insoluble solid from liquid",
                "Distillation: Separate liquids with different boiling points",
                "Chromatography: Separate dissolved substances",
                "Sublimation: Separate sublimable solid from non-sublimable solid"
            ],
            diagrams: ["diagrams/science_ch2_separation_methods.png"],
            examples: [
                {
                    id: "ex3",
                    problem: "How would you separate a mixture of salt and camphor?",
                    solution: "Use sublimation. Heat the mixture - camphor will sublime (convert to vapor) and can be collected on a cool surface, leaving salt behind."
                }
            ],
            ncertExercises: [
                {
                    id: "ex2-q5",
                    exercise: "Exercise 2",
                    questionNumber: 5,
                    question: "Differentiate between homogeneous and heterogeneous mixtures with examples.",
                    solution: "Homogeneous mixture: Uniform composition throughout, components not visible separately. Examples: Sugar solution, air, alloys.\\n\\nHeterogeneous mixture: Non-uniform composition, components can be seen separately. Examples: Sand and water, oil and water, salad.",
                    difficulty: "easy"
                }
            ]
        },
        {
            id: "elements-compounds",
            title: "Elements and Compounds",
            videos: [],
            explanation: "Elements are pure substances that cannot be broken down. Compounds are pure substances formed by chemical combination of elements.",
            keyPoints: [
                "Element: Cannot be broken into simpler substances (e.g., O₂, Fe, Au)",
                "Compound: Two or more elements chemically combined (e.g., H₂O, CO₂)",
                "Elements have symbols (H, O, C, etc.)",
                "Compounds have formulas (H₂O, NaCl, etc.)",
                "Compounds have properties different from constituent elements"
            ],
            diagrams: ["diagrams/science_ch2_elements_compounds.png"],
            examples: [
                {
                    id: "ex4",
                    problem: "Classify: Iron, water, sugar, oxygen.",
                    solution: "Elements: Iron (Fe), Oxygen (O₂)\\nCompounds: Water (H₂O), Sugar (C₁₂H₂₂O₁₁)"
                }
            ],
            ncertExercises: [
                {
                    id: "ex2-q6",
                    exercise: "Exercise 2",
                    questionNumber: 6,
                    question: "What are the two components of a solution? Which component is usually present in smaller quantity?",
                    solution: "The two components are:\\n1. Solute (present in smaller quantity)\\n2. Solvent (present in larger quantity)",
                    difficulty: "easy"
                }
            ]
        }
    ]
};
