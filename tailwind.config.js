/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B1120',
        panel: '#111C32',
        card: '#17243A',
        brand: { DEFAULT: '#3B82F6', dark: '#2563EB' },
        accent: '#22D3EE',
        ink: '#F8FAFC',
        mute: '#94A3B8',
        line: '#29384F',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
