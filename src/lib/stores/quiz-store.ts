import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface QuizConfig {
  sessionId: string;
  sectionFilter: string | null;
  timerEnabled: boolean;
}

export interface AnswerRecord {
  questionId: string;
  userAnswer: string | null;
  isCorrect: boolean;
  timeTakenMs: number;
}

interface QuizState {
  config: QuizConfig | null;
  questionIds: string[];
  answers: AnswerRecord[];
  score: number;
  streak: number;
  maxStreak: number;
  
  setConfig: (config: QuizConfig) => void;
  setQuestionIds: (ids: string[]) => void;
  addAnswer: (answer: AnswerRecord, pointsAdded: number) => void;
  resetQuizState: () => void;
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set) => ({
      config: null,
      questionIds: [],
      answers: [],
      score: 0,
      streak: 0,
      maxStreak: 0,

      setConfig: (config) => set({ config }),
      setQuestionIds: (questionIds) => set({ questionIds }),
      addAnswer: (answer, pointsAdded) =>
        set((state) => {
          const newStreak = answer.isCorrect ? state.streak + 1 : 0;
          return {
            answers: [...state.answers, answer],
            score: state.score + pointsAdded,
            streak: newStreak,
            maxStreak: Math.max(state.maxStreak, newStreak),
          };
        }),
      resetQuizState: () =>
        set({
          config: null,
          questionIds: [],
          answers: [],
          score: 0,
          streak: 0,
          maxStreak: 0,
        }),
    }),
    {
      name: 'medbank-quiz-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
