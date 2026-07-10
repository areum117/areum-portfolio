# Animation Rules

## Animation Direction

이 포트폴리오의 애니메이션은 장식용이 아니라,
“AI 기능이 서비스 흐름으로 연결되는 과정”을 이해시키기 위한 장치여야 한다.

애니메이션의 핵심 키워드는 다음과 같다.

- subtle
- flow-based
- smooth
- technical but warm
- not flashy
- meaningful motion

## Core Principle

화면 요소가 무작위로 움직이면 안 된다.

모든 움직임은 다음 중 하나의 목적을 가져야 한다.

1. 사용자의 시선을 다음 흐름으로 안내한다.
2. AI Service Flow의 연결 구조를 보여준다.
3. 프로젝트의 문제 해결 과정을 단계적으로 이해시킨다.
4. 인터랙션 가능한 요소를 자연스럽게 알려준다.

## Required Animations

### 1. Hero Entrance

Hero 영역이 처음 로드될 때 다음 순서로 등장한다.

1. 작은 라벨
2. 메인 카피
3. 서브 카피
4. CTA 버튼
5. Service Flow Passport 카드
6. Passport 카드 내부의 flow line

구현 방식:
- opacity
- transform: translateY
- transition-delay
- CSS keyframes 사용 가능

주의:
- 너무 느리지 않게
- 전체 등장 시간은 1초 내외
- 과한 bounce 금지

### 2. Flow Line Motion

AI Service Flow 섹션의 연결선에는 은은한 움직임을 준다.

표현:
- 작은 dot이 연결선을 따라 이동
- 또는 연결선 gradient가 천천히 흐르는 느낌

단계:
User Input → Context Check → AI Planning → API Bridge → UI Preview → Confirm & Save

연결선 라벨:
- message
- context
- plan_json
- job_id
- todo_items
- user_confirm

주의:
- 계속 강하게 번쩍이면 안 됨
- 배경보다 살짝만 강조
- prefers-reduced-motion 환경에서는 정지 상태로 보여야 함

### 3. Scroll Reveal

각 섹션의 노드와 카드는 스크롤 시 부드럽게 나타나야 한다.

구현 방식:
- 가능하면 IntersectionObserver 사용
- 어렵다면 CSS animation-delay 기반으로 처리
- opacity: 0 → 1
- translateY(16px) → 0

주의:
- 모든 요소가 동시에 나타나지 않게 약간의 stagger 적용
- 너무 많은 요소에 적용해서 성능을 떨어뜨리지 않기

### 4. Node Hover

Flow node, project marker, toolkit card에 hover 효과를 준다.

효과:
- transform: translateY(-4px)
- border-color accent 변경
- box-shadow 약하게 증가
- 연결된 작은 dot 또는 line 강조

주의:
- hover 없이는 정보를 볼 수 없는 구조 금지
- 모바일에서는 hover에 의존하지 않기

### 5. Ask Portfolio Response Transition

질문 버튼을 클릭하면 답변 패널이 부드럽게 전환된다.

효과:
- fade-in
- slight slide-up
- 작은 cursor blink
- response panel 상단 status dot 활성화

주의:
- 실제 타이핑처럼 한 글자씩 출력하지 않아도 됨
- 답변 변경이 빠르고 자연스럽게 느껴져야 함

### 6. Contact Final Node

마지막 Contact 섹션에서는 위에서 이어진 flow line이 마지막 CTA에 도착하는 느낌을 준다.

효과:
- 작은 node glow
- CTA 버튼 hover 시 line이 켜지는 느낌
- 어두운 ink panel 위에서 은은한 gradient

## Forbidden Animations

다음 애니메이션은 사용하지 않는다.

- 과한 bounce
- 3D flip
- 계속 흔들리는 텍스트
- 지나치게 빠른 marquee
- 화면 전체가 크게 흔들리는 parallax
- 너무 긴 loading animation
- 귀여운 캐릭터가 화면을 계속 돌아다니는 효과
- 의미 없는 장식용 particle 남발

## Performance Rules

- CSS transition과 keyframes를 우선 사용한다.
- Framer Motion은 사용하지 않는다.
- transform과 opacity 중심으로 애니메이션을 구현한다.
- width, height, top, left를 계속 변경하는 애니메이션은 피한다.
- box-shadow 애니메이션은 과하게 사용하지 않는다.
- prefers-reduced-motion을 반드시 고려한다.

## Accessibility

다음 미디어 쿼리를 포함한다.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}