# 정지원 · iOS Developer Portfolio

빌드 도구 없이 순수 HTML / CSS / JS로 만든 개인 포트폴리오 웹사이트입니다.

## 폴더 구조

```
codeJiwon_portfolio/
├── index.html          # 전체 페이지 (구조 + 텍스트 콘텐츠)
├── css/
│   └── style.css        # 스타일 (색상은 상단 :root 변수로 관리)
├── js/
│   └── main.js           # 인터랙션 (네비게이션, 아코디언, 필터, 스크롤 애니메이션)
└── images/
    ├── profile.jpg               # 프로필 사진 (직접 추가)
    └── projects/                 # 프로젝트별 로고/스크린샷 (직접 추가)
```

## 로컬에서 보기

이미지 폴더(`images/`)를 쓰는 상대경로가 있어서, 파일을 더블클릭해 여는 것보다
로컬 서버로 여는 걸 권장합니다.

```bash
# 이 폴더 안에서
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

또는 VS Code의 Live Server 확장을 사용해도 됩니다.

## 자주 하는 수정

- **텍스트/문구 수정**: `index.html`에서 원하는 섹션의 텍스트를 바로 수정
- **색상/톤 변경**: `css/style.css` 최상단 `:root { ... }` 안의 변수만 바꾸면 전체 톤이 바뀝니다
  (`--accent`, `--accent-2`가 포인트 컬러입니다)
- **새 프로젝트 카드 추가**: `index.html`의 `#portfolio` 섹션에서 기존 `<article class="project-card">` 블록 하나를 통째로 복사해 내용만 바꾸면 됩니다.
  `data-tags`에는 `ios` / `flutter` / `ai` 중 해당하는 값을 넣으면 상단 필터 버튼과 연동됩니다.
- **이미지 추가**: `images/README.md` 참고

## 배포

정적 파일만 있으므로 GitHub Pages, Vercel, Netlify 등 어디든 그대로 올리면 됩니다.
GitHub Pages 기준: 이 저장소를 push한 뒤 Settings → Pages → main 브랜치 루트로 배포하면 됩니다.
