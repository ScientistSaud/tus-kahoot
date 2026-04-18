export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      questions: {
        Row: {
          id: string
          section: 'basic_sciences' | 'clinical_sciences'
          topic: string
          subtopic: string | null
          stem: string
          option_a: string
          option_b: string
          option_c: string
          option_d: string
          option_e: string | null
          correct_answer: 'A' | 'B' | 'C' | 'D' | 'E'
          created_at: string
        }
        Insert: {
          id?: string
          section: 'basic_sciences' | 'clinical_sciences'
          topic: string
          subtopic?: string | null
          stem: string
          option_a: string
          option_b: string
          option_c: string
          option_d: string
          option_e?: string | null
          correct_answer: 'A' | 'B' | 'C' | 'D' | 'E'
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['questions']['Insert']>
        Relationships: []
      }
      sessions: {
        Row: {
          id: string
          user_id: string
          score: number
          max_streak: number
          timer_enabled: boolean
          section_filter: string | null
          completed_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          score?: number
          max_streak?: number
          timer_enabled?: boolean
          section_filter?: string | null
          completed_at?: string | null
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['sessions']['Insert']>
        Relationships: []
      }
      attempts: {
        Row: {
          id: string
          user_id: string
          session_id: string
          question_id: string
          user_answer: string | null
          is_correct: boolean
          time_taken_ms: number | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          session_id: string
          question_id: string
          user_answer?: string | null
          is_correct?: boolean
          time_taken_ms?: number | null
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['attempts']['Insert']>
        Relationships: []
      }
      bookmarks: {
        Row: {
          id: string
          user_id: string
          question_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          question_id: string
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['bookmarks']['Insert']>
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
