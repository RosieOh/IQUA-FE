# Amorepacific Influencer Quality Intelligence Agent - Frontend

Vue.js 기반의 프론트엔드 애플리케이션입니다.

## 기술 스택

- Vue 3 (Composition API)
- Vue Router
- TailwindCSS
- Vite
- Axios
- Chart.js

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## 프로젝트 구조

```
src/
├── components/
│   ├── features/      # 기능별 컴포넌트
│   └── layout/        # 레이아웃 컴포넌트
├── views/             # 페이지 뷰
├── services/          # API 서비스
├── router/            # 라우터 설정
└── style.css          # 전역 스타일
```

## 주요 기능

1. **인플루언서 리스트**: Trust Score 기반 인플루언서 목록
2. **상세 분석**: 개별 인플루언서의 상세 점수 분석
3. **국가별 비교**: 국가별 가중치 및 결과 비교
4. **브랜드 설정**: 가중치 설정 및 관리
5. **분석 히스토리**: 과거 분석 결과 조회

