# TechVision - Digital Solutions Agency Landing Page

Welcome to the **TechVision** project! This is a modern, high-performance landing page designed for a digital solutions agency. It showcases services, pricing, and expertise in a sleek, professional way.

##  About The Project

This website is built to help a software agency show off what they do. It's not just a static page; it's interactive and smart.

**Key Highlights:**

*   **Modern & Clean Design:** A professional look with a "Terminal" style hero section that appeals to tech clients.
*   **AI Assistant:** A built-in chatbot (powered by **Groq**) that can answer visitor questions 24/7.
*   **Contact Form:** A working contact form that sends emails directly to the agency (powered by **Resend**).
*   **Fully Responsive:** Looks perfect on mobile phones, tablets, and desktops.
*   **Fast:** Built with Next.js for super-fast loading speeds.

##  Technologies Used

We used the latest and greatest tools to build this:

*   **[Next.js 14](https://nextjs.org/):** The engine running the website.
*   **[Tailwind CSS](https://tailwindcss.com/):** Makes styling easy and beautiful.
*   **[TypeScript](https://www.typescriptlang.org/):** Keeps the code clean and error-free.
*   **[Groq SDK](https://groq.com/):** The brain behind the AI chatbot.
*   **[Resend](https://resend.com/):** The service that delivers emails from the contact form.

##  Project Structure

Here's a quick look at how things are organized:

*   `app/page.tsx`: The main homepage.
*   `app/components/`: All the building blocks like the Hero section, Pricing tables, and the Chatbot.
*   `app/api/chat/`: The backend code that talks to the AI.
*   `app/api/send/`: The backend code that handles sending emails.

##  Getting Started

Want to run this on your own computer? It's easy!

### 1. Get the Code

Clone this repository to your machine:

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### 2. Install Dependencies

Install the software packages needed to run the app:

```bash
npm install
```

### 3. Set Up Your Keys

To make the AI and Email features work, you need API keys.

1.  Create a file named `.env` in the main folder.
2.  Add your keys like this:

```env
GROQ_API_KEY=your_groq_api_key_here
RESEND_API_KEY=your_resend_api_key_here
```

### 4. Run It!

Start the development server:

```bash
npm run dev
```

Now open [http://localhost:3000](http://localhost:3000) in your browser to see the site in action.

##  Deployment

To build the project for production (the version you put on the internet):

```bash
npm run build
npm start
```


