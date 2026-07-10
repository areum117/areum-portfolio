# Component Rules

## 컴포넌트 구조

src/
  App.tsx
  main.tsx
  data/
    portfolio.ts
  components/
    Header.tsx
    HeroFlow.tsx
    FlowIdentity.tsx
    AIServiceFlow.tsx
    FeaturedIsland.tsx
    ProjectConstellation.tsx
    StackToolkit.tsx
    AskPortfolio.tsx
    ContactFlow.tsx
  styles/
    global.css

## 공통 규칙

- 모든 데이터는 가능한 src/data/portfolio.ts로 분리한다.
- 컴포넌트에는 구조와 렌더링 로직만 둔다.
- CSS class 이름은 의미 있게 작성한다.
- 외부 UI 라이브러리는 사용하지 않는다.
- Framer Motion은 사용하지 않는다.
- CSS transition과 keyframes만 사용한다.

## 애니메이션

과한 애니메이션은 금지한다.

허용:
- 카드 hover 시 살짝 떠오름
- 노드 hover 시 연결선 강조
- Ask Portfolio 답변 전환 시 fade/slide
- 버튼 hover 시 작은 dot 이동
- flow line이 은은하게 강조되는 효과

필수:
- prefers-reduced-motion 대응

## 반응형

Desktop:
- 지도형 flow line
- 비대칭 레이아웃
- project island layout

Tablet:
- 카드 간격 조정
- flow line 유지

Mobile:
- 중앙 세로 flow line
- 모든 노드 1열
- Hero 세로 배치
- Project gallery는 세로 스택 또는 가로 스크롤

## 접근성

- 버튼과 링크에 명확한 텍스트 제공
- 색 대비 확보
- 이미지 alt 제공
- hover에만 의존하지 않기
- 키보드 포커스 스타일 제공