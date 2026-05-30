"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  phone: string;
  area: string;
  address: string;
  date: string;
  time: string;
  service: string;
  duration: string;
  request: string;
  agreePrivacy: boolean;
  agreeSafety: boolean;
}

const initial: FormState = {
  name: "",
  phone: "",
  area: "",
  address: "",
  date: "",
  time: "",
  service: "",
  duration: "60분",
  request: "",
  agreePrivacy: false,
  agreeSafety: false,
};

export function BookingForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "이름을 입력해 주세요.";
    if (!/^[0-9\-+\s]{8,}$/.test(form.phone.trim()))
      next.phone = "연락 가능한 전화번호를 입력해 주세요.";
    if (!form.area) next.area = "방문 지역을 선택해 주세요.";
    if (!form.address.trim()) next.address = "상세 주소를 입력해 주세요.";
    if (!form.date) next.date = "희망 날짜를 선택해 주세요.";
    if (!form.time) next.time = "희망 시간을 선택해 주세요.";
    if (!form.service) next.service = "서비스 종류를 선택해 주세요.";
    if (!form.agreePrivacy) next.agreePrivacy = "개인정보 수집에 동의해 주세요.";
    if (!form.agreeSafety) next.agreeSafety = "안전 정책에 동의해 주세요.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // 데모 구현: 서버 연동 없이 완료 페이지로 이동.
    // 실제 운영 시에는 예약 정보를 안전한 백엔드/CRM으로 전송하세요.
    router.push("/booking/complete");
  }

  const field =
    "w-full rounded-lg border border-forest-200 px-3 py-2.5 text-sm text-forest-900 outline-none transition-colors focus:border-forest-500 focus:ring-2 focus:ring-forest-100";
  const labelCls = "mb-1.5 block text-sm font-medium text-forest-800";
  const errCls = "mt-1 text-xs text-red-600";

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            className={cn(field, errors.name && "border-red-400")}
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            autoComplete="name"
          />
          {errors.name && <p className={errCls}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            연락처 <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            placeholder="010-0000-0000"
            className={cn(field, errors.phone && "border-red-400")}
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            autoComplete="tel"
          />
          {errors.phone && <p className={errCls}>{errors.phone}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="area" className={labelCls}>
            방문 지역 <span className="text-red-500">*</span>
          </label>
          <select
            id="area"
            className={cn(field, errors.area && "border-red-400")}
            value={form.area}
            onChange={(e) => set("area", e.target.value)}
          >
            <option value="">선택해 주세요</option>
            {areas.map((a) => (
              <option key={a.slug} value={a.name}>
                {a.name}
              </option>
            ))}
            <option value="기타">기타 (상담 시 확인)</option>
          </select>
          {errors.area && <p className={errCls}>{errors.area}</p>}
        </div>
        <div>
          <label htmlFor="address" className={labelCls}>
            상세 주소 <span className="text-red-500">*</span>
          </label>
          <input
            id="address"
            type="text"
            placeholder="건물명/동·호수 포함"
            className={cn(field, errors.address && "border-red-400")}
            value={form.address}
            onChange={(e) => set("address", e.target.value)}
          />
          {errors.address && <p className={errCls}>{errors.address}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className={labelCls}>
            희망 날짜 <span className="text-red-500">*</span>
          </label>
          <input
            id="date"
            type="date"
            className={cn(field, errors.date && "border-red-400")}
            value={form.date}
            onChange={(e) => set("date", e.target.value)}
          />
          {errors.date && <p className={errCls}>{errors.date}</p>}
        </div>
        <div>
          <label htmlFor="time" className={labelCls}>
            희망 시간 <span className="text-red-500">*</span>
          </label>
          <input
            id="time"
            type="time"
            className={cn(field, errors.time && "border-red-400")}
            value={form.time}
            onChange={(e) => set("time", e.target.value)}
          />
          {errors.time && <p className={errCls}>{errors.time}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className={labelCls}>
            서비스 종류 <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            className={cn(field, errors.service && "border-red-400")}
            value={form.service}
            onChange={(e) => set("service", e.target.value)}
          >
            <option value="">선택해 주세요</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
          {errors.service && <p className={errCls}>{errors.service}</p>}
        </div>
        <div>
          <label htmlFor="duration" className={labelCls}>
            이용 시간
          </label>
          <select
            id="duration"
            className={field}
            value={form.duration}
            onChange={(e) => set("duration", e.target.value)}
          >
            <option value="60분">60분</option>
            <option value="90분">90분</option>
            <option value="120분">120분</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="request" className={labelCls}>
          요청사항
        </label>
        <textarea
          id="request"
          rows={3}
          className={field}
          placeholder="선호 강도, 집중 부위, 건물 출입 안내 등을 적어 주세요."
          value={form.request}
          onChange={(e) => set("request", e.target.value)}
        />
      </div>

      <div className="space-y-3 rounded-xl bg-forest-50 p-4">
        <label className="flex items-start gap-2.5 text-sm text-forest-800">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-forest-300"
            checked={form.agreePrivacy}
            onChange={(e) => set("agreePrivacy", e.target.checked)}
          />
          <span>
            개인정보 수집 및 이용에 동의합니다. (예약 상담 목적,{" "}
            <a href="/privacy" className="underline">
              개인정보처리방침
            </a>
            )
          </span>
        </label>
        {errors.agreePrivacy && <p className={errCls}>{errors.agreePrivacy}</p>}
        <label className="flex items-start gap-2.5 text-sm text-forest-800">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-forest-300"
            checked={form.agreeSafety}
            onChange={(e) => set("agreeSafety", e.target.checked)}
          />
          <span>
            건전한 웰니스 목적의 서비스이며, 부적절한 요청은 접수되지 않는다는 안전 정책에
            동의합니다.
          </span>
        </label>
        {errors.agreeSafety && <p className={errCls}>{errors.agreeSafety}</p>}
      </div>

      <p className="text-sm leading-relaxed text-forest-500">
        예약 신청 후 상담원이 가능 시간과 지역을 확인해 연락드립니다. 테라피스트와 고객 모두의
        안전을 위해 부적절한 요청은 접수되지 않습니다.
      </p>

      <button
        type="submit"
        className="w-full rounded-lg bg-forest-700 px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-forest-800"
      >
        예약 신청하기
      </button>
    </form>
  );
}
