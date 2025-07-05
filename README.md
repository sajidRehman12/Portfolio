# Sadia Khalil - Portfolio

A modern, minimal portfolio website showcasing software engineering and AI/ML development skills. Built with Next.js and Tailwind CSS.

## Features

- **Responsive Design**: Looks great on all devices
- **Modern UI**: Clean, minimal design with smooth animations
- **Fast Performance**: Built with Next.js for optimal speed
- **Skills Showcase**: Highlights key technical competencies
- **Project Portfolio**: Features 5 main projects with GitHub links
- **Contact Integration**: Direct links to email, phone, and social media

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
Portfolio/
├── app/
│   ├── components/
│   │   ├── Header.js       # Navigation header
│   │   ├── Hero.js         # Main introduction section
│   │   ├── About.js        # Education and experience
│   │   ├── Skills.js       # Technical skills showcase
│   │   ├── Projects.js     # Project portfolio
│   │   └── Contact.js      # Contact information
│   ├── globals.css         # Global styles and animations
│   ├── layout.js           # Main layout wrapper
│   └── page.js             # Home page component
├── package.json
├── tailwind.config.js
└── README.md
```

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Deploy the `.next` folder to Netlify

### Manual Deployment
1. Run `npm run build`
2. Upload the generated files to your hosting provider

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: '#0070f3',
  secondary: '#7c3aed',
  // ... add your preferred colors
}
```

### Content
Update the following files to customize content:
- `app/components/Hero.js` - Personal information
- `app/components/About.js` - Education and experience
- `app/components/Skills.js` - Technical skills
- `app/components/Projects.js` - Project portfolio
- `app/components/Contact.js` - Contact information

### Styling
- `app/globals.css` - Global styles and animations
- Individual component files - Component-specific styling

## Technologies Used

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **JavaScript/JSX** - Clean, readable code

## Performance Features

- Optimized images and assets
- Smooth scroll navigation
- Hover animations and transitions
- Mobile-first responsive design
- Fast loading times

## Contact

For any questions or customizations, reach out to:
- Email: sadiakhalil957@gmail.com
- LinkedIn: https://www.linkedin.com/in/sadia-khalil-851889261/
- GitHub: https://github.com/SadiaKhalil125

---

Built with ❤️ using Next.js and Tailwind CSS 