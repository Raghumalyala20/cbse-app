import { Chapter } from '../syllabus';

export const chapter5: Chapter = {
    id: "cell",
    title: "Chapter 5: The Fundamental Unit of Life",
    concepts: [
        {
            id: "cell-intro",
            title: "Introduction to Cells",
            videos: [{ id: "v1", title: "The Fundamental Unit of Life - Full Chapter", url: "dQw4w9WgXcQ" }],
            explanation: "The cell is the basic structural and functional unit of life. All living organisms are made up of cells.",
            keyPoints: [
                "Cell discovered by Robert Hooke (1665)",
                "Cell theory: All living things are made of cells",
                "Unicellular: Single cell organisms (bacteria, amoeba)",
                "Multicellular: Many cells (plants, animals)",
                "Prokaryotic: No nucleus (bacteria)",
                "Eukaryotic: Has nucleus (plants, animals)"
            ],
            diagrams: ["diagrams/science_ch5_cell_types.png"],
            examples: [
                {
                    id: "ex1",
                    problem: "Differentiate between prokaryotic and eukaryotic cells.",
                    solution: "Prokaryotic: No nucleus, no membrane-bound organelles, smaller size (e.g., bacteria)\\nEukaryotic: Has nucleus, membrane-bound organelles, larger size (e.g., plant and animal cells)"
                }
            ],
            ncertExercises: [
                {
                    id: "ex5-q1",
                    exercise: "Exercise 5",
                    questionNumber: 1,
                    question: "Who discovered cells, and how?",
                    solution: "Robert Hooke discovered cells in 1665. He observed thin slices of cork under a microscope and saw small box-like structures, which he called 'cells' because they reminded him of small rooms (cells) in a monastery.",
                    difficulty: "easy"
                },
                {
                    id: "ex5-q2",
                    exercise: "Exercise 5",
                    questionNumber: 2,
                    question: "Why is the cell called the structural and functional unit of life?",
                    solution: "Structural unit: All living organisms are made up of cells.\\nFunctional unit: All life processes (nutrition, respiration, excretion, etc.) occur within cells. Cells can function independently in unicellular organisms.",
                    difficulty: "medium"
                }
            ]
        },
        {
            id: "cell-structure",
            title: "Structure of a Cell",
            videos: [],
            explanation: "A cell has three main parts: cell membrane, cytoplasm, and nucleus (in eukaryotes).",
            keyPoints: [
                "Cell membrane: Outer covering, controls entry/exit of substances",
                "Cytoplasm: Jelly-like substance, contains organelles",
                "Nucleus: Control center, contains DNA",
                "Cell wall: Present in plant cells, made of cellulose",
                "Plasma membrane: Selectively permeable",
                "Osmosis: Movement of water through membrane"
            ],
            diagrams: ["diagrams/science_ch5_cell_structure.png", "diagrams/science_ch5_plant_animal_cell.png"],
            examples: [
                {
                    id: "ex2",
                    problem: "What happens to a plant cell when placed in hypotonic solution?",
                    solution: "Water enters the cell by osmosis. The cell swells but doesn't burst due to the rigid cell wall. This state is called turgid, which helps plants stay upright."
                }
            ],
            ncertExercises: [
                {
                    id: "ex5-q3",
                    exercise: "Exercise 5",
                    questionNumber: 3,
                    question: "Make a sketch of the human nerve cell. What function do nerve cells perform?",
                    solution: "Nerve cells (neurons) have a cell body with nucleus, dendrites (receive signals), and a long axon (transmits signals). Function: Transmit electrical impulses throughout the body for communication and coordination.",
                    difficulty: "medium"
                },
                {
                    id: "ex5-q4",
                    exercise: "Exercise 5",
                    questionNumber: 4,
                    question: "What is a tissue?",
                    solution: "A tissue is a group of similar cells that work together to perform a specific function. Examples: Muscle tissue, nervous tissue, epithelial tissue.",
                    difficulty: "easy"
                }
            ]
        },
        {
            id: "cell-organelles",
            title: "Cell Organelles",
            videos: [],
            explanation: "Organelles are specialized structures within cells that perform specific functions.",
            keyPoints: [
                "Mitochondria: Powerhouse of cell, produces energy (ATP)",
                "Chloroplasts: In plant cells, photosynthesis",
                "Endoplasmic Reticulum: Protein and lipid synthesis",
                "Golgi apparatus: Packaging and dispatching of materials",
                "Lysosomes: Waste disposal, 'suicide bags'",
                "Vacuoles: Storage (large in plant cells, small in animal cells)"
            ],
            diagrams: ["diagrams/science_ch5_organelles.png"],
            examples: [
                {
                    id: "ex3",
                    problem: "Why are mitochondria called the powerhouse of the cell?",
                    solution: "Mitochondria produce energy in the form of ATP through cellular respiration. This energy is used for all cellular activities, hence they are called the powerhouse of the cell."
                }
            ],
            ncertExercises: [
                {
                    id: "ex5-q5",
                    exercise: "Exercise 5",
                    questionNumber: 5,
                    question: "What would happen if the plasma membrane ruptures or breaks down?",
                    solution: "If the plasma membrane breaks down:\\n1. Cell contents would leak out\\n2. Cell would lose its shape\\n3. Harmful substances could enter freely\\n4. Cell would die as it cannot maintain its internal environment",
                    difficulty: "medium"
                },
                {
                    id: "ex5-q6",
                    exercise: "Exercise 5",
                    questionNumber: 6,
                    question: "What would happen to the life of a cell if there was no Golgi apparatus?",
                    solution: "Without Golgi apparatus:\\n1. Proteins and lipids wouldn't be properly packaged\\n2. Materials couldn't be dispatched to correct locations\\n3. Lysosomes wouldn't form\\n4. Cell secretion would be affected\\n5. Cell would eventually die",
                    difficulty: "hard"
                }
            ]
        }
    ]
};
