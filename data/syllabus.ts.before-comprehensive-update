export interface Video {
  id: string;
  title: string;
  url: string;
  duration?: string;
}

export interface Example {
  id: string;
  problem: string;
  solution: string;
}

export interface PracticeProblem {
  id: string;
  question: string;
  answer: string;
  hint?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface NCERTExercise {
  id: string;
  exercise: string;
  questionNumber: number;
  question: string;
  solution: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  diagram?: string;
}

export interface Concept {
  id: string;
  title: string;
  videos: Video[];
  explanation?: string;
  keyPoints?: string[];
  diagrams?: string[];
  examples?: Example[];
  practiceProblems?: PracticeProblem[];
  ncertExercises?: NCERTExercise[];
}

export interface Chapter {
  id: string;
  title: string;
  concepts: Concept[];
}

export interface Subject {
  id: string;
  title: string;
  chapters: Chapter[];
}

export interface Grade {
  id: string;
  title: string;
  subjects: Subject[];
}

export const syllabus: Grade[] = [
  {
    id: "class-9",
    title: "Class 9",
    subjects: [
      {
        id: "maths",
        title: "Mathematics",
        chapters: [
          {
            id: "num-sys",
            title: "Chapter 1: Number Systems",
            concepts: [
              {
                id: "intro-num-sys",
                title: "Introduction to Number Systems",
                videos: [{ id: "v1", title: "Number Systems - Full Chapter", url: "IueVrMlmQ2I" }],
                explanation: "Number systems include natural numbers, whole numbers, integers, rational numbers, and irrational numbers.",
                keyPoints: [
                  "Natural Numbers: 1, 2, 3, ...",
                  "Whole Numbers: 0, 1, 2, 3, ...",
                  "Integers: ..., -2, -1, 0, 1, 2, ...",
                  "Rational Numbers: Numbers that can be expressed as p/q where q ≠ 0",
                  "Irrational Numbers: Numbers that cannot be expressed as p/q"
                ],
                examples: [
                  {
                    id: "ex1",
                    problem: "Is 0 a rational number?",
                    solution: "Yes, 0 is a rational number because it can be written as 0/1, 0/2, etc."
                  }
                ],
                practiceProblems: [
                  {
                    id: "p1",
                    question: "Which of the following is an irrational number: √4, √2, 0.5?",
                    answer: "√2",
                    hint: "Check if the number can be expressed as a fraction",
                    difficulty: "easy"
                  }
                ],
                ncertExercises: [
                  {
                    id: "ex1.1-q1",
                    exercise: "Exercise 1.1",
                    questionNumber: 1,
                    question: "Is zero a rational number? Can you write it in the form p/q, where p and q are integers and q ≠ 0?",
                    solution: "Yes, zero is a rational number. It can be written as 0/1, 0/2, 0/3, etc., where the numerator is 0 and denominator is any non-zero integer.",
                    difficulty: "easy"
                  },
                  {
                    id: "ex1.1-q2",
                    exercise: "Exercise 1.1",
                    questionNumber: 2,
                    question: "Find six rational numbers between 3 and 4.",
                    solution: "Six rational numbers between 3 and 4 are: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6 (or 31/10, 32/10, 33/10, 34/10, 35/10, 36/10)",
                    difficulty: "easy"
                  }
                ]
              }
            ]
          },
          {
            id: "quadrilaterals",
            title: "Chapter 8: Quadrilaterals",
            concepts: [
              {
                id: "quad-basics",
                title: "Properties of Quadrilaterals",
                videos: [{ id: "v1", title: "Quadrilaterals Full Chapter", url: "dQw4w9WgXcQ" }],
                explanation: "A quadrilateral is a polygon with four sides. Special quadrilaterals include parallelograms, rectangles, squares, rhombus, and trapeziums.",
                keyPoints: [
                  "Sum of angles in a quadrilateral = 360°",
                  "Parallelogram: Opposite sides parallel and equal",
                  "Rectangle: All angles 90°",
                  "Square: All sides equal, all angles 90°",
                  "Rhombus: All sides equal, opposite angles equal"
                ],
                ncertExercises: [
                  {
                    id: "ex8.1-q1",
                    exercise: "Exercise 8.1",
                    questionNumber: 1,
                    question: "The angles of a quadrilateral are in the ratio 3:5:9:13. Find all the angles.",
                    solution: "Let angles be 3x, 5x, 9x, 13x. Sum = 360°\\n3x + 5x + 9x + 13x = 360°\\n30x = 360°\\nx = 12°\\nAngles are: 36°, 60°, 108°, 156°",
                    difficulty: "medium"
                  }
                ]
              }
            ]
          },
          {
            id: "circles",
            title: "Chapter 9: Circles",
            concepts: [
              {
                id: "circle-basics",
                title: "Circles and their Properties",
                videos: [{ id: "v1", title: "Circles Full Chapter", url: "dQw4w9WgXcQ" }],
                explanation: "A circle is the set of all points equidistant from a fixed point (center).",
                keyPoints: [
                  "Radius: Distance from center to any point on circle",
                  "Diameter = 2 × Radius",
                  "Chord: Line segment joining two points on circle",
                  "Equal chords are equidistant from center",
                  "Angle in a semicircle is 90°"
                ],
                ncertExercises: [
                  {
                    id: "ex9.1-q1",
                    exercise: "Exercise 9.1",
                    questionNumber: 1,
                    question: "Fill in the blanks: The center of a circle lies in _____ of the circle.",
                    solution: "The center of a circle lies in **interior** of the circle.",
                    difficulty: "easy"
                  }
                ]
              }
            ]
          },
          {
            id: "heron",
            title: "Chapter 10: Heron's Formula",
            concepts: [
              {
                id: "heron-formula",
                title: "Area using Heron's Formula",
                videos: [{ id: "v1", title: "Heron's Formula", url: "dQw4w9WgXcQ" }],
                explanation: "Heron's formula calculates the area of a triangle when all three sides are known.",
                keyPoints: [
                  "Semi-perimeter s = (a + b + c)/2",
                  "Area = √[s(s-a)(s-b)(s-c)]",
                  "Useful when height is not given"
                ],
                ncertExercises: [
                  {
                    id: "ex10.1-q1",
                    exercise: "Exercise 10.1",
                    questionNumber: 1,
                    question: "Find the area of a triangle with sides 3cm, 4cm, and 5cm using Heron's formula.",
                    solution: "s = (3+4+5)/2 = 6\\nArea = √[6(6-3)(6-4)(6-5)] = √[6×3×2×1] = √36 = 6 cm²",
                    difficulty: "easy"
                  }
                ]
              }
            ]
          },
          {
            id: "surface-areas",
            title: "Chapter 11: Surface Areas and Volumes",
            concepts: [
              {
                id: "sa-volumes",
                title: "Surface Areas and Volumes of 3D Shapes",
                videos: [{ id: "v1", title: "Surface Areas & Volumes", url: "dQw4w9WgXcQ" }],
                explanation: "Study of surface areas and volumes of cuboids, cylinders, cones, and spheres.",
                keyPoints: [
                  "Cuboid: TSA = 2(lb + bh + hl), Volume = l×b×h",
                  "Cylinder: CSA = 2πrh, TSA = 2πr(r+h), Volume = πr²h",
                  "Cone: CSA = πrl, TSA = πr(l+r), Volume = (1/3)πr²h",
                  "Sphere: SA = 4πr², Volume = (4/3)πr³"
                ],
                ncertExercises: [
                  {
                    id: "ex11.1-q1",
                    exercise: "Exercise 11.1",
                    questionNumber: 1,
                    question: "Find the surface area of a sphere of radius 7 cm.",
                    solution: "Surface Area = 4πr² = 4 × (22/7) × 7² = 4 × (22/7) × 49 = 616 cm²",
                    difficulty: "easy"
                  }
                ]
              }
            ]
          },
          {
            id: "statistics",
            title: "Chapter 12: Statistics",
            concepts: [
              {
                id: "stats-basics",
                title: "Data Handling and Statistics",
                videos: [{ id: "v1", title: "Statistics Full Chapter", url: "dQw4w9WgXcQ" }],
                explanation: "Statistics deals with collection, organization, and interpretation of data.",
                keyPoints: [
                  "Mean = Sum of observations / Number of observations",
                  "Median: Middle value when data is arranged",
                  "Mode: Most frequently occurring value",
                  "Range = Highest value - Lowest value"
                ],
                ncertExercises: [
                  {
                    id: "ex12.1-q1",
                    exercise: "Exercise 12.1",
                    questionNumber: 1,
                    question: "Find the mean of: 10, 12, 14, 16, 18",
                    solution: "Mean = (10+12+14+16+18)/5 = 70/5 = 14",
                    difficulty: "easy"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "science",
        title: "Science",
        chapters: [
          {
            id: "matter",
            title: "Chapter 1: Matter in Our Surroundings",
            concepts: [
              {
                id: "matter-intro",
                title: "Characteristics of Particles of Matter",
                videos: [{ id: "v1", title: "Matter in Our Surroundings", url: "dQw4w9WgXcQ" }],
                explanation: "Matter is anything that has mass and occupies space. All matter is made up of tiny particles.",
                keyPoints: [
                  "Particles of matter have space between them",
                  "Particles of matter are continuously moving",
                  "Particles of matter attract each other"
                ],
                examples: [
                  {
                    id: "ex1",
                    problem: "Why does the smell of hot food reach us several meters away?",
                    solution: "Particles of hot food have higher kinetic energy and diffuse faster into air, reaching us quickly."
                  }
                ],
                practiceProblems: [
                  {
                    id: "p1",
                    question: "Which of the following is matter: Chair, Air, Love?",
                    answer: "Chair and Air",
                    hint: "Matter must have mass and occupy space",
                    difficulty: "easy"
                  }
                ],
                ncertExercises: [
                  {
                    id: "ex1.1-q1",
                    exercise: "Exercise 1.1",
                    questionNumber: 1,
                    question: "Which of the following are matter? Chair, air, love, smell, hate, almonds, thought, cold, lemon water, smell of perfume.",
                    solution: "Matter: Chair, air, almonds, lemon water, smell of perfume (due to particles).",
                    difficulty: "easy"
                  },
                  {
                    id: "ex1.1-q2",
                    exercise: "Exercise 1.1",
                    questionNumber: 2,
                    question: "Give reasons: The smell of hot sizzling food reaches you several meters away, but to get the smell from cold food you have to go close.",
                    solution: "Particles of hot food have higher kinetic energy and diffuse faster into air than particles of cold food.",
                    difficulty: "medium"
                  }
                ]
              }
            ]
          },
          {
            id: "force",
            title: "Chapter 8: Force and Laws of Motion",
            concepts: [
              {
                id: "newtons-laws",
                title: "Newton's Laws of Motion",
                videos: [{ id: "v1", title: "Force and Laws of Motion", url: "dQw4w9WgXcQ" }],
                explanation: "Newton's three laws describe the relationship between force and motion.",
                keyPoints: [
                  "First Law (Inertia): Object remains at rest or in uniform motion unless acted upon by force",
                  "Second Law: F = ma",
                  "Third Law: For every action, there is equal and opposite reaction",
                  "Momentum = mass × velocity"
                ],
                ncertExercises: [
                  {
                    id: "ex8.1-q1",
                    exercise: "Exercise 8",
                    questionNumber: 1,
                    question: "Which of the following has more inertia: a rubber ball or a stone of the same size?",
                    solution: "A stone has more inertia because it has more mass than a rubber ball of the same size. Inertia depends on mass.",
                    difficulty: "easy"
                  }
                ]
              }
            ]
          },
          {
            id: "gravitation",
            title: "Chapter 9: Gravitation",
            concepts: [
              {
                id: "gravity",
                title: "Universal Law of Gravitation",
                videos: [{ id: "v1", title: "Gravitation", url: "dQw4w9WgXcQ" }],
                explanation: "Every object attracts every other object with a force called gravity.",
                keyPoints: [
                  "F = G(m₁m₂)/r²",
                  "G is gravitational constant",
                  "Weight = mass × g (g = 9.8 m/s²)",
                  "Mass is constant, weight changes with location"
                ],
                ncertExercises: [
                  {
                    id: "ex9.1-q1",
                    exercise: "Exercise 9",
                    questionNumber: 1,
                    question: "State the universal law of gravitation.",
                    solution: "Every object in the universe attracts every other object with a force which is directly proportional to the product of their masses and inversely proportional to the square of the distance between them. F = G(m₁m₂)/r²",
                    difficulty: "easy"
                  }
                ]
              }
            ]
          },
          {
            id: "work-energy",
            title: "Chapter 10: Work and Energy",
            concepts: [
              {
                id: "work-energy-def",
                title: "Work and Energy",
                videos: [{ id: "v1", title: "Work and Energy", url: "dQw4w9WgXcQ" }],
                explanation: "Work is done when force causes displacement. Energy is the capacity to do work.",
                keyPoints: [
                  "Work = Force × Displacement × cos(θ)",
                  "Kinetic Energy = ½mv²",
                  "Potential Energy = mgh",
                  "Power = Work/Time"
                ],
                ncertExercises: [
                  {
                    id: "ex10.1-q1",
                    exercise: "Exercise 10",
                    questionNumber: 1,
                    question: "A force of 7 N acts on an object. The displacement is 8 m in the direction of the force. What is the work done?",
                    solution: "Work = Force × Displacement = 7 N × 8 m = 56 J",
                    difficulty: "easy"
                  }
                ]
              }
            ]
          },
          {
            id: "sound",
            title: "Chapter 11: Sound",
            concepts: [
              {
                id: "sound-waves",
                title: "Production and Propagation of Sound",
                videos: [{ id: "v1", title: "Sound", url: "dQw4w9WgXcQ" }],
                explanation: "Sound is produced by vibrating objects and travels as a wave through a medium.",
                keyPoints: [
                  "Sound is a mechanical wave",
                  "Speed of sound: Fastest in solids, slowest in gases",
                  "Frequency: Number of vibrations per second (Hz)",
                  "Audible range: 20 Hz to 20,000 Hz"
                ],
                ncertExercises: [
                  {
                    id: "ex11.1-q1",
                    exercise: "Exercise 11",
                    questionNumber: 1,
                    question: "What is sound and how is it produced?",
                    solution: "Sound is a form of energy that produces sensation of hearing. It is produced by vibrating objects.",
                    difficulty: "easy"
                  }
                ]
              }
            ]
          },
          {
            id: "food-resources",
            title: "Chapter 12: Improvement in Food Resources",
            concepts: [
              {
                id: "crop-production",
                title: "Improvement in Crop Yields",
                videos: [{ id: "v1", title: "Food Resources", url: "dQw4w9WgXcQ" }],
                explanation: "To feed growing population, we need to improve crop production through better varieties, irrigation, and pest control.",
                keyPoints: [
                  "Crop Variety Improvement: Selecting seeds with desirable traits",
                  "Manure: Organic matter (compost, animal waste)",
                  "Fertilizers: NPK (Nitrogen, Phosphorus, Potassium)",
                  "Crop Rotation: Maintains soil fertility"
                ],
                ncertExercises: [
                  {
                    id: "ex12.1-q1",
                    exercise: "Exercise 12",
                    questionNumber: 1,
                    question: "What do we get from cereals, pulses, fruits and vegetables?",
                    solution: "Cereals provide carbohydrates. Pulses give proteins. Fruits and vegetables provide vitamins, minerals, and fiber.",
                    difficulty: "easy"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
