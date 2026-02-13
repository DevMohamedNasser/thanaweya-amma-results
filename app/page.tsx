import { Footer } from "@/src/components/footer/Footer";
import { Form } from "@/src/components/Form/Form";

export default function Home() {
  return (
    <div>
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 font-sans">
      <main className="w-full max-w-4xl px-4 py-24">
        <Form />
      </main>
      
    </div><Footer /></div>
  );
}
