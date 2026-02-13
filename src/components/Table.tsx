import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StudentsResults } from "../interfaces/studentsResults.interface";

export function TableData({ data }: { data: StudentsResults }) {
  console.log("from Table.tsx", data);
  return (
    <Table className="mt-10 w-full overflow-auto rounded-xl border border-slate-200 shadow-sm">
      <TableHeader className="bg-slate-100">
        <TableRow>
          <TableHead className="text-slate-700 text-start text-lg font-bold">
            رقم الجلوس
          </TableHead>
          <TableHead className="text-slate-700 text-start text-lg font-bold">
            الاسم
          </TableHead>
          <TableHead className="text-slate-700 text-start text-lg font-bold">
            المجموع
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data?.map((student) => (
          <TableRow key={student.id} className="hover:bg-sky-50 transition">
            <TableCell className="py-4 text-lg font-medium text-slate-800">
              {student.seat_number}
            </TableCell>
            <TableCell className="text-lg text-slate-700">
              {student.student_name}
            </TableCell>
            <TableCell className="text-lg font-semibold text-sky-700">
              {student.grade}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
