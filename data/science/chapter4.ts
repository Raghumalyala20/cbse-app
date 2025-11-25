import { Chapter } from '../syllabus';

export const chapter4: Chapter = {
    id: "atom-structure",
    title: "Chapter 4: Structure of the Atom",
    concepts: [
        {
            id: "atomic-models",
            title: "Atomic Models",
            videos: [{ id: "v1", title: "Structure of Atom Full Chapter", url: "dQw4w9WgXcQ" }],
            explanation: "Scientists developed various models to understand the structure of atoms over time.",
            keyPoints: [
                "Thomson's Model: Plum pudding model - positive sphere with embedded electrons",
                "Rutherford's Model: Nucleus at center, electrons revolve around it",
                "Bohr's Model: Electrons in fixed orbits/shells with definite energy",
                "Nucleus contains protons and neutrons",
                "Electrons revolve in shells (K, L, M, N...)"
            ],
            diagrams: ["diagrams/science_ch4_atomic_models.png", "diagrams/science_ch4_bohr_model.png"],
            examples: [
                {
                    id: "ex1",
                    problem: "What were the limitations of Rutherford's model?",
                    solution: "Rutherford's model couldn't explain: (1) Why electrons don't fall into nucleus despite attraction, (2) Stability of atom, (3) Line spectra of elements. Bohr's model addressed these issues."
                }
            ],
            ncertExercises: [
                {
                    id: "ex4-q1",
                    exercise: "Exercise 4",
                    questionNumber: 1,
                    question: "What are canal rays?",
                    solution: "Canal rays are positively charged radiations discovered by Goldstein. They are streams of positive ions formed when electrons are removed from gas atoms. They led to the discovery of protons.",
                    difficulty: "easy"
                },
                {
                    id: "ex4-q2",
                    exercise: "Exercise 4",
                    questionNumber: 2,
                    question: "If an atom contains one electron and one proton, will it carry any charge or not?",
                    solution: "No, it will not carry any charge. The positive charge of one proton (+1) is balanced by the negative charge of one electron (-1), making the atom electrically neutral.",
                    difficulty: "easy"
                }
            ]
        },
        {
            id: "subatomic-particles",
            title: "Subatomic Particles",
            videos: [],
            explanation: "Atoms are made up of three fundamental particles: protons, neutrons, and electrons.",
            keyPoints: [
                "Proton: Positive charge (+1), mass ≈ 1 u, in nucleus",
                "Neutron: No charge (0), mass ≈ 1 u, in nucleus",
                "Electron: Negative charge (-1), mass ≈ 1/2000 u, in shells",
                "Atomic number (Z) = Number of protons",
                "Mass number (A) = Protons + Neutrons",
                "Valence electrons: Electrons in outermost shell"
            ],
            diagrams: ["diagrams/science_ch4_subatomic_particles.png"],
            examples: [
                {
                    id: "ex2",
                    problem: "An atom has 11 protons and 12 neutrons. Find its atomic number and mass number.",
                    solution: "Atomic number (Z) = Number of protons = 11\\nMass number (A) = Protons + Neutrons = 11 + 12 = 23\\nThis is Sodium (Na)"
                }
            ],
            ncertExercises: [
                {
                    id: "ex4-q3",
                    exercise: "Exercise 4",
                    questionNumber: 3,
                    question: "On the basis of Thomson's model of an atom, explain how the atom is neutral as a whole.",
                    solution: "According to Thomson's model, the atom is a positively charged sphere with negatively charged electrons embedded in it. The total positive charge equals the total negative charge, making the atom electrically neutral as a whole.",
                    difficulty: "medium"
                },
                {
                    id: "ex4-q4",
                    exercise: "Exercise 4",
                    questionNumber: 4,
                    question: "For the symbol H, D and T tabulate three sub-atomic particles found in each of them.",
                    solution: "H (Hydrogen-1): 1 proton, 0 neutrons, 1 electron\\nD (Deuterium): 1 proton, 1 neutron, 1 electron\\nT (Tritium): 1 proton, 2 neutrons, 1 electron\\nAll are isotopes of hydrogen with same atomic number (1) but different mass numbers.",
                    difficulty: "hard"
                }
            ]
        },
        {
            id: "electron-distribution",
            title: "Distribution of Electrons in Shells",
            videos: [],
            explanation: "Electrons are arranged in shells around the nucleus following specific rules.",
            keyPoints: [
                "Maximum electrons in a shell = 2n² (n = shell number)",
                "K shell (n=1): max 2 electrons",
                "L shell (n=2): max 8 electrons",
                "M shell (n=3): max 18 electrons",
                "Outermost shell: max 8 electrons (octet rule)",
                "Valency: Combining capacity of atom"
            ],
            diagrams: ["diagrams/science_ch4_electron_shells.png"],
            examples: [
                {
                    id: "ex3",
                    problem: "Write the electronic configuration of Chlorine (atomic number 17).",
                    solution: "Chlorine (Z = 17)\\nK shell: 2 electrons\\nL shell: 8 electrons\\nM shell: 7 electrons\\nElectronic configuration: 2, 8, 7"
                }
            ],
            ncertExercises: [
                {
                    id: "ex4-q5",
                    exercise: "Exercise 4",
                    questionNumber: 5,
                    question: "Write the electronic configuration of any one pair of isotopes and isobars.",
                    solution: "Isotopes (same atomic number, different mass number):\\nCarbon-12: 2, 4\\nCarbon-14: 2, 4\\n\\nIsobars (different atomic number, same mass number):\\nCalcium-40 (Z=20): 2, 8, 8, 2\\nArgon-40 (Z=18): 2, 8, 8",
                    difficulty: "hard"
                }
            ]
        },
        {
            id: "isotopes-isobars",
            title: "Isotopes and Isobars",
            videos: [],
            explanation: "Atoms of the same element can have different mass numbers (isotopes), and atoms of different elements can have the same mass number (isobars).",
            keyPoints: [
                "Isotopes: Same atomic number, different mass number",
                "Example: C-12, C-13, C-14 (all carbon)",
                "Isobars: Different atomic number, same mass number",
                "Example: Ar-40 and Ca-40",
                "Isotopes have same chemical properties but different physical properties"
            ],
            diagrams: ["diagrams/science_ch4_isotopes.png"],
            examples: [
                {
                    id: "ex4",
                    problem: "Give two examples of isotopes.",
                    solution: "1. Hydrogen isotopes: H-1 (protium), H-2 (deuterium), H-3 (tritium)\\n2. Chlorine isotopes: Cl-35 and Cl-37"
                }
            ],
            ncertExercises: [
                {
                    id: "ex4-q6",
                    exercise: "Exercise 4",
                    questionNumber: 6,
                    question: "Compare the properties of electrons, protons and neutrons.",
                    solution: "Electron: Charge = -1, Mass ≈ 1/2000 u, Location = Outside nucleus in shells\\nProton: Charge = +1, Mass ≈ 1 u, Location = Inside nucleus\\nNeutron: Charge = 0, Mass ≈ 1 u, Location = Inside nucleus",
                    difficulty: "medium"
                }
            ]
        }
    ]
};
