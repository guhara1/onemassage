import {
  ShieldIcon,
  CalendarIcon,
  CheckIcon,
  UserCheckIcon,
  StarIcon,
} from "./icons";

const badges = [
  {
    title: "사업자 정보 공개",
    desc: "운영 주체와 연락처를 투명하게 공개합니다.",
    Icon: ShieldIcon,
    tone: "text-forest-700 bg-forest-50",
  },
  {
    title: "예약제 운영",
    desc: "사전 예약으로 시간과 지역을 확인해 안내합니다.",
    Icon: CalendarIcon,
    tone: "text-mint-500 bg-mint-400/15",
  },
  {
    title: "위생 체크리스트 적용",
    desc: "손 위생과 도구 관리 기준을 운영합니다.",
    Icon: CheckIcon,
    tone: "text-gold-500 bg-gold-400/15",
  },
  {
    title: "테라피스트 검증 기준",
    desc: "경력·교육·안전 정책 동의를 확인합니다.",
    Icon: UserCheckIcon,
    tone: "text-forest-600 bg-forest-100",
  },
  {
    title: "후기 검수 정책",
    desc: "실제 이용 고객 후기만 게시합니다.",
    Icon: StarIcon,
    tone: "text-gold-500 bg-sand-100",
  },
];

export function TrustBadges() {
  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {badges.map((b) => (
        <li
          key={b.title}
          className="rounded-xl border border-forest-100 bg-white p-4 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-premium"
        >
          <div
            className={`mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-full ${b.tone}`}
          >
            <b.Icon width={20} height={20} />
          </div>
          <p className="text-sm font-semibold text-forest-900">{b.title}</p>
          <p className="mt-1 text-xs leading-relaxed text-forest-500">{b.desc}</p>
        </li>
      ))}
    </ul>
  );
}
