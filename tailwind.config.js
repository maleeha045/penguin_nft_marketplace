
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        neon: {
          purple: '#8b5cf6',
          'purple-bright': '#a855f7',
          cyan: '#06b6d4',
          'cyan-bright': '#22d3ee',
          pink: '#ec4899',
        },
        dark: {
          primary: '#0a0a0f',
          secondary: '#0d0d18',
          card: '#12121f',
        },
      },
      animation: {
        'gradient-shift': 'gradientShift 8s ease infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'pulse-glow-cyan': 'pulseGlowCyan 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
