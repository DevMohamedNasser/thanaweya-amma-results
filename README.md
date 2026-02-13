# 🎓 Thanaweya Amma Results – 2024 / 2025

A professional web application built with the **latest version of Next.js (App Router)** to display **Thanaweya Amma results for the academic year 2024 / 2025**.

The project is designed with a **scalable architecture** that allows the results data to be updated easily for **future academic years**, once new datasets become available.

---

## 📌 Project Overview

This application provides a simple and reliable way for students and parents to:

- Search for **Thanaweya Amma results**
- Using **Seat Number** or **Student Name**
- View the **Total Score** clearly and instantly

> 🔄 The system is built to continuously support upcoming years without changing the core logic — only the database content needs to be updated.

---

## ✨ Features

- 🔍 Search by seat number or student name
- 📊 Clear display of the total score
- 🧠 Automatic detection of numeric vs text input
- ⚡ High performance using Next.js App Router
- 🌍 Arabic-first user interface (RTL-friendly)
- 🧾 Form validation with React Hook Form & Zod
- 🗄️ PostgreSQL database powered by Supabase
- 📱 Fully responsive across all devices

---

## 🛠️ Tech Stack

- Next.js (Latest Version – App Router)
- React
- TypeScript
- Tailwind CSS
- Supabase (PostgreSQL)
- React Hook Form
- Zod
- Lucide React Icons

---

## 📂 Project Structure

```bash
app/
 ├─ page.tsx
 ├─ layout.tsx
 ├─ globals.css
 ├─ _action/
components/
 ├─ Form/
 ├─ Table/
 ├─ Footer/
interfaces/
 ├─ studentsResults.interface.ts
⚙️ Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2️⃣ Install Dependencies
npm install
# or
yarn install
# or
pnpm install

3️⃣ Run the Development Server
npm run dev
# or
yarn dev
# or
pnpm dev


Open your browser and visit:
👉 http://localhost:3000

🧠 How It Works

The user enters a seat number or student name

The system automatically detects the input type:

Numeric → Search by seat number

Text → Search by student name

Data is fetched from the Supabase database

The total score is displayed in a clean and readable table

If no data is found, a clear validation message is shown

🔄 Future Updates

The application currently displays Thanaweya Amma results for 2024 / 2025

It is fully prepared to support future academic years

Updating to a new year requires only adding new data to the database

No changes to UI, logic, or search functionality are required

👨‍💻 Author

Mohamed Nasser
Front-End Developer (React / Next.js)

🔗 LinkedIn: https://www.linkedin.com/in/mohamed-nasser-3bb5772a5

💻 GitHub: https://github.com/devmohamednasser

🌐 Portfolio: https://devmohamednasser.github.io/portify

📄 License & Disclaimer

This project is open-source and developed strictly for educational and training purposes.

❌ Not intended for commercial or profit use

❌ Not affiliated with any official educational authority

📚 Built as a learning project to demonstrate real-world web development skills

All displayed data is for demonstration and educational purposes only.