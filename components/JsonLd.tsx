/**
 * JSON-LD 구조화 데이터 렌더링 컴포넌트.
 * 서버 컴포넌트에서 그대로 사용 가능하며, 전달된 객체를 script 태그로 출력한다.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // 구조화 데이터는 정적으로 생성되며 사용자 입력을 포함하지 않는다.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
