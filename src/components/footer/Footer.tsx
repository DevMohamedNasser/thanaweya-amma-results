import { Linkedin, Github, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-slate-100 dark:bg-slate-900  py-8 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        <div className="space-y-1">
          <p className="text-slate-800 dark:text-slate-200 font-bold text-lg">
            Software Eng. Mohamed R.Nasser
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/mohamed-nasser-3bb5772a5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 dark:text-slate-300 hover:text-sky-500 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://github.com/devmohamednasser"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 dark:text-slate-300 hover:text-sky-500 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
          <a
            href="https://devmohamednasser.github.io/portify"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 dark:text-slate-300 hover:text-sky-500 transition-colors duration-200"
            aria-label="Portfolio"
          >
            <Globe size={28} />
          </a>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="mt-6 text-center text-slate-500 dark:text-slate-400 text-sm" dir="ltr">
        © {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  );
}
