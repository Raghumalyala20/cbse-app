import { Chapter } from '../syllabus';

export const chapter3: Chapter = {
    id: "atoms",
    title: "Chapter 3: Atoms and Molecules",
    concepts: [
        {
            id: "laws-of-combination",
            title: "Laws of Chemical Combination",
            videos: [{ id: "v1", title: "Atoms and Molecules Full Chapter", url: "dQw4w9WgXcQ" }],
            explanation: "Chemical reactions follow certain laws that govern how elements combine to form compounds.",
            keyPoints: [
                "Law of Conservation of Mass: Mass is neither created nor destroyed",
                "Law of Constant Proportions: Elements in a compound are in fixed ratio by mass",
                "Discovered by Lavoisier and Proust",
                "Example: Water always has H:O in 1:8 mass ratio"
            ],
            diagrams: ["diagrams/science_ch3_laws_of_combination.png"],
            examples: [
                {
                    id: "ex1",
                    problem: "In a reaction, 5g of A reacts with 8g of B to form 13g of C. Which law is illustrated?",
                    solution: "Law of Conservation of Mass. Total mass before reaction (5+8=13g) equals mass after reaction (13g)."
                }
            ],
            ncertExercises: [
                {
                    id: "ex3-q1",
                    exercise: "Exercise 3",
                    questionNumber: 1,
                    question: "In a reaction, 5.3g of sodium carbonate reacted with 6g of ethanoic acid. The products were 2.2g of carbon dioxide, 0.9g water and 8.2g of sodium ethanoate. Show that these observations are in agreement with the law of conservation of mass.",
                    solution: "Mass before reaction = 5.3 + 6 = 11.3g\\nMass after reaction = 2.2 + 0.9 + 8.2 = 11.3g\\nSince mass before = mass after, the law of conservation of mass is verified.",
                    difficulty: "medium"
                }
            ]
        },
        {
            id: "atoms-molecules",
            title: "Atoms and Molecules",
            videos: [],
            explanation: "Atoms are the smallest particles of an element. Molecules are groups of atoms bonded together.",
            keyPoints: [
                "Atom: Smallest particle of element that can exist",
                "Molecule: Group of two or more atoms chemically bonded",
                "Atomicity: Number of atoms in a molecule",
                "Monoatomic: He, Ne, Ar (noble gases)",
                "Diatomic: H₂, O₂, N₂, Cl₂",
                "Polyatomic: O₃ (ozone), P₄ (phosphorus)"
            ],
            diagrams: ["diagrams/science_ch3_atoms_molecules.png"],
            examples: [
                {
                    id: "ex2",
                    problem: "What is the atomicity of: (a) Oxygen (b) Ozone (c) Phosphorus?",
                    solution: "(a) Oxygen (O₂) - Diatomic (atomicity = 2)\\n(b) Ozone (O₃) - Triatomic (atomicity = 3)\\n(c) Phosphorus (P₄) - Tetra-atomic (atomicity = 4)"
                }
            ],
            ncertExercises: [
                {
                    id: "ex3-q2",
                    exercise: "Exercise 3",
                    questionNumber: 2,
                    question: "What are polyatomic ions? Give examples.",
                    solution: "Polyatomic ions are groups of atoms carrying a charge. Examples:\\n- Ammonium: NH₄⁺\\n- Hydroxide: OH⁻\\n- Carbonate: CO₃²⁻\\n- Sulphate: SO₄²⁻\\n- Nitrate: NO₃⁻",
                    difficulty: "easy"
                }
            ]
        },
        {
            id: "chemical-formulas",
            title: "Writing Chemical Formulas",
            videos: [],
            explanation: "Chemical formulas represent the composition of compounds using symbols and subscripts.",
            keyPoints: [
                "Symbol represents element",
                "Subscript shows number of atoms",
                "Valency determines combining capacity",
                "Criss-cross method for writing formulas",
                "Formula unit: Smallest unit of ionic compound"
            ],
            diagrams: ["diagrams/science_ch3_chemical_formulas.png"],
            examples: [
                {
                    id: "ex3",
                    problem: "Write the formula for calcium chloride (Ca²⁺ and Cl⁻).",
                    solution: "Using criss-cross method:\\nCa²⁺ and Cl⁻\\nCriss-cross valencies: CaCl₂"
                }
            ],
            ncertExercises: [
                {
                    id: "ex3-q3",
                    exercise: "Exercise 3",
                    questionNumber: 3,
                    question: "Write down the formulae of: (i) sodium oxide (ii) aluminium chloride (iii) sodium sulphide (iv) magnesium hydroxide",
                    solution: "(i) Sodium oxide: Na₂O\\n(ii) Aluminium chloride: AlCl₃\\n(iii) Sodium sulphide: Na₂S\\n(iv) Magnesium hydroxide: Mg(OH)₂",
                    difficulty: "medium"
                }
            ]
        },
        {
            id: "mole-concept",
            title: "Mole Concept and Molecular Mass",
            videos: [],
            explanation: "The mole is a unit to count particles. One mole contains 6.022 × 10²³ particles (Avogadro's number).",
            keyPoints: [
                "1 mole = 6.022 × 10²³ particles (Avogadro's number)",
                "Atomic mass: Mass of one atom in u (atomic mass units)",
                "Molecular mass: Sum of atomic masses in a molecule",
                "Molar mass: Mass of 1 mole in grams",
                "Formula: Number of moles = Given mass / Molar mass"
            ],
            diagrams: ["diagrams/science_ch3_mole_concept.png"],
            examples: [
                {
                    id: "ex4",
                    problem: "Calculate the molecular mass of H₂O.",
                    solution: "H₂O = 2(H) + 1(O)\\n= 2(1) + 1(16)\\n= 2 + 16 = 18 u"
                }
            ],
            ncertExercises: [
                {
                    id: "ex3-q4",
                    exercise: "Exercise 3",
                    questionNumber: 4,
                    question: "Calculate the molecular mass of: (i) H₂ (ii) O₂ (iii) Cl₂ (iv) CO₂ (v) CH₄ (vi) C₂H₆ (vii) C₂H₄ (viii) NH₃ (ix) CH₃OH",
                    solution: "(i) H₂ = 2 × 1 = 2 u\\n(ii) O₂ = 2 × 16 = 32 u\\n(iii) Cl₂ = 2 × 35.5 = 71 u\\n(iv) CO₂ = 12 + 2(16) = 44 u\\n(v) CH₄ = 12 + 4(1) = 16 u\\n(vi) C₂H₆ = 2(12) + 6(1) = 30 u\\n(vii) C₂H₄ = 2(12) + 4(1) = 28 u\\n(viii) NH₃ = 14 + 3(1) = 17 u\\n(ix) CH₃OH = 12 + 4(1) + 16 = 32 u",
                    difficulty: "medium"
                },
                {
                    id: "ex3-q5",
                    exercise: "Exercise 3",
                    questionNumber: 5,
                    question: "Calculate the number of moles in: (i) 52g of He (ii) 12.044 × 10²³ number of He atoms",
                    solution: "(i) Molar mass of He = 4g\\nNumber of moles = 52/4 = 13 moles\\n\\n(ii) Number of moles = (12.044 × 10²³) / (6.022 × 10²³) = 2 moles",
                    difficulty: "hard"
                }
            ]
        }
    ]
};
