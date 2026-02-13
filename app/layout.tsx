import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "نتيجة الثانوية العامة – اعرف درجاتك فورًا",
  description: "ابحث بسهولة عن نتيجة الثانوية العامة باستخدام الاسم أو رقم الجلوس واعرف المجموع الكلي لجميع المواد.",
  keywords: "نتيجة الثانوية العامة, درجات الطلاب, البحث بالاسم, رقم الجلوس, المجموع الكلي",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
