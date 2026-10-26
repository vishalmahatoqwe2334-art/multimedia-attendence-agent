# Multimedia Attendance & Engagement Agent

[![License: MIT](https://img.shields.io/badge/License-MIT-indigo.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![FERPA Compliant Memory](https://img.shields.io/badge/Privacy-FERPA%20Safe%20RAM-emerald.svg)](#privacy-limitations--synthetic-data-notice)

A modern, responsive, professional web application designed for educators to track classroom attendance and student engagement through multi-modal inputs with strict **teacher-in-the-loop verification** and **privacy safeguards**.

---

## 🌟 Key Features

### 1. Unified Educational Dashboard
- **5 High-Impact KPI Metrics**: Total Enrolled Students, Present Count, Absent Count, Real-Time Attendance Rate (%), and Teacher-Observed Engagement Index (%).
- **Interactive Recharts Visualizations**:
  - **Attendance Trend Chart**: Session-by-session breakdown of Present vs. Absent vs. Unverified attendees.
  - **Engagement Curve**: Active learning score trends over chronological lectures.
- **Local AI Session Intelligence**: Real-time synthesized summary covering attendance health, participation highlights, absence risk warnings, and actionable pedagogical suggestions.
- **Recent Sessions & Verification Activity Feed**: Quick navigation and instant roll audits.

### 2. Teacher-Confirmed Student & Attendance Management
- **Full Student Roster CRUD**: Add, edit, and delete demo student records (ID, name, class group, and email).
- **Session Lifecycle Management**: Create new lecture/lab sessions with date, time, subject, and room location.
- **Flexible Roster Controls**:
  - One-click status toggles: `Present`, `Absent`, and `Unverified`.
  - Batch operations: *Mark All Present*, *Clear All*.
  - Per-student instructor remarks and medical excuse logs.
  - Live search and filter by status or name/ID.
- **Audit Trail & Corrections Log**: Every manual edit or status change records instructor timestamps, rationale, and actor identity.

### 3. Multimedia Analysis (Browser-Native & Ethical)
- **Multi-Format Support**: Upload photos (JPG, PNG, WebP ≤ 15MB) or classroom video clips (MP4, WebM ≤ 50MB).
- **Live Camera Test Snapshot**: Captures a snapshot directly from your browser webcam using `navigator.mediaDevices.getUserMedia`.
- **Pre-Loaded Sample Media**: Generate an instant synthetic classroom photo with one click for effortless testing.
- **Simulated Person Detection Mode**:
  - Visual simulation pipeline showing figure density estimation and bounding box preview overlays.
  - Generates candidate match suggestions with match scores.
- **Teacher Confirmation Gate**: *Zero automated marking.* The instructor must manually review, verify, or override attendance suggestions before they are committed to the session record.
- **Zero Cloud Leakage**: Media files are processed exclusively in browser volatile RAM via `URL.createObjectURL` and can be purged at any time with one click.

### 4. Qualitative Engagement Analytics
- **Structured Activity Timeline**: Chronological milestones (`Peer Discussion`, `Hands-On Lab`, `Concept Quiz`, `Q&A Dialogue`).
- **Teacher Observation Logger**: Record active participants, participation intensity (`High`, `Moderate`, `Low`), and qualitative notes.
- **Engagement Scorecard**: Evaluates active learning milestones and offers actionable follow-up advice.

### 5. Official Reports & Export Tools
- **Filterable Matrix**: Filter by academic class, lecture date, and roll status.
- **CSV Data Export**: One-click download of standardized CSV records including student codes, session metadata, verification source, and observations.
- **Print-Friendly Report**: Clean `@media print` layout hiding navigational chrome and formatting headers, tabular rosters, and instructor signature lines.

### 6. Preferences, Backups & Privacy Settings
- Customizable school name, teacher name, and default class group.
- Export and import full JSON database backups.
- One-click **Reset Demo Data** and **Load Demo Data** buttons to restore standard benchmarks.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | High-performance component-based UI |
| **Vite 6** | Ultra-fast build tool and dev server |
| **TypeScript 5.6** | Robust static type safety across data models |
| **Tailwind CSS 3.4** | Custom modern SaaS styling with dark navy & indigo palette |
| **Recharts 2.15** | Responsive SVG/canvas analytics charts |
| **Lucide React** | Consistent, modern iconography |
| **Browser LocalStorage** | Zero-latency persistence without external database requirements |
| **Native Web APIs** | HTML5 Video, Canvas API, MediaDevices WebRTC snapshot |

---

## 🔒 Privacy Limitations & Synthetic Data Notice

> [!IMPORTANT]
> **Synthetic Benchmark Notice**: All initial student names, identification codes, attendance history, and computer vision outputs in this application are **100% synthetic demonstration data**.

This application is strictly designed around **ethical educational technology guidelines**:
1. **No Pseudo-Scientific Biometrics**: The application **does not** infer emotion, learning comprehension, attention, or cognitive ability from facial expressions or ocular gaze.
2. **Teacher-In-The-Loop Mandate**: No student is ever marked present or absent solely by computer vision or AI. Final determinations require explicit educator verification.
3. **FERPA / Local Memory Compliance**: Uploaded images and video streams are handled strictly through browser object URLs in volatile RAM. No image blobs, video bytes, or biometric vectors are written to `localStorage` or uploaded to remote cloud servers.
4. **Instant Purge Control**: Users can clear uploaded media and revoke object URLs immediately via the *Purge Media from RAM* action.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or later (v20+ or v24+ recommended)
- **npm**: v9.0.0 or later

### Installation

1. Clone or navigate to the repository directory:
   ```bash
   cd "multimedia attendance-agent"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Local Development Commands

- **Start Dev Server**:
  ```bash
  npm run dev
  ```
  The app will open at `http://localhost:5173/`.

- **Type Check & Production Build**:
  ```bash
  npm run build
  ```
  Produces optimized static assets in the `dist/` directory.

- **Preview Production Build**:
  ```bash
  npm run preview
  ```

---

## ☁️ Deployment Instructions for Vercel

The application is structured as a standard static Vite single-page application and is immediately deployable on [Vercel](https://vercel.com):

### Option A: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B: Deploy via Vercel Dashboard (GitHub)
1. Push this project to your GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. The build settings are detected automatically:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**. The application requires **zero environment variables** or paid API keys for full functionality.

---

## 📁 Project Structure

```
multimedia-attendance-agent/
├── index.html                     # HTML5 entry with Inter font
├── package.json                   # Dependencies and scripts
├── postcss.config.js              # PostCSS plugins
├── tailwind.config.js             # Tailwind color palette & layout config
├── tsconfig.json                  # TypeScript compiler options
├── vite.config.ts                 # Vite bundler configuration
├── src/
│   ├── main.tsx                   # React root entry point
│   ├── App.tsx                    # Application shell & routing state
│   ├── index.css                  # Tailwind directives & print media styles
│   ├── types/
│   │   └── index.ts               # Core TypeScript data contracts
│   ├── data/
│   │   └── mockData.ts            # Synthetic demo students, sessions & records
│   ├── context/
│   │   └── AppContext.tsx         # Central state, actions & persistence sync
│   ├── utils/
│   │   ├── storage.ts             # Safe localStorage abstraction & backup tools
│   │   ├── aiSummary.ts           # Deterministic local AI summary generator
│   │   └── exportCsv.ts           # Standardized CSV generator & file exporter
│   └── components/
│       ├── common/
│       │   ├── Badge.tsx          # Reusable status indicator pills
│       │   ├── Modal.tsx          # Accessible modal dialog with backdrop
│       │   └── Toast.tsx          # Non-intrusive notification banner
│       ├── layout/
│       │   ├── Sidebar.tsx        # Responsive dark navy navigation drawer
│       │   ├── Header.tsx         # Context bar, class switcher & session selector
│       │   └── DemoNoticeBanner.tsx # Prominent synthetic data & safety disclaimer
│       ├── dashboard/
│       │   ├── DashboardView.tsx  # Grid combining all overview analytics
│       │   ├── StatCards.tsx      # 5 KPI metrics with progress bars
│       │   ├── AttendanceChart.tsx # Recharts Bar chart (Present vs Absent)
│       │   ├── EngagementChart.tsx # Recharts Area chart (Active engagement curve)
│       │   ├── AISummaryCard.tsx  # Local AI heuristics generator
│       │   ├── RecentSessionsCard.tsx # Quick session selector & health
│       │   └── RecentActivityTable.tsx # Live audit correction feed
│       ├── attendance/
│       │   ├── AttendanceView.tsx # Roster management container
│       │   ├── StudentRosterTable.tsx # Real-time status toggles, search & filter
│       │   ├── StudentModal.tsx   # Add/Edit student dialog
│       │   ├── SessionModal.tsx   # Add new session dialog
│       │   └── AuditLogModal.tsx  # Full chronological teacher audit history
│       ├── engagement/
│       │   ├── EngagementView.tsx # Engagement module container
│       │   ├── ActivityTimeline.tsx # Chronological session milestone feed
│       │   ├── AddObservationModal.tsx # Log qualitative teacher observation
│       │   └── EngagementScorecard.tsx # Qualitative strengths & suggestions
│       ├── media/
│       │   ├── MediaAnalysisView.tsx # Multi-modal analysis container
│       │   ├── MediaUploader.tsx  # Drag/drop, validation & live camera capture
│       │   ├── MediaViewer.tsx    # Native video playback & canvas overlays
│       │   ├── SimulatedDetectionResults.tsx # Headcount & candidate review gate
│       │   └── PrivacyControlsCard.tsx # RAM purge & FERPA compliance notice
│       ├── reports/
│       │   ├── ReportsView.tsx    # Report filters, CSV export & print trigger
│       │   └── PrintableReport.tsx # Print-optimized official transcript
│       └── settings/
│           └── SettingsView.tsx   # Profile, JSON backups & ethical charter
```

---

## 📄 License
This project is open-source and released under the [MIT License](LICENSE).
