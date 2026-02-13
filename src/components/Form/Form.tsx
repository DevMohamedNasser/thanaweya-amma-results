"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { result_seat } from "@/app/_action/result_seatNum.api";
import { result_name } from "@/app/_action/result_name.api";
import { TableData } from "../Table";
import { useState } from "react";

const formSchema = z.object({
  srcher: z.string().nonempty(),
});

export function Form() {
  const [studentsData, setStudentsData] = useState<[] | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      srcher: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const value = data.srcher.trim();
    console.log(value);

    if (/^\d+$/.test(value)) {
      const result = await result_seat(value);
      setStudentsData(result);
    } else {
      const result = await result_name(value);
      setStudentsData(result);
    }
  }

  return (
    <div className="flex justify-center flex-wrap w-full px-4 md:px-0">
      <Card className="w-full shadow-lg border border-slate-200 rounded-2xl">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl font-bold text-slate-800">
            نتيجة الثانوية العامة
          </CardTitle>
          <CardDescription className="text-slate-500 text-sm">
            ابحث باستخدام الاسم أو رقم الجلوس
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="srcher"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel className="text-slate-700 font-medium">
                      بيانات البحث
                    </FieldLabel>

                    <Input
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="اكتب جزء من الاسم أو رقم الجلوس"
                      autoComplete="off"
                      className="h-12 text-lg rounded-xl border-slate-300 focus:border-sky-500 focus:ring-sky-500"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Field orientation="horizontal">
            <Button
              type="submit"
              form="form-rhf-demo"
              className="w-full h-12 text-lg rounded-xl bg-sky-600 hover:bg-sky-700 transition"
            >
              بحث
            </Button>
          </Field>
        </CardFooter>
      </Card>
      {studentsData?.length === 0 && (
        <div className="mt-6 text-center text-red-600 text-lg font-medium">
          ❌ لا توجد بيانات مطابقة، حاول مرة أخرى
        </div>
      )}

      {studentsData && <TableData data={studentsData} />}
    </div>
  );
}
