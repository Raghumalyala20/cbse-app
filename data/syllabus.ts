export interface Video {
  id: string;
  title: string;
  url: string; // YouTube video ID
  duration?: string;
}

export interface Concept {
  id: string;
  title: string;
  videos: Video[];
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
                  { id: "v1", title: "Number Systems - Full Chapter Explanation", url: "IueVrMlmQ2I" }
                ]
              },
              {
                id: "irrational-nums",
                title: "Irrational Numbers",
                videos: [
                  { id: "v2", title: "Irrational Numbers Explained", url: "IueVrMlmQ2I" }
                ]
              },
              {
                id: "real-nums",
                title: "Real Numbers & Decimal Expansions",
                videos: []
              },
              {
                id: "ops-real-nums",
                title: "Operations on Real Numbers",
                videos: []
              },
              {
                id: "exponents",
                title: "Laws of Exponents",
                videos: []
              }
            ]
          },
          {
            id: "polynomials",
            title: "Chapter 2: Polynomials",
            concepts: [
              { id: "poly-intro", title: "Introduction to Polynomials", videos: [] },
              { id: "zeros", title: "Zeroes of a Polynomial", videos: [] },
              { id: "factorisation", title: "Factorisation of Polynomials", videos: [] },
              { id: "identities", title: "Algebraic Identities", videos: [] }
            ]
          },
          {
            id: "coord-geo",
            title: "Chapter 3: Coordinate Geometry",
            concepts: [
              { id: "cartesian", title: "Cartesian System", videos: [] }
            ]
          },
          {
            id: "linear-eq",
            title: "Chapter 4: Linear Equations in Two Variables",
            concepts: []
          },
          {
            id: "euclid",
            title: "Chapter 5: Introduction to Euclid's Geometry",
            concepts: []
          },
          {
            id: "lines-angles",
            title: "Chapter 6: Lines and Angles",
            concepts: []
          },
          {
            id: "triangles",
            title: "Chapter 7: Triangles",
            concepts: []
          },
          {
            id: "quadrilaterals",
            title: "Chapter 8: Quadrilaterals",
            concepts: []
          },
          {
            id: "circles",
            title: "Chapter 9: Circles",
            concepts: []
          },
          {
            id: "heron",
            title: "Chapter 10: Heron's Formula",
            concepts: []
          },
          {
            id: "surface-area",
            title: "Chapter 11: Surface Areas and Volumes",
            concepts: []
          },
          {
            id: "stats",
            title: "Chapter 12: Statistics",
            concepts: []
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
                id: "matter-nature",
                title: "Physical Nature of Matter",
                videos: [
                  { id: "v3", title: "Matter in Our Surroundings - Full Chapter (One Shot)", url: "FkuQHxIZNFs" }
                ]
              },
              { id: "states", title: "States of Matter", videos: [] },
              { id: "evap", title: "Evaporation", videos: [] }
            ]
          },
          {
            id: "matter-pure",
            title: "Chapter 2: Is Matter Around Us Pure",
            concepts: []
          },
          {
            id: "atoms-mols",
            title: "Chapter 3: Atoms and Molecules",
            concepts: []
          },
          {
            id: "structure-atom",
            title: "Chapter 4: Structure of the Atom",
            concepts: []
          },
          {
            id: "life-unit",
            title: "Chapter 5: The Fundamental Unit of Life",
            concepts: []
          },
          {
            id: "tissues",
            title: "Chapter 6: Tissues",
            concepts: []
          },
          {
            id: "motion",
            title: "Chapter 7: Motion",
            concepts: []
          },
          {
            id: "force",
            title: "Chapter 8: Force and Laws of Motion",
            concepts: []
          },
          {
            id: "gravitation",
            title: "Chapter 9: Gravitation",
            concepts: []
          },
          {
            id: "work-energy",
            title: "Chapter 10: Work and Energy",
            concepts: []
          },
          {
            id: "sound",
            title: "Chapter 11: Sound",
            concepts: []
          },
          {
            id: "food-resources",
            title: "Chapter 12: Improvement in Food Resources",
            concepts: []
          }
        ]
      }
    ]
  }
];
