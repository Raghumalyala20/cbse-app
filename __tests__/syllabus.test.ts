import { syllabus } from '../data/syllabus';

describe('Syllabus Data Validation', () => {
    test('should have Class 9 data', () => {
        expect(syllabus).toHaveLength(1);
        expect(syllabus[0].id).toBe('class-9');
    });

    test('should have Math and Science subjects', () => {
        const subjects = syllabus[0].subjects;
        expect(subjects).toHaveLength(2);
        expect(subjects[0].id).toBe('maths');
        expect(subjects[1].id).toBe('science');
    });

    test('Math should have 12 chapters', () => {
        const mathChapters = syllabus[0].subjects[0].chapters;
        expect(mathChapters).toHaveLength(12);
    });

    test('Science should have 12 chapters', () => {
        const scienceChapters = syllabus[0].subjects[1].chapters;
        expect(scienceChapters).toHaveLength(12);
    });

    test('All chapters should have concepts', () => {
        syllabus[0].subjects.forEach(subject => {
            subject.chapters.forEach(chapter => {
                expect(chapter.concepts).toBeDefined();
                expect(chapter.concepts.length).toBeGreaterThan(0);
            });
        });
    });

    test('Last 6 Math chapters (8-12) should have NCERT exercises', () => {
        const mathChapters = syllabus[0].subjects[0].chapters;
        for (let i = 7; i < 12; i++) {
            const chapter = mathChapters[i];
            const hasExercises = chapter.concepts.some(concept =>
                concept.ncertExercises && concept.ncertExercises.length > 0
            );
            expect(hasExercises).toBe(true);
        }
    });

    test('Last 6 Science chapters (8-12) should have NCERT exercises', () => {
        const scienceChapters = syllabus[0].subjects[1].chapters;
        for (let i = 7; i < 12; i++) {
            const chapter = scienceChapters[i];
            const hasExercises = chapter.concepts.some(concept =>
                concept.ncertExercises && concept.ncertExercises.length > 0
            );
            expect(hasExercises).toBe(true);
        }
    });

    test('NCERT exercises should have required fields', () => {
        syllabus[0].subjects.forEach(subject => {
            subject.chapters.forEach(chapter => {
                chapter.concepts.forEach(concept => {
                    if (concept.ncertExercises) {
                        concept.ncertExercises.forEach(exercise => {
                            expect(exercise.id).toBeDefined();
                            expect(exercise.exercise).toBeDefined();
                            expect(exercise.questionNumber).toBeDefined();
                            expect(exercise.question).toBeDefined();
                            expect(exercise.solution).toBeDefined();
                        });
                    }
                });
            });
        });
    });


});
