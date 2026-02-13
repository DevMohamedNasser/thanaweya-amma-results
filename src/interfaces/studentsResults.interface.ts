export type StudentsResults = StudentResult[] | null

export interface StudentResult {
  id: number
  seat_number: string
  student_name: string
  grade: number
  created_at: string
}
