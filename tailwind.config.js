/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'pretendard': ['Pretendard','Segoe UI', 'Open Sans', 'Helvetica Neue'],
        'mono': ['Consolas', 'Menlo', 'Courier', 'monospace']
      },
    },
  },
  plugins: [],
}
