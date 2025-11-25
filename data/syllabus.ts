// Import Math chapters
import { chapter1 as mathCh1 } from './math/chapter1';
import { chapter2 as mathCh2 } from './math/chapter2';
import { chapter3 as mathCh3 } from './math/chapter3';
import { chapter4 as mathCh4 } from './math/chapter4';
import { chapter5 as mathCh5 } from './math/chapter5';
import { chapter6 as mathCh6 } from './math/chapter6';
import { chapter7 as mathCh7 } from './math/chapter7';
import { chapter8Enhanced as mathCh8 } from './math/chapter8_enhanced';
import { chapter9Enhanced as mathCh9 } from './math/chapter9_enhanced';
import { chapter10Enhanced as mathCh10 } from './math/chapter10_enhanced';

// Import Science chapters
import { chapter1 as sciCh1 } from './science/chapter1';
import { chapter2 as sciCh2 } from './science/chapter2';
import { chapter3 as sciCh3 } from './science/chapter3';
import { chapter4 as sciCh4 } from './science/chapter4';
import { chapter5 as sciCh5 } from './science/chapter5';
import { chapter6 as sciCh6 } from './science/chapter6';
import { chapter7 as sciCh7 } from './science/chapter7';
import { chapter8Enhanced as sciCh8 } from './science/chapter8_enhanced';
import { chapter9Enhanced as sciCh9 } from './science/chapter9_enhanced';
import { chapter10Enhanced as sciCh10 } from './science/chapter10_enhanced';

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
          mathCh1,
          mathCh2,
          mathCh3,
          mathCh4,
          mathCh5,
          mathCh6,
          mathCh7,
          mathCh8,
          mathCh9,
          mathCh10,
          {
            id: "surface-areas",
            title: "Chapter 11: Surface Areas and Volumes",
            concepts: [
              {
                id: "sa-volumes",
                title: "Surface Areas and Volumes of 3D Shapes",
                videos: [{ id: "v1", title: "Surface Areas & Volumes", url: "dQw4w9WgXcQ" }],
                explanation: "Study of surface areas and volumes of cuboids, cylinders, cones, spheres and hemispheres.",
                keyPoints: [
                  "Cuboid: TSA = 2(lb + bh + hl), Volume = l×b×h",
                  "Cylinder: CSA = 2πrh, TSA = 2πr(r+h), Volume = πr²h",
                  "Cone: CSA = πrl, TSA = πr(l+r), Volume = (1/3)πr²h",
                  "Sphere: SA = 4πr², Volume = (4/3)πr³"
                ],
                diagrams: ["diagrams/3d_shapes.png"],
                examples: [
                  {
                    id: "ex1",
                    problem: "Find volume of a cylinder with radius 7cm and height 10cm",
                    solution: "Volume = πr²h = (22/7) × 7² × 10 = 1540 cm³"
                  }
                ],
                ncertExercises: [
                  {
                    id: "ex11.1-q1",
                    exercise: "Exercise 11.1",
                    questionNumber: 1,
                    question: "Find the surface area of a sphere of radius 7 cm.",
                    solution: "Surface Area = 4πr² = 4 × (22/7) × 7² = 4 × 22 × 7 = 616 cm²",
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
                explanation: "Statistics deals with collection, organization, presentation, and interpretation of data.",
                keyPoints: [
                  "Mean = Sum of observations / Number of observations",
                  "Median: Middle value when data is arranged in order",
                  "Mode: Most frequently occurring value",
                  "Range = Highest value - Lowest value"
                ],
                diagrams: ["diagrams/statistics_measures.png"],
                examples: [
                  {
                    id: "ex1",
                    problem: "Find mean of 5, 8, 12, 15, 20",
                    solution: "Mean = (5+8+12+15+20)/5 = 60/5 = 12"
                  }
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
          sciCh1,
          sciCh2,
          sciCh3,
          sciCh4,
          sciCh5,
          sciCh6,
          sciCh7,
          sciCh8,
          sciCh9,
          sciCh10,
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
                  "Sound is a mechanical wave (needs medium)",
                  "Speed: Fastest in solids, slowest in gases",
                  "Audible range: 20 Hz to 20,000 Hz",
                  "Echo: Reflection of sound"
                ],
                diagrams: ["diagrams/sound_waves.png"],
                examples: [
                  {
                    id: "ex1",
                    problem: "Why can't we hear sound on the moon?",
                    solution: "Moon has no atmosphere (vacuum). Sound needs a medium to travel."
                  }
                ],
                ncertExercises: [
                  {
                    id: "ex11-q1",
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
                diagrams: ["diagrams/crop_improvement.png"],
                examples: [
                  {
                    id: "ex1",
                    problem: "Why is crop rotation beneficial?",
                    solution: "It prevents soil depletion, reduces pests and diseases, and improves soil fertility by alternating nutrient requirements."
                  }
                ],
                ncertExercises: [
                  {
                    id: "ex12-q1",
                    exercise: "Exercise 12",
                    questionNumber: 1,
                    question: "What do we get from cereals, pulses, fruits and vegetables?",
                    solution: "Cereals provide carbohydrates for energy. Pulses give proteins. Fruits and vegetables provide vitamins, minerals, and dietary fiber.",
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
