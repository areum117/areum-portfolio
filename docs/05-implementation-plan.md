# Implementation Plan

## Step 1. 데이터 정리

src/data/portfolio.ts를 만들고 다음 데이터를 분리한다.

- hero 정보
- flow identity 원칙
- AI service flow 단계
- featured project
- supporting projects
- stack toolkit
- ask portfolio Q&A
- contact links

## Step 2. 레이아웃 재구성

App.tsx에서 다음 순서로 컴포넌트를 배치한다.

1. Header
2. HeroFlow
3. FlowIdentity
4. AIServiceFlow
5. FeaturedIsland
6. ProjectConstellation
7. StackToolkit
8. AskPortfolio
9. ContactFlow

전체 페이지에는 하나의 flow line이 흐르는 듯한 wrapper를 만든다.

## Step 3. Hero 구현

기존 배경 이미지 오버레이 Hero를 제거한다.
왼쪽 텍스트 + 오른쪽 Service Flow Passport 구조로 만든다.

## Step 4. Flow UI 구현

AI Service Flow 섹션은 가장 중요하다.
노드와 연결선, 데이터 라벨을 사용해
AI 기능이 서비스가 되는 과정을 시각화한다.

## Step 5. Featured Project 구현

내일도와줘! 몽글마을은 Case Study Island로 구현한다.
Problem / Approach / Implementation / Result는 marker 형태로 보여준다.
이미지나 영상은 preview gallery로 분리한다.

## Step 6. Supporting Projects 구현

Project Constellation 형태로 구현한다.
각 프로젝트 카드의 형태와 크기를 다르게 한다.
하지만 전체 디자인 시스템은 유지한다.

## Step 7. Stack Toolkit 구현

기술 스택을 단순 태그가 아니라
AI Toolkit, Backend Bridge, Frontend Surface라는 도구함으로 보여준다.

## Step 8. Ask Portfolio 구현

미리 정의된 Q&A 데이터로 동작하는 인터랙션을 만든다.
질문 버튼 클릭 시 오른쪽 답변 패널이 변경된다.

## Step 9. CSS 정리

global.css에서 다음을 정리한다.

- CSS variables
- typography
- layout
- card styles
- flow line
- responsive
- animations

## Step 10. 최종 점검

아래 기준으로 점검한다.

- 흔한 포트폴리오처럼 보이지 않는가?
- “AI 기능을 서비스 흐름으로 연결하는 개발자”가 첫 화면에서 보이는가?
- 프로젝트가 단순 설명이 아니라 case study로 보이는가?
- Stack이 단순 기술 나열이 아니라 사용 맥락으로 보이는가?
- 모바일에서도 자연스러운가?