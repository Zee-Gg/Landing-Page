# Smart Content Automation Landing Page

Welcome to the Smart Content Automation Landing Page project! This is a modern, fast, and responsive website built to showcase a tech product. It's designed to be easy to use and easy to customize.

##  Features

*   **Modern Design:** A sleek and professional look built with the latest web technologies.
*   **AI Chatbot:** Includes a smart assistant (powered by Groq) to answer visitor questions instantly.
*   **Contact Form:** A fully functional contact form that sends emails directly to you (powered by Resend).
*   **Responsive:** Looks great on phones, tablets, and desktop computers.
*   **Fast Performance:** Built with Next.js for speed and SEO optimization.

##  Tech Stack

We used some cool tools to build this:

*   **[Next.js](https://nextjs.org/):** The framework for building the website.
*   **[Tailwind CSS](https://tailwindcss.com/):** For styling and making things look good.
*   **[Groq SDK](https://groq.com/):** Powers the AI chatbot.
*   **[Resend](https://resend.com/):** Handles sending emails reliably.
*   **TypeScript:** Ensures the code is safe and bug-free.

##  Getting Started

Follow these simple steps to get the project running on your computer:

### 1. Clone the Repository

First, get the code on your machine:

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### 2. Install Dependencies

Install the necessary packages:

```bash
npm install
```

### 3. Set Up Environment Variables

You need to tell the app your secret keys for the AI and Email services.

1.  Create a file named `.env` in the root folder.
2.  Add the following lines to it:

```env
GROQ_API_KEY=your_groq_api_key_here
RESEND_API_KEY=your_resend_api_key_here
```

*   *Note: You can get these keys from the Groq and Resend websites.*

### 4. Run the Development Server

Start the website:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Building for Production

When you are ready to share your site with the world, run:

```bash
npm run build
npm start
```

