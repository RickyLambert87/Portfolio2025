# Modern 3D Portfolio Website

A modern, interactive portfolio website featuring immersive 3D graphics and smooth animations. Built to showcase my projects and skills as a web developer with a focus on creating engaging user experiences.

## What This Is

This is my personal portfolio website that combines cutting-edge web technologies to create an immersive, interactive experience. The site features animated 3D models, dynamic visual effects, and smooth page transitions to stand out from traditional portfolio websites.

## Tech Stack

### Core Framework
- **Next.js 14** - React framework for production with server-side rendering and optimal performance
- **React 18** - For building the component-based UI architecture

### 3D Graphics & Animation
- **Three.js** - JavaScript 3D library for rendering interactive 3D graphics in the browser
- **@react-three/fiber** - React renderer for Three.js, allowing declarative 3D scene composition
- **@react-three/drei** - Helper library providing useful abstractions and ready-to-use components for react-three-fiber

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Framer Motion** - Production-ready animation library for React
- **Lucide React** - Beautiful, consistent icon set

### Forms & Communication
- **React Hook Form** - Performant form validation with minimal re-renders
- **EmailJS** - Client-side email service for the contact form
- **Sonner** - Toast notifications for user feedback

## Why These Technologies?

**Three.js & React Three Fiber**: I chose these because they allow me to create stunning 3D experiences directly in the browser without plugins. React Three Fiber makes Three.js scenes feel natural in React, using components instead of imperative code.

**Next.js**: Provides excellent performance through SSR, automatic code splitting, and optimized builds. The App Router gives me flexibility in organizing routes and layouts.

**Framer Motion**: Adds professional polish with smooth animations that enhance rather than distract from the content. It's declarative and works seamlessly with React.

**Tailwind CSS**: Speeds up development significantly while maintaining consistency. The utility-first approach makes it easy to create responsive designs without writing custom CSS.

## Three.js Implementation

### 3D Model Integration

The 3D models are implemented using a modular approach:

1. **RenderModel Component** (`src/components/RenderModel.jsx`)
   - Creates the Three.js Canvas that serves as the 3D rendering context
   - Uses Suspense for lazy loading 3D assets
   - Configures the environment with the "dawn" preset for realistic lighting

2. **3D Model Components** (`src/components/models/`)
   - Models are loaded from GLTF files using `useGLTF` from drei
   - Each model component uses `useFrame` hook to create animations
   - Example: The Wizard model has a floating animation using sine wave calculations
   - Models are positioned, scaled, and rotated to fit the scene perfectly

3. **Animation System**
   - `useFrame` hook runs on every render frame (60fps)
   - Mathematical functions (sine/cosine) create smooth, natural movements
   - Example: `position.y = -1.5 + Math.sin(state.clock.elapsedTime) * 0.15` creates gentle floating

### Custom Visual Effects

**FireFlies Background** (`src/components/FireFliesBackground.jsx`)
- Custom particle system creating ambient firefly effects
- Uses React state and intervals to generate particles dynamically
- CSS animations for movement with randomized durations and positions
- Limited to 15 particles at a time for performance optimization

## Key Features

- **Interactive 3D Models**: Animated wizard character and hat models that respond to page context
- **Smooth Page Transitions**: Framer Motion animations between routes
- **Responsive Design**: Fully responsive across all device sizes
- **Dark Theme**: Custom dark theme with accent colors
- **Project Showcase**: Display of 10+ projects with descriptions and links
- **Contact Form**: Functional contact form with EmailJS integration
- **Social Links**: Direct links to GitHub, LinkedIn, and Twitter
- **Firefly Effects**: Ambient particle animations for visual interest

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_PUBLIC_KEY=your_emailjs_public_key
```

### Getting EmailJS Credentials

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template for contact form submissions
4. Copy your Service ID, Template ID, and Public Key
5. Add them to your `.env.local` file

## Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/RickyLambert87/Portfolio2025.git
cd Portfolio2025
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Create .env.local file and add your EmailJS credentials
cp .env.example .env.local
# Edit .env.local with your actual credentials
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── (sub pages)/        # Grouped routes (about, contact, projects)
│   ├── data.js             # Project data and navigation config
│   ├── page.js             # Home page
│   └── layout.js           # Root layout
├── components/
│   ├── models/             # 3D model components
│   ├── navigation/         # Navigation components
│   ├── about/              # About page components
│   ├── contact/            # Contact form
│   ├── projects/           # Project display components
│   ├── FireFliesBackground.jsx
│   ├── RenderModel.jsx     # Three.js Canvas wrapper
│   └── Sound.jsx
public/
├── models/                 # GLTF 3D model files
└── background/             # Background images
```

## Performance Optimizations

- **Lazy Loading**: 3D models load with React Suspense
- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Next.js Image component for optimized loading
- **Model Preloading**: GLTF models are preloaded to prevent pop-in
- **Particle Limiting**: FireFlies capped at 15 for performance

## Browser Compatibility

Works best on modern browsers with WebGL support:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project is open source and available under the MIT License.

## Contact

- **GitHub**: [@RickyLambert87](https://github.com/RickyLambert87)
- **LinkedIn**: [Ricky Lambert](https://www.linkedin.com/in/ricky-lambert/)
- **Twitter**: [@CryptoRick2024](https://twitter.com/CryptoRick2024)

---

Built with passion by Ricky Lambert | Web3Wizard
