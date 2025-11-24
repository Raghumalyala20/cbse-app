"use client";

import { useState } from "react";
import { syllabus, Grade, Subject, Chapter, Concept, Video } from "../data/syllabus";
import { VideoPlayer } from "../components/VideoPlayer";
import { BookOpen, ChevronRight, PlayCircle, GraduationCap } from "lucide-react";
import clsx from "clsx";

export default function Home() {
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(syllabus[0]); // Default to Class 9
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [selectedConcept, setSelectedConcept] = useState<Concept | null>(null);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject);
    setSelectedChapter(null);
    setSelectedConcept(null);
    setActiveVideo(null);
  };

  const handleChapterSelect = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setSelectedConcept(null);
    setActiveVideo(null);
  };

  const handleConceptSelect = (concept: Concept) => {
    setSelectedConcept(concept);
    if (concept.videos.length > 0) {
      setActiveVideo(concept.videos[0]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <GraduationCap size={32} />
          <h1 className="text-2xl font-bold">CBSE Learning Hub</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 md:p-8 flex flex-col gap-6">

        {/* Selection Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Grade Selector (Fixed for now) */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <label className="block text-sm font-medium text-slate-500 mb-2">Class</label>
            <select
              className="w-full p-2 border rounded-md bg-slate-50 font-semibold"
              value={selectedGrade?.id}
              onChange={(e) => {
                const grade = syllabus.find(g => g.id === e.target.value) || null;
                setSelectedGrade(grade);
                setSelectedSubject(null);
              }}
            >
              {syllabus.map(g => (
                <option key={g.id} value={g.id}>{g.title}</option>
              ))}
            </select>
          </div>

          {/* Subject Selector */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <label className="block text-sm font-medium text-slate-500 mb-2">Subject</label>
            <div className="flex gap-2">
              {selectedGrade?.subjects.map(sub => (
                <button
                  key={sub.id}
                  onClick={() => handleSubjectSelect(sub)}
                  className={clsx(
                    "px-4 py-2 rounded-lg font-medium transition-all flex-1",
                    selectedSubject?.id === sub.id
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  )}
                >
                  {sub.title}
                </button>
              ))}
            </div>
          </div>

          {/* Chapter Selector */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <label className="block text-sm font-medium text-slate-500 mb-2">Chapter</label>
            <select
              className="w-full p-2 border rounded-md bg-slate-50"
              disabled={!selectedSubject}
              value={selectedChapter?.id || ""}
              onChange={(e) => {
                const chapter = selectedSubject?.chapters.find(c => c.id === e.target.value) || null;
                handleChapterSelect(chapter!);
              }}
            >
              <option value="">Select a Chapter...</option>
              {selectedSubject?.chapters.map(c => (
                <option key={c.id} value={c.id}>{c.title}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Content Area */}
        {selectedChapter && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Concepts List */}
            <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden h-fit">
              <div className="p-4 bg-slate-100 border-b border-slate-200">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <BookOpen size={20} className="text-indigo-600" />
                  Concepts
                </h3>
              </div>
              <div className="divide-y divide-slate-100">
                {selectedChapter.concepts.map((concept) => (
                  <button
                    key={concept.id}
                    onClick={() => handleConceptSelect(concept)}
                    className={clsx(
                      "w-full text-left p-4 hover:bg-indigo-50 transition-colors flex items-center justify-between group",
                      selectedConcept?.id === concept.id ? "bg-indigo-50 border-l-4 border-indigo-600" : ""
                    )}
                  >
                    <span className={clsx("font-medium", selectedConcept?.id === concept.id ? "text-indigo-700" : "text-slate-700")}>
                      {concept.title}
                    </span>
                    <ChevronRight size={16} className={clsx("text-slate-400 group-hover:text-indigo-500", selectedConcept?.id === concept.id ? "text-indigo-600" : "")} />
                  </button>
                ))}
              </div>
            </div>

            {/* Video Player Area */}
            <div className="lg:col-span-2 space-y-4">
              {selectedConcept ? (
                activeVideo ? (
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <PlayCircle className="text-red-500" />
                        {activeVideo.title}
                      </h2>
                      <p className="text-slate-500 text-sm mt-1">
                        {selectedConcept.title} • {selectedChapter.title}
                      </p>
                    </div>
                    <VideoPlayer videoId={activeVideo.url} />
                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-100 text-sm text-yellow-800">
                      <strong>Note:</strong> This video is curated for educational purposes.
                    </div>
                  </div>
                ) : (
                  <div className="h-64 flex items-center justify-center bg-slate-100 rounded-xl border-2 border-dashed border-slate-300 text-slate-400">
                    No video available for this concept yet.
                  </div>
                )
              ) : (
                <div className="h-96 flex flex-col items-center justify-center bg-white rounded-xl border border-slate-200 text-slate-400 p-8 text-center">
                  <div className="bg-indigo-50 p-4 rounded-full mb-4">
                    <PlayCircle size={48} className="text-indigo-200" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-600">Select a Concept</h3>
                  <p>Choose a topic from the left to start learning.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-slate-100 p-4 text-center text-slate-400 text-sm">
        <p>CBSE Learning Hub • v1.1</p>
      </footer>
    </div>
  );
}
