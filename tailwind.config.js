/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amore: {
          // 아모레퍼시픽 브랜드 컬러 - 하늘색 계열 밝은 테마
          primary: '#1976D2',       // 딥 블루 (메인 컬러)
          secondary: '#42A5F5',    // 라이트 블루 (액센트)
          accent: '#1565C0',        // 더 진한 블루
          beige: '#E3F2FD',         // 하늘색 베이지
          cream: '#E8F4F8',         // 하늘색 크림 (메인 배경)
          rose: '#BBDEFB',          // 하늘색 로즈
          gold: '#C9A961',          // 골드
          success: '#66BB6A',       // 그린
          warning: '#FFA726',       // 오렌지
          danger: '#EF5350',        // 레드
          text: '#1A1A1A',          // 다크 텍스트
          textLight: '#5A5A5A',     // 라이트 텍스트
          border: '#90CAF9',        // 보더 (하늘색)
          navy: '#0D47A1',          // 네이비 (고급스러운 악센트)
          bgDark: '#E8F4F8',        // 하늘색 배경
          bgCard: '#FFFFFF',        // 카드 배경 (흰색)
        }
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

