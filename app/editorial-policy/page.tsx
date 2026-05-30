import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero, Section, Container, Notice } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "콘텐츠 작성 및 검수 정책 | 편집 정책",
  description:
    "원마사지 콘텐츠의 작성 목적, AI 사용 공개, 전문가 검수, 출처·업데이트·후기 검수 정책을 안내합니다.",
  path: "/editorial-policy",
});

const sections = [
  {
    h: "콘텐츠 작성 목적",
    p: [
      "본 사이트의 콘텐츠는 방문 웰니스 서비스 이용자가 안전하고 합리적인 선택을 할 수 있도록 돕기 위해 작성됩니다. 검색 순위 조작을 목적으로 대량 생성된 콘텐츠를 게시하지 않습니다.",
    ],
  },
  {
    h: "AI 사용 여부 공개 기준",
    p: [
      "콘텐츠 초안 작성에 보조 도구를 활용하는 경우에도, 최종 내용은 담당 에디터가 검토·수정하며 사실관계를 확인합니다. 자동 생성된 저품질 콘텐츠를 무검수로 발행하지 않습니다.",
    ],
  },
  {
    h: "전문가 검수 기준",
    p: [
      "건강·통증·운동 회복과 관련된 글에는 검수자를 표시합니다. 검수자가 없는 경우 치료·의학적 표현을 피하고 일반 생활 정보 수준으로 작성합니다.",
    ],
  },
  {
    h: "출처 표기 기준",
    p: ["참고한 자료가 있는 경우 글 하단에 출처를 표기합니다."],
  },
  {
    h: "업데이트 기준",
    p: ["정보가 변경되거나 보완이 필요한 경우 업데이트일을 갱신합니다."],
  },
  {
    h: "오류 제보 방법",
    p: ["콘텐츠 오류는 고객지원 채널로 제보해 주시면 확인 후 수정합니다."],
  },
  {
    h: "광고·협찬 표기 기준",
    p: ["광고나 협찬이 포함된 콘텐츠는 명확히 표기합니다."],
  },
  {
    h: "후기 검수 정책",
    p: [
      "실제 이용 고객의 후기만 게시하며, 허위·과장 후기는 사용하지 않습니다. 대가성 후기는 별도로 표시하고, 부정 후기를 임의로 삭제하지 않습니다.",
    ],
  },
];

export default function EditorialPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="고객지원"
        title="콘텐츠 작성 및 검수 정책"
        description="신뢰할 수 있는 정보를 제공하기 위한 편집 원칙을 공개합니다."
      />
      <Container className="pt-6">
        <Breadcrumbs items={[{ name: "편집 정책", href: "/editorial-policy" }]} />
      </Container>

      <Section className="pt-8">
        <div className="mx-auto max-w-3xl">
          <Notice tone="info">
            “본 사이트의 콘텐츠는 방문 웰니스 서비스 이용자가 안전하고 합리적인 선택을 할 수
            있도록 돕기 위해 작성됩니다. 검색 순위 조작을 목적으로 대량 생성된 콘텐츠를 게시하지
            않으며, 건강·안전과 관련된 내용은 필요한 경우 전문가 검수 또는 신뢰할 수 있는 자료
            확인을 거칩니다.”
          </Notice>

          <div className="mt-8 space-y-8">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="text-xl font-semibold text-forest-900">{s.h}</h2>
                {s.p.map((para, i) => (
                  <p key={i} className="mt-2 leading-relaxed text-forest-700">
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
