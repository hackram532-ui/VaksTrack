# 🛡️ VaksTrack

**VaksTrack** is a secure, beginner-friendly, full-stack **Vaccination Management System** built to track and manage vaccination records, visualize public health data, simulate outbreaks, and integrate with official Indian government health APIs.

> 💡 Created as a hackathon submission by a developer known for precision, performance, and bug-free code.

---

## ✨ Key Features

### 🧑‍⚕️ Individual Management
- Add individuals with personal details and age
- Assign automatic, age-based vaccine schedules
- View pending, completed, and upcoming vaccinations

### 📊 Statistics & Graphs
- Coverage rates by location or demographic
- Dynamic charts showing vaccine distribution and trends

### 🧬 Infection Tracking
- Visualize infection and outbreak rates by location
- Integrates with **Indian Government APIs** for live data

### 📅 Vaccination Scheduling
- Automatically generated schedules based on age and vaccine type
- Supports multiple vaccines (COVID-19, Polio, Hepatitis, etc.)

### 🔔 Reminders & Alerts
- Sends reminders for due or missed vaccines
- Simulates outbreak risk in low-coverage areas

### 🧾 Manual Data Entry
- Add anonymized vaccination data
- Enter location, demographic, and disease info

### 👤 User Profile Management
- Secure user profile section
- Update personal and vaccination details
- Accessible via sidebar navigation

---

## 🧰 Tech Stack

| Layer     | Tech                             |
|-----------|----------------------------------|
| Frontend  | React + TypeScript + TailwindCSS |
| Backend   | Supabase (Auth + PostgreSQL DB)  |
| APIs      | Govt. of India COVID APIs        |
| Hosting   | Vercel                           |

---

## ⚙️ Local Development Setup

### 🛠 Requirements
- Node.js (v16+)
- npm or yarn
- Git
- Supabase account & project

---

### 📦 Installation Steps

#### 1. Clone the Repository

```bash
git clone https://github.com/hackram532-ui/VaksTrack.git
cd VaksTrack
npm install
# or
yarn install
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
npm run dev
# or
yarn dev

Visit: http://localhost:3000

🌐 API Integration
Real-time COVID-19 and infection data pulled from:

https://data.covid19india.org (or official APIs)

Stored securely using .env.local

Sanjay Ram R and teammates – Frontend & Backend Dev | UI/UX Lover | Hackathon Builder
GitHub: @hackram532-ui
