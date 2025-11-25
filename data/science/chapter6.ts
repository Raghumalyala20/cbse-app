import { Chapter } from '../syllabus';

export const chapter6: Chapter = {
    id: "tissues",
    title: "Chapter 6: Tissues",
    concepts: [
        {
            id: "plant-tissues",
            title: "Plant Tissues",
            videos: [{ id: "v1", title: "Tissues Full Chapter", url: "dQw4w9WgXcQ" }],
            explanation: "Plant tissues are groups of cells that perform specific functions. They are classified into meristematic and permanent tissues.",
            keyPoints: [
                "Meristematic tissue: Dividing cells, growth regions",
                "Apical meristem: At tips, increases length",
                "Lateral meristem: At sides, increases girth",
                "Intercalary meristem: At base of leaves/internodes",
                "Permanent tissue: Non-dividing, differentiated cells",
                "Simple permanent: Parenchyma, Collenchyma, Sclerenchyma"
            ],
            diagrams: ["diagrams/science_ch6_plant_tissues.png", "diagrams/science_ch6_meristem.png"],
            examples: [
                {
                    id: "ex1",
                    problem: "Why do plants continue to grow throughout their life?",
                    solution: "Plants have meristematic tissues at growing regions (root tips, shoot tips) that continuously divide throughout the plant's life, enabling continuous growth."
                }
            ],
            ncertExercises: [
                {
                    id: "ex6-q1",
                    exercise: "Exercise 6",
                    questionNumber: 1,
                    question: "Define the term tissue.",
                    solution: "A tissue is a group of similar cells that work together to perform a specific function. Cells in a tissue have common origin and structure.",
                    difficulty: "easy"
                },
                {
                    id: "ex6-q2",
                    exercise: "Exercise 6",
                    questionNumber: 2,
                    question: "How many types of elements together make up the xylem tissue? Name them.",
                    solution: "Four types of elements make up xylem:\\n1. Tracheids\\n2. Vessels\\n3. Xylem parenchyma\\n4. Xylem fibres\\nFunction: Transport water and minerals from roots to other parts.",
                    difficulty: "medium"
                }
            ]
        },
        {
            id: "complex-tissues",
            title: "Complex Permanent Tissues",
            videos: [],
            explanation: "Complex tissues are made of more than one type of cell working together.",
            keyPoints: [
                "Xylem: Transports water and minerals upward",
                "Xylem components: Tracheids, vessels, xylem parenchyma, xylem fibres",
                "Phloem: Transports food (sugars) bidirectionally",
                "Phloem components: Sieve tubes, companion cells, phloem parenchyma, phloem fibres",
                "Vascular bundles: Xylem + Phloem together"
            ],
            diagrams: ["diagrams/science_ch6_xylem_phloem.png"],
            examples: [
                {
                    id: "ex2",
                    problem: "Differentiate between xylem and phloem.",
                    solution: "Xylem: Transports water and minerals upward, dead cells (except parenchyma), made of tracheids and vessels\\nPhloem: Transports food in all directions, living cells, made of sieve tubes and companion cells"
                }
            ],
            ncertExercises: [
                {
                    id: "ex6-q3",
                    exercise: "Exercise 6",
                    questionNumber: 3,
                    question: "What is the role of epidermis in plants?",
                    solution: "Epidermis is the protective outer layer of plants. Roles:\\n1. Protection from water loss\\n2. Protection from mechanical injury\\n3. Protection from parasites\\n4. Gas exchange through stomata\\n5. In roots, helps in water absorption",
                    difficulty: "medium"
                }
            ]
        },
        {
            id: "animal-tissues",
            title: "Animal Tissues",
            videos: [],
            explanation: "Animal tissues are classified into epithelial, connective, muscular, and nervous tissues.",
            keyPoints: [
                "Epithelial tissue: Protective covering, lining of organs",
                "Types: Squamous, cuboidal, columnar, ciliated",
                "Connective tissue: Connects and supports (blood, bone, cartilage)",
                "Muscular tissue: Movement (skeletal, smooth, cardiac)",
                "Nervous tissue: Transmission of impulses (neurons)"
            ],
            diagrams: ["diagrams/science_ch6_animal_tissues.png", "diagrams/science_ch6_epithelial.png"],
            examples: [
                {
                    id: "ex3",
                    problem: "Name the tissue that forms the inner lining of the mouth.",
                    solution: "Stratified squamous epithelium forms the inner lining of the mouth. It provides protection against wear and tear."
                }
            ],
            ncertExercises: [
                {
                    id: "ex6-q4",
                    exercise: "Exercise 6",
                    questionNumber: 4,
                    question: "Name the tissue responsible for movement in our body.",
                    solution: "Muscular tissue is responsible for movement. Three types:\\n1. Skeletal muscle: Voluntary movement\\n2. Smooth muscle: Involuntary movement (internal organs)\\n3. Cardiac muscle: Heart contractions",
                    difficulty: "easy"
                },
                {
                    id: "ex6-q5",
                    exercise: "Exercise 6",
                    questionNumber: 5,
                    question: "What does a neuron look like?",
                    solution: "A neuron has:\\n1. Cell body (cyton): Contains nucleus\\n2. Dendrites: Short branched projections that receive signals\\n3. Axon: Long projection that transmits signals\\n4. Nerve endings: At the end of axon\\nShape: Star-like with long tail",
                    difficulty: "medium"
                },
                {
                    id: "ex6-q6",
                    exercise: "Exercise 6",
                    questionNumber: 6,
                    question: "What are the functions of areolar tissue?",
                    solution: "Areolar tissue functions:\\n1. Fills spaces between organs\\n2. Supports and binds other tissues\\n3. Helps in repair of tissues\\n4. Stores fat\\n5. Provides flexibility",
                    difficulty: "medium"
                }
            ]
        }
    ]
};
