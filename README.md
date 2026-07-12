<div align="center">
  <img src="./public/assets/profile/profile.jpg" width="128" alt="조아름 프로필 이미지" />

  <h1>Areum Portfolio</h1>

  <p>
    AI 기능을 서비스 안에서 끝까지 이어 붙이는 개발자 조아름의 포트폴리오입니다.
  </p>

  <p>
    <a href="https://areum117.github.io/areum-portfolio/">Portfolio</a>
    ·
    <a href="https://github.com/areum117">GitHub</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-19-202020?style=flat-square&logo=react&logoColor=white" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.7-202020?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-6-202020?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  </p>
</div>

---

## About

일상에서 느낀 불편함을 그냥 넘기지 않고, 사용자가 더 편하게 입력하고 확인하고 이어갈 수 있는 흐름으로 바꾸는 데 관심이 있습니다.

이 포트폴리오는 단순히 결과물을 나열하기보다, 각 프로젝트에서 어떤 문제를 발견했고 어떤 구조로 연결했는지 정리하는 데 초점을 두었습니다.

## Featured Projects

### 내일도와줘! 몽글마을

TODO를 캐릭터 퀘스트, 피드, 회고로 이어주는 AI 생산성 서비스입니다.

- 자연어 TODO 생성과 날짜 표현 처리 흐름 구현
- 멀티턴 플래너 챗봇 파이프라인과 응답 품질 개선
- FastAPI AI 서버, Django TODO API, React 화면 연동
- preview / confirm 기반 저장 흐름 정리

### Visa La Vista

유학 준비생을 위한 입시 정보 챗봇과 AI 비자 모의 인터뷰 서비스입니다.

- RAG, SQL Agent, STT/TTS 역할 분리
- Django, FastAPI, AWS 기반 서비스 구조 정리
- AI 검색 흐름과 인터뷰 연습 흐름 연결

### Wemmy Web

서울시 임신, 출산 지원 정보를 확인할 수 있게 만든 웹 프론트엔드 프로젝트입니다.

- 구별 지원 정보 목록과 상세 화면 구현
- React Router 기반 화면 흐름 구성
- Axios API 요청과 UI 상태 연결

### 폐교에서 살아남기

GPT-4o-mini를 게임 마스터처럼 활용한 선택형 공포 게임 프로토타입입니다.

- 선택 기반 다음 장면 생성
- 정신력, 위험도, 진행률 상태 관리
- JSON 응답과 화면 업데이트 분리

## Tech Stack

| Area | Stack |
| --- | --- |
| Frontend | React, TypeScript, Vite |
| AI Service | LLM, RAG, LangGraph, FastAPI |
| Backend | Django, MySQL |
| Infra | AWS EC2, RDS, Docker, Nginx, Gunicorn |
| Workflow | GitHub Actions, Git |

## Local Setup

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

