# 이미지 추가 가이드

이 폴더에 아래 파일명으로 이미지를 넣으면 사이트에 자동으로 반영됩니다.
(파일이 없으면 자동으로 이니셜 placeholder가 대신 표시되니, 지금 당장 없어도 사이트는 정상 작동합니다.)

## 프로필 사진

- `images/profile.jpg` — Hero 섹션 프로필 사진 (세로형 4:5 비율 권장, 예: 800×1000px)

## 프로젝트 로고 / 아이콘

`images/projects/` 폴더 안에 정사각형 이미지(권장 200×200px 이상)로 넣어주세요.

| 파일명 | 사용처 |
|---|---|
| `withsuhyeon-logo.png` | 수현이랑 |
| `with1lu-logo.png` | 일루와 |
| `anaju-logo.png` | 안아주 |
| `smileguardian-logo.png` | SmileGuardian |
| `unibond-logo.png` | Unibond |
| `orb-logo.png` | 오브(ORB) |

## 스크린샷을 더 추가하고 싶다면

각 프로젝트 카드의 `.project-detail-inner` 안에 아래처럼 `<img>` 태그를 추가하면 됩니다.

```html
<div class="stat-grid" ...>...</div>

<!-- 스크린샷 추가 예시 -->
<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px,1fr)); gap:10px; margin:20px 0;">
  <img src="images/projects/withsuhyeon/1.jpg" alt="수현이랑 스크린샷 1" style="border-radius:12px; border:1px solid var(--border);" />
  <img src="images/projects/withsuhyeon/2.jpg" alt="수현이랑 스크린샷 2" style="border-radius:12px; border:1px solid var(--border);" />
</div>
```
