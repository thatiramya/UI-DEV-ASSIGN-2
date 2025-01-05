# AI Manager🚀

A cutting-edge AI project management dashboard built with **Next.js, React.js**, offering a responsive design, and a seamless user experience. Manage your AI projects efficiently with powerful tools, and a modern interface. 💼

## ✨ Features

- **Intuitive Dashboard**: Comprehensive overview of AI projects with real-time status updates.
- **Responsive Design**: Adaptive layout for all devices with a collapsible sidebar.
- **Payment Tracking**: Integrated payment history, transaction management, and invoice generation. 💳

---

## 🛠 Technology Stack

| Category   | Technology       |
|------------|------------------|
| **Frontend** | Next.js, React.js |
| **Language** | TypeScript      |
| **Styling**  | Tailwind CSS    |
| **Animations** | Framer Motion |
| **UI Components** | shadcn/ui  |
| **Icons** | Lucide React      |

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/thatiramya/UI-DEV-ASSIGN-2.git
   ```

2. **Install Dependencies**
   ```bash
   cd ai-project-dashboard
   npm install
   ```

3. **Run the Development Server**
   ```bash
   npm run dev
   ```

---

## 📁 Project Structure

```plaintext
└── UI-DEV-ASSIGN-2/            # Root directory of the project
    ├── README.md                         # Documentation file for the project
    ├── components.json                   # Configuration or list of components
    ├── next.config.js                    # Next.js configuration file
    ├── package.json                      # Node.js project metadata and dependencies
    ├── postcss.config.js                 # Configuration for PostCSS
    ├── tailwind.config.ts                # Tailwind CSS configuration
    ├── tsconfig.json                     # TypeScript configuration
    ├── .eslintrc.json                    # ESLint configuration for linting JavaScript/TypeScript
    ├── app/                              # Next.js app directory for routing and page management
    │   ├── globals.css                   # Global CSS styles
    │   ├── layout.tsx                    # Layout component for consistent structure across pages
    │   ├── page.tsx                      # Main page component
    │   ├── account/                      # Directory for account-related pages
    │   │   └── page.tsx                  # Account management page
    │   └── manage/                       # Directory for management-related pages
    │       └── page.tsx                  # Project management page
    ├── components/                       # Reusable components for the UI
    │   ├── theme-provider.tsx            # Component for managing theme (light/dark mode)
    │   ├── account/                      # Components specific to account functionalities
    │   │   ├── payment-history.tsx       # Component for displaying payment history
    │   │   └── settings.tsx              # Component for account settings
    │   ├── dashboard/                    # Components specific to the dashboard
    │   │   └── project-table.tsx         # Component for displaying a table of projects
    │   ├── layout/                       # Components related to layout and transitions
    │   │   ├── content-fade.tsx          # Component for fading content transitions
    │   │   ├── page-transition.tsx       # Component for page transitions
    │   │   ├── sidebar.tsx               # Component for the sidebar layout
    │   │   └── transitions/              # Directory for transition components
    │   │       ├── fade-in.tsx           # Fade-in transition component
    │   │       ├── scale-in.tsx          # Scale-in transition component
    │   │       └── slide-in.tsx          # Slide-in transition component
    │   ├── manage/                       # Components related to project management
    │   │   └── project-upload.tsx        # Component for uploading project details
    │   ├── providers/                    # Directory for provider components
    │   │   └── app-provider.tsx          # App-wide provider for context management
    │   └── ui/                           # Generic UI components
    │       ├── animated-logout-button.tsx # Component for animated logout button
    │       ├── aspect-ratio.tsx          # Component for maintaining aspect ratio
    │       ├── avatar.tsx                # Component for user avatars
    │       ├── badge.tsx                 # Component for badges
    │       ├── button.tsx                # Button component
    │       ├── card.tsx                  # Card component
    │       ├── chart.tsx                 # Component for rendering charts
    │       ├── checkbox.tsx              # Checkbox component
    │       ├── collapsible.tsx           # Collapsible component for hiding/showing content
    │       ├── command.tsx               # Component for command interface
    │       ├── context-menu.tsx          # Context menu component
    │       ├── dialog.tsx                # Dialog component for modal windows
    │       ├── dropdown-menu.tsx         # Dropdown menu component
    │       ├── hover-card.tsx            # Hover card component
    │       ├── input.tsx                 # Input field component
    │       ├── label.tsx                 # Label component
    │       ├── menubar.tsx               # Menubar component
    │       ├── navigation-menu.tsx       # Navigation menu component
    │       ├── progress.tsx              # Progress bar component
    │       ├── scroll-area.tsx           # Scroll area component for custom scrolling
    │       ├── select.tsx                # Select dropdown component
    │       ├── slider.tsx                # Slider component
    │       ├── switch.tsx                # Switch (toggle) component
    │       ├── table.tsx                 # Table component
    │       ├── tabs.tsx                  # Tabs component for tabbed navigation
    │       ├── textarea.tsx              # Textarea component
    │       ├── toast.tsx                 # Toast notification component
    │       └── toaster.tsx               # Component for managing toast notifications
    ├── hooks/                            # Custom React hooks
    │   └── use-toast.ts                  # Hook for managing toast notifications
    └── lib/                              # Utility functions and global store
        ├── store.ts                      # Centralized store for state management
        └── utils.ts                      # Utility functions for the application

```

---

## 🔧 Configuration

- **next.config.js**: Next.js configuration file.
- **tailwind.config.ts**: Tailwind CSS customization.
- **tsconfig.json**: TypeScript configuration.

---


![WhatsApp Image 2025-01-06 at 01 18 02_e026a529](https://github.com/user-attachments/assets/0bea530d-b517-4fd4-92b3-bb4c6797a722)
*Dashboard view*

![WhatsApp Image 2025-01-06 at 01 18 44_2fc9b271](https://github.com/user-attachments/assets/d7bbeab4-6f22-4247-8e6b-d909f5efc203)
*Manage*

![WhatsApp Image 2025-01-06 at 01 19 00_725de4fd](https://github.com/user-attachments/assets/65f32735-143a-4bbc-b986-6e3619e69b2e)
*Accounts*

![WhatsApp Image 2025-01-06 at 01 19 26_c9100ea2](https://github.com/user-attachments/assets/55aa235f-428f-4f15-8ece-ed02545469f3)
*Payment history*

---

## 🤝 Contributing

Contributions are always welcome! Follow these steps:

1. **Fork the Repository**.
2. **Create your feature branch**:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add some AmazingFeature"
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request** for review.

---

## Acknowledgments

- **Next.js** - The React Framework.
- **Tailwind CSS** - Utility-first CSS framework.
- **shadcn/ui** - UI component library.
- **Framer Motion** - Animation library.

---

## 🌐 View Demo

[Click here to view the demo](https://drive.google.com/file/d/1Yb6bpdeejB2zqdjNvRJtww0-h0SS5oDw/view?usp=sharing)

---
