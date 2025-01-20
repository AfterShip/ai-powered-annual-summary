# AfterShip Annual Review 2024 🚀

<div align="center">
  An AI-powered, dynamic annual review template with stunning animations and interactive elements.
  
  Perfect for companies wanting to showcase their yearly achievements in style! ✨
</div>

##  About The Project

This is a modern, interactive annual review template created using AI tools. It features beautiful animations, dynamic data visualization, and a Matrix-style rain effect that creates an engaging presentation experience.

### Why Use This Template?
- 🎯 **Easy to Customize**: Simply modify the text content to match your company's data
- 🎨 **Visually Stunning**: Professional animations and transitions out of the box
- 📱 **Responsive Design**: Looks great on both desktop and mobile devices
- 🎵 **Interactive Elements**: Background music and visual effects for engagement
- ⚡ **High Performance**: Built with modern tech stack for smooth experience

## ✨ Features

- 🎨 Beautiful UI with smooth animations
- 📊 Dynamic data visualization with counting effects
- 🎵 Background music with controls
- 🌧️ Matrix-style rain effect
- 📱 Responsive design
- ⚡ Lightning-fast performance with Vite

## 🛠️ Tech Stack

- React
- Vite
- Framer Motion
- TailwindCSS
- TypeScript

## 🚀 Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/AfterShip/annual-review-2024.git
cd annual-review-2024
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Build for production**
```bash
npm run build
```

## 🎨 Customization

### Styling
The project uses TailwindCSS for styling. You can customize the theme in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      // Your custom theme configuration
    }
  }
}
```

### Content
Update the content in `src/components/AnnualReview2024.jsx`. The data is structured as an array of narrative objects:

```javascript
{
  title: 'Your Title',
  metric: 'Your Metric',
  comparison: 'Your Comparison Text'
}
```

Each narrative object supports:
- `title`: Main heading text
- `metric`: Numerical data with animation
- `comparison`: Additional context or comparison text

## 📝 Project Structure

```
annual-review-2024/
├── public/
│   └── bgm.mp3
├── src/
│   ├── components/
│   │   ├── AnnualReview2024.jsx
│   │   ├── CountUp.jsx
│   │   └── MatrixRain.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for amazing animations
- [TailwindCSS](https://tailwindcss.com/) for utility-first CSS
- [Vite](https://vitejs.dev/) for blazing fast development
- [React](https://reactjs.org/) for the UI library
- Special thanks to AfterShip for providing free AI tools that made this project possible

---

<div align="center">
  <p>Made with ❤️ by AfterShip Team</p>
  <p>Feel free to use this template for your own annual review!</p>
</div> 