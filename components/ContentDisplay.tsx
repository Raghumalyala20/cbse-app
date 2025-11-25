"use client";

import React, { useState } from 'react';
import { BookOpen, Lightbulb, Calculator, Target, BookMarked, Image } from 'lucide-react';
import { Concept } from '../data/syllabus';
import { TextToSpeech } from './TextToSpeech';

interface ContentDisplayProps {
    concept: Concept;
}

export const ContentDisplay: React.FC<ContentDisplayProps> = ({ concept }) => {
    const [activeTab, setActiveTab] = useState<'explanation' | 'examples' | 'practice' | 'ncert'>('explanation');

    const tabs: Array<{ id: 'explanation' | 'examples' | 'practice' | 'ncert', label: string, icon: any }> = [
        { id: 'explanation' as const, label: 'Explanation', icon: BookOpen },
        { id: 'examples' as const, label: 'Examples', icon: Lightbulb },
        { id: 'practice' as const, label: 'Practice', icon: Target },
    ];

    // Add NCERT tab only if exercises exist
    if (concept.ncertExercises && concept.ncertExercises.length > 0) {
        tabs.push({ id: 'ncert', label: 'NCERT Solutions', icon: BookMarked });
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-slate-200">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 font-medium transition-colors ${activeTab === tab.id
                                ? 'bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600'
                                : 'text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            <Icon size={18} />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Content */}
            <div className="p-6">
                {activeTab === 'explanation' && (
                    <div className="space-y-4">
                        {concept.explanation ? (
                            <>
                                {/* Diagrams Section */}
                                {concept.diagrams && concept.diagrams.length > 0 && (
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                            <Image size={18} className="text-indigo-600" />
                                            Visual Diagrams
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {concept.diagrams.map((diagram, index) => (
                                                <div key={index} className="border border-slate-200 rounded-lg p-2 bg-slate-50">
                                                    <img
                                                        src={diagram}
                                                        alt={`Diagram ${index + 1}`}
                                                        className="w-full h-auto rounded"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="prose prose-slate max-w-none relative">
                                    <div className="absolute right-0 top-0">
                                        <TextToSpeech text={concept.explanation} />
                                    </div>
                                    <p className="text-slate-700 leading-relaxed pr-12">{concept.explanation}</p>
                                </div>

                                {concept.keyPoints && concept.keyPoints.length > 0 && (
                                    <div className="mt-6">
                                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                            <Calculator size={18} className="text-indigo-600" />
                                            Key Points to Remember
                                            <div className="ml-auto">
                                                <TextToSpeech text={concept.keyPoints.join('. ')} size="sm" />
                                            </div>
                                        </h4>
                                        <ul className="space-y-2">
                                            {concept.keyPoints.map((point, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <span className="text-indigo-600 font-bold">•</span>
                                                    <span className="text-slate-700">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </>
                        ) : (
                            <p className="text-slate-500 text-center py-8">
                                No explanation available yet. Check back soon!
                            </p>
                        )}
                    </div>
                )}

                {activeTab === 'examples' && (
                    <div className="space-y-6">
                        {concept.examples && concept.examples.length > 0 ? (
                            concept.examples.map((example, index) => (
                                <div key={example.id} className="border border-slate-200 rounded-lg p-4">
                                    <h4 className="font-semibold text-slate-900 mb-2">
                                        Example {index + 1}
                                    </h4>
                                    <div className="bg-blue-50 p-3 rounded mb-3">
                                        <p className="text-slate-800">{example.problem}</p>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded">
                                        <p className="font-medium text-green-900 mb-2">Solution:</p>
                                        <p className="text-slate-700 whitespace-pre-line">{example.solution}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-slate-500 text-center py-8">
                                No examples available yet. Check back soon!
                            </p>
                        )}
                    </div>
                )}

                {activeTab === 'practice' && (
                    <div className="space-y-4">
                        {concept.practiceProblems && concept.practiceProblems.length > 0 ? (
                            concept.practiceProblems.map((problem, index) => (
                                <details key={problem.id} className="border border-slate-200 rounded-lg p-4">
                                    <summary className="font-semibold text-slate-900 cursor-pointer">
                                        Problem {index + 1} {problem.difficulty && (
                                            <span className={`ml-2 text-xs px-2 py-1 rounded ${problem.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                                                problem.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-red-100 text-red-700'
                                                }`}>
                                                {problem.difficulty}
                                            </span>
                                        )}
                                    </summary>
                                    <div className="mt-3 space-y-2">
                                        <p className="text-slate-700">{problem.question}</p>
                                        {problem.hint && (
                                            <div className="bg-yellow-50 p-2 rounded text-sm text-yellow-800">
                                                💡 Hint: {problem.hint}
                                            </div>
                                        )}
                                        <div className="bg-slate-50 p-2 rounded text-sm">
                                            <strong>Answer:</strong> {problem.answer}
                                        </div>
                                    </div>
                                </details>
                            ))
                        ) : (
                            <p className="text-slate-500 text-center py-8">
                                No practice problems available yet. Check back soon!
                            </p>
                        )}
                    </div>
                )}

                {activeTab === 'ncert' && (
                    <div className="space-y-6">
                        {concept.ncertExercises && concept.ncertExercises.length > 0 ? (
                            <>
                                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-4">
                                    <p className="text-indigo-900 text-sm">
                                        📚 <strong>NCERT Textbook Solutions</strong> - Complete step-by-step solutions to all exercises
                                    </p>
                                </div>
                                {concept.ncertExercises.map((exercise) => (
                                    <details key={exercise.id} className="border border-slate-200 rounded-lg p-4 bg-white">
                                        <summary className="font-semibold text-slate-900 cursor-pointer flex items-center justify-between">
                                            <span>
                                                {exercise.exercise} - Question {exercise.questionNumber}
                                                {exercise.difficulty && (
                                                    <span className={`ml-2 text-xs px-2 py-1 rounded ${exercise.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                                                        exercise.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                                            'bg-red-100 text-red-700'
                                                        }`}>
                                                        {exercise.difficulty}
                                                    </span>
                                                )}
                                            </span>
                                            <div onClick={(e) => e.stopPropagation()}>
                                                <TextToSpeech
                                                    text={`Question: ${exercise.question}. Solution: ${exercise.solution}`}
                                                    size="sm"
                                                />
                                            </div>
                                        </summary>
                                        <div className="mt-4 space-y-3">
                                            {exercise.diagram && (
                                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                                    <p className="font-medium text-slate-700 mb-2 text-sm">📐 Figure:</p>
                                                    <img
                                                        src={exercise.diagram}
                                                        alt={`Diagram for ${exercise.exercise} Q${exercise.questionNumber}`}
                                                        className="w-full max-w-md mx-auto h-auto rounded border border-slate-300"
                                                    />
                                                </div>
                                            )}
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <p className="font-medium text-blue-900 mb-2">Question:</p>
                                                <p className="text-slate-800 whitespace-pre-line">{exercise.question}</p>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg">
                                                <p className="font-medium text-green-900 mb-2">Solution:</p>
                                                <p className="text-slate-700 whitespace-pre-line">{exercise.solution}</p>
                                            </div>
                                        </div>
                                    </details>
                                ))}
                            </>
                        ) : (
                            <p className="text-slate-500 text-center py-8">
                                No NCERT solutions available yet. Check back soon!
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
