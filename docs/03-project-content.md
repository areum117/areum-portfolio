# Project Content

## Featured Project

### 내일도와줘! 몽글마을

Type:
Main AI Service

Description:
AI 플래너가 사용자의 목표를 일정, TODO, 캐릭터 퀘스트로 연결하는 게이미피케이션 생산성 서비스

Role:
- 싱글턴 TODO 생성 기능 구현
- 멀티턴 플래너 챗봇 구현
- AI 서버와 백엔드, 프론트엔드 연결
- FastAPI/Django 기반 API 흐름 연동
- LLM 후보 모델 테스트 및 결과 정리
- 생성 결과를 TODO/캐릭터 퀘스트 preview/confirm 흐름과 연결

Problem:
기존 생산성 앱은 할 일을 체크하는 데서 끝나 지속 동기와 정서적 연결이 약했다.
또한 LLM 플래너를 실제 서비스에 붙였을 때 응답 품질, 긴 처리 시간, 프론트/백엔드 연동 문제가 함께 발생했다.

Approach:
멀티턴 플래너가 부족한 정보를 먼저 질문하고,
충분한 정보가 모이면 계획을 생성하도록 설계했다.
AI 서버 결과를 백엔드와 프론트에서 사용할 수 있도록 API 흐름을 연결했다.

Implementation:
긴 LLM 호출은 비동기 job/polling 구조로 처리했다.
생성된 TODO를 캐릭터 퀘스트 preview/confirm 흐름과 연결했다.

Result:
사용자가 목표 입력, 계획 생성, TODO 저장, 캐릭터 퀘스트 확인까지 하나의 흐름으로 사용할 수 있게 되었다.

Tech:
React, TypeScript, Django, FastAPI, LLM, GitHub Actions, AWS

---

## Supporting Projects

### Visa La Vista

Type:
AI Web Service

Description:
유학 준비생을 위한 입시 정보 챗봇과 AI 비자 모의 인터뷰 서비스

Role:
- LLM 기반 입시 정보 탐색 흐름 설계
- 비자 모의 인터뷰 기능 구조화
- AI 서버와 웹 서비스 연동 흐름 정리

Tech:
RAG, SQL Agent, STT/TTS, Django, FastAPI, ChromaDB, MySQL, AWS, Docker

### Wemmy Web

Type:
Web Application

Description:
공공/복지 혜택과 프로그램 정보를 탐색하고 신청 현황을 관리하는 React 웹 서비스

Role:
- 혜택과 프로그램 리스트 화면 구현
- 분류, 검색, 선택 정보 기반 탐색 흐름 구현
- 사용자/관리자 UI 구성

Tech:
React, JavaScript, MUI, Axios, React Router

### 폐교에서 살아남기

Type:
LLM Prototype

Description:
GPT-4o-mini를 게임 마스터로 활용한 인터랙티브 공포 시뮬레이션 게임

Role:
- 사용자 선택 기반 다음 장면 생성
- 정신력, 위험도, 친구 상태, 진행률 기반 상태 관리
- 상태값에 따른 멀티 엔딩 분기 구현

Tech:
Python, Streamlit, GPT-4o-mini, JSON Output, Prompting