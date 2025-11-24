# GlassCSS Builder

![GlassCSS Builder](https://img.shields.io/badge/GlassCSS-Builder-blue)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.3-38B2AC)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF)

A visual tool for creating and customizing glassmorphism effects in CSS. Build beautiful glass-like UI components with an intuitive interface and generate production-ready CSS code instantly.

## ✨ Features

- 🎨 **Real-time Preview**: See your glassmorphism effects come to life as you adjust parameters
- 🎛️ **Customizable Properties**: Control color, opacity, blur, and border radius with intuitive sliders
- 📋 **Code Generation**: Instantly generate clean, production-ready CSS code
- 🎯 **Copy to Clipboard**: One-click code copying for seamless integration into your projects
- 📱 **Responsive Design**: Works perfectly on all device sizes
- ⚡ **Lightning Fast**: Built with Vite for instant loading and smooth interactions

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/glasscss-builder.git
cd glasscss-builder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎮 Usage

1. **Adjust Properties**: Use the control panel to modify:
   - RGB color values
   - Transparency (alpha)
   - Blur intensity
   - Border radius

2. **Preview Changes**: See your glassmorphism effect update in real-time

3. **Copy Code**: Click the copy button to get the generated CSS code

4. **Implement**: Paste the CSS into your project and apply the `.glass-element` class to any element

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and development server
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
glasscss-builder/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Banner.jsx      # Header banner component
│   │   ├── CodeOutput.jsx  # CSS code display component
│   │   ├── InputPanel.jsx  # Control panel component
│   │   └── PreviewCard.jsx # Preview component
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Project dependencies
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) for the amazing UI framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the lightning-fast build tool

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ by [Your Name]