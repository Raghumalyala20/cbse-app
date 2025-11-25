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
                videos: [
                  { id: "v1", title: "Number Systems - Full Chapter", url: "IueVrMlmQ2I" }
                ],
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
                videos: [
                  { id: "v1", title: "Matter in Our Surroundings", url: "dQw4w9WgXcQ" }
                ],
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
          }
        ]
      }
    ]
  }
];
