# 원마사지 — 합법 방문 웰니스 마사지 사이트

검증된 전문 테라피스트가 고객의 공간으로 방문하는 **합법 방문 웰니스 마사지 서비스** 사이트입니다.
성인·유흥·불법 서비스와 무관하며, 신뢰·위생·안전·투명한 요금·실제 후기를 전면에 내세운 구조로 설계되었습니다.

## 기술 스택

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- 모바일 우선 반응형 디자인 / 접근성 고려
- 페이지별 메타데이터, canonical, Open Graph, Twitter Card 자동 설정
- JSON-LD 구조화 데이터 (Organization, WebSite, LocalBusiness, Service, FAQPage, Article, Person, BreadcrumbList)
- 네이티브 `sitemap.xml` / `robots.txt` 생성 (`app/sitemap.ts`, `app/robots.ts`)

## 시작하기

```bash
npm install
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버
```

## 디렉터리 구조

```
app/                 # 라우트 (App Router)
  page.tsx           # 홈
  services/          # 서비스 목록 + 상세([slug])
  pricing/           # 요금 안내
  booking/           # 예약 + 완료(noindex)
  areas/             # 지역 목록 + 상세([slug])
  trust/             # 테라피스트 검증 / 위생·안전
  reviews/           # 고객 후기
  wellness-guide/    # 블로그 목록 + 상세([slug])
  authors/[slug]/    # 작성자 페이지
  about, faq, contact, editorial-policy, privacy, terms
  sitemap.ts, robots.ts, not-found.tsx
components/           # Header, Footer, MobileBar, Hero, ServiceCard,
                      # PricingTable, BookingForm, ReviewCard, FAQAccordion,
                      # Breadcrumbs, JsonLd, TrustBadges, AreaCard, AuthorBox, ui
data/                 # services, areas, faqs, reviews, authors, posts
lib/                  # site(설정), nav, metadata, schema(JSON-LD), utils
```

## 운영 전 교체해야 할 항목

배포 전 `lib/site.ts`에서 다음 값을 **실제 정보로 교체**하세요.

- `url` — 실제 도메인
- `phone`, `kakao`, `email`, `hours` — 연락처/운영시간
- `business.*` — 상호, 대표자, 사업자등록번호, 주소, 개인정보 보호책임자

또한 다음 데이터는 예시이며 실제 운영 데이터로 교체해야 합니다.

- `data/reviews.ts` — **실제 이용 고객 후기만** 사용 (허위/과장 금지)
- `data/posts.ts` — 작성자·검수자·업데이트일을 갖춘 실제 콘텐츠
- `components/BookingForm.tsx` — 현재는 완료 페이지로 라우팅만 함. 실제 예약 전송(백엔드/CRM) 연동 필요

## 콘텐츠·SEO 원칙

- 의료 행위/치료 보장/통증 완치 등 과장 표현 금지
- 성인·유흥·불법 서비스 암시 표현 금지, "건전한 웰니스 서비스" 명시
- 지역 페이지는 복사 콘텐츠가 아닌 **지역별 고유 정보** 포함
- 후기·평점 구조화 데이터는 실제 후기가 페이지에 노출될 때만 사용
- 예약 완료 페이지는 `noindex`
- 페이지당 H1 1개, Breadcrumb 적용, 푸터에 사업자 정보·약관·개인정보처리방침 노출
