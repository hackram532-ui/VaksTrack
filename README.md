🛡️ VaksTrack

**VaksTrack** is a secure, beginner-friendly, full-stack **Vaccination Management System** designed to manage anonymized vaccination records, track public health metrics, simulate outbreaks, and integrate with official Indian government APIs.

> 💡 This project was created as a hackathon submission by a developer known for perfection in code quality and functionality.

---
✨ Features

- 🧑‍⚕️ **Add and Manage Individuals**  
  - Assign age-based vaccine schedules  
  - Track pending, upcoming, and completed vaccinations

- 📊 **Statistics & Graphs**  
  - Coverage rates per city or demographic  
  - Built with dynamic charts

- 🧬 **Infection Tracking**  
  - Visualize infection rates by location  
  - Fetch real-time case data from official **Indian Govt APIs**

- 📅 **Vaccination Scheduling**  
  - Automated schedule based on age and vaccine type  
  - Supports multiple vaccines: COVID-19, Polio, Hepatitis, etc.

- 🔔 **Reminders & Alerts**  
  - Automated notifications for due vaccines  
  - Outbreak risk simulations based on low coverage

- 🧾 **Manual Data Entry**  
  - Add anonymous or user-based vaccine data  
  - Record demographics, location, and disease type

- 👤 **User Profile Management**  
  - Profile access via sidebar  
  - Update personal or vaccination info securely

---

## 🧰 Tech Stack

| Layer       | Tech                              |
|-------------|-----------------------------------|
| Frontend    | React + TypeScript + TailwindCSS  |
| Backend     | Supabase (Auth + DB)              |
| APIs        | Government of India COVID API     |
| Deployment  | Vercel                            |

---

## ⚙️ Local Development Setup

### 🛠️ Requirements

- npm
- Supabase Project with URL & Anon Key
- `.env.local` file

---

### 🚀 Steps to Run Locally

Bash:
# 1. Clone the repo
git clone https://github.com/hackram532-ui/VaksTrack.git
cd VaksTrack

# 2. Install dependencies
npm install

# 3. Add environment variables
cp .env.example .env.local

Structure:
src/
├── components/        # Reusable UI
├── pages/             # Main app routes
├── api/               # API integrations
├── lib/               # Supabase client
├── utils/             # Helper functions
├── App.tsx            # App root
