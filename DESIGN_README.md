# Bowls n Buns - Restaurant Website Redesign

## 🎨 Design Overview

This is a modern, dark-mode-first redesign for **Bowls n Buns**, a healthy fusion bowls restaurant in Milton, Ontario. The redesign focuses on creating a premium, clean, and visually appetizing experience that reflects urban street-food energy.

---

## ✨ Key Design Features

### **1. Dark Mode First**
- **Deep charcoal/black background** (#121212) for the main canvas
- **Slightly lighter paper elements** (#1E1E1E) for cards and containers
- **High contrast white text** (#FFFFFF) for maximum readability
- **Light gray secondary text** (#B0B0B0) for supporting content

### **2. Accent Color - Rust/Terracotta**
- **Primary accent**: #D8704A (warm rust/terracotta)
- **Light variant**: #E08B6A (for hover states)
- **Dark variant**: #C0603D (for pressed states)
- Used sparingly for:
  - Buttons and CTAs
  - Borders and highlights
  - Interactive elements
  - Focus states

### **3. Typography**
- **Primary font**: Manrope (modern, clean, highly readable)
- **Fallbacks**: Inter, Poppins, sans-serif
- **Heading weights**: 700 (bold) for h1-h4, 600 (semi-bold) for h5-h6
- **Body text**: 1rem with 1.6 line height for optimal readability
- **Button text**: 600 weight, no text-transform (natural case)

### **4. Spacing & Layout**
- **Generous padding** throughout (16-48px based on context)
- **Consistent gaps** using 8px grid system (theme.spacing)
- **Breathing room** between sections
- **Clean borders** with subtle opacity (33% of accent color)
- **Smooth transitions** (0.3s ease) for interactive elements

---

## 🏗️ Component Improvements

### **AppBar**
- Transparent background with blur effect
- Horizontal layout with space-between alignment
- Logo grows to take available space
- Subtle border-bottom with accent color
- Hover effects on logo and menu button

### **HeroSection**
- Full-width, 70vh minimum height
- Gradient background from dark to lighter grays
- Radial accent overlay for visual interest
- Animated text entry with fade and blur
- Professional, spacious layout

### **About Page**
- Elegant founder story section with underlined heading
- Clean opening hours display with hover effects
- Google Maps integration with dark theme styling
- Updated to Milton, Ontario location (43.5183, -79.8774)
- Consistent phone format: +1 (905) 123-4567
- Opening hours: standardized format (7:00 AM - 1:00 AM)

### **Menu Page**
- Category buttons with clear selected state
- Gradient accent bar on menu items
- Hover effects with subtle animations
- Clean typography hierarchy
- Better spacing between items

### **Reservation Form**
- Centered, card-based layout (max-width: 600px)
- Modern input fields with accent underlines
- Clear focus states
- Prominent CTA button with hover animation
- Form validation with helpful error messages

### **Map Component**
- Dark-themed Google Maps styling
- Clean integration with surrounding content
- Proper API key handling via environment variables
- Responsive sizing (min-height: 200px)

---

## 🎯 Design Principles Applied

### **Visual Hierarchy**
1. **Primary elements**: Bold headings, CTA buttons
2. **Secondary elements**: Body text, labels
3. **Tertiary elements**: Helper text, metadata

### **Consistency**
- Unified color palette across all pages
- Consistent spacing using theme.spacing()
- Standard border-radius (8-16px)
- Uniform hover and focus states

### **Accessibility**
- High contrast text (WCAG AA compliant)
- Clear focus indicators
- Readable font sizes (minimum 1rem)
- Semantic HTML structure

### **Performance**
- Optimized font loading (Google Fonts with preconnect)
- Smooth CSS transitions (0.3s ease)
- Lazy loading for page components
- Minimal re-renders with proper React patterns

---

## 🎨 Color Palette Reference

```css
/* Background Colors */
--background-default: #121212;
--background-paper: #1E1E1E;

/* Text Colors */
--text-primary: #FFFFFF;
--text-secondary: #B0B0B0;
--text-disabled: #666666;

/* Accent Colors */
--accent-main: #D8704A;
--accent-light: #E08B6A;
--accent-dark: #C0603D;

/* Primary Colors */
--primary-main: #212121;
--primary-light: #2C2C2C;
--primary-dark: #121212;
```

---

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: 0-640px
- **Tablet**: 640-1200px
- **Desktop**: 1200px+

### **Adaptations**
- **Mobile**: Single column, full-width cards, hidden desktop nav
- **Tablet**: Two-column layouts where appropriate
- **Desktop**: Full layout with sidebar navigation

---

## 🚀 Getting Started

### **Prerequisites**
1. Node.js (v16+)
2. npm or yarn
3. Google Maps API key (for map functionality)

### **Installation**
```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Add your Google Maps API key to .env
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here

# Start development server
npm run dev
```

### **Build for Production**
```bash
npm run build
npm run preview
```

---

## 🔧 Configuration

### **Google Maps API Key**
1. Get your API key from [Google Cloud Console](https://developers.google.com/maps/documentation/javascript/get-api-key)
2. Add it to your `.env` file:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
   ```

### **Restaurant Details**
Update restaurant information in `/src/data/RestaurantDetail.tsx`:
- Opening hours
- Address
- Phone number
- Social media links

---

## 📄 File Structure

```
src/
├── components/          # Reusable UI components
│   ├── AppBar.tsx      # Navigation bar
│   ├── HeroSection.tsx # Hero section layout
│   ├── Map.tsx         # Google Maps integration
│   └── ...
├── pages/              # Page components
│   ├── Home/           # Landing page
│   ├── Menu/           # Menu page with categories
│   ├── About/          # About page with info
│   └── Reservation/    # Reservation form
├── theme/              # Theme configuration
│   ├── theme.tsx       # Dark/light theme definitions
│   └── ...
└── data/               # Static data
    ├── RestaurantDetail.tsx
    └── ListOfDishes.tsx
```

---

## 🎯 Future Enhancements

1. **Animation Library**: Add Framer Motion for more sophisticated animations
2. **Image Optimization**: Implement lazy loading for food images
3. **Online Ordering**: Integration with delivery platforms
4. **Reviews**: Customer testimonials section
5. **Gallery**: Professional food photography showcase
6. **Blog**: Recipes, health tips, and restaurant news

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 📝 License

MIT License - feel free to use this design for your own projects.

---

## 📞 Contact

For questions or feedback about the design, please reach out to the development team.

---

**Designed with ❤️ for Bowls n Buns - Healthy Fusion Bowls in Milton, Ontario**
