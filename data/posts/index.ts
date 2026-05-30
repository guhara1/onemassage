import type { Post } from "./_types";

import { visitMassagePreparationChecklist } from "./visit-massage-preparation-checklist";
import { whyDrinkWaterAfterMassage } from "./why-drink-water-after-massage";
import { deskWorkerShoulderFatigueCare } from "./desk-worker-shoulder-fatigue-care";
import { postWorkoutMassageWhenAndWhenNot } from "./post-workout-massage-when-and-when-not";
import { reduceFatigueAtAccommodationOnBusinessTrip } from "./reduce-fatigue-at-accommodation-on-business-trip";
import { aromaVsSportsMassageDifference } from "./aroma-vs-sports-massage-difference";
import { safetyChecklistBeforeBooking } from "./safety-checklist-before-booking";
import { lowerBackFatigueCheckBeforeMassage } from "./lower-back-fatigue-check-before-massage";
import { preSleepRelaxRoutine } from "./pre-sleep-relax-routine";
import { strongPressureNotAlwaysBetter } from "./strong-pressure-not-always-better";
import { whyFeelDrowsyAfterMassage } from "./why-feel-drowsy-after-massage";
import { howToChooseTherapist } from "./how-to-choose-therapist";
import { visitVsStoreMassageDifference } from "./visit-vs-store-massage-difference";
import { whenMassageIsNotSuitable } from "./when-massage-is-not-suitable";
import { deskWorkerNeckShoulderHabits } from "./desk-worker-neck-shoulder-habits";
import { reliefAfterLongDrive } from "./relief-after-long-drive";
import { bookingCancellationChangeGuide } from "./booking-cancellation-change-guide";
import { hygienicVisitMassageStandards } from "./hygienic-visit-massage-standards";
import { howToIdentifyLegalVisitMassage } from "./how-to-identify-legal-visit-massage";
import { firstTimeVisitMassageGuide } from "./first-time-visit-massage-guide";

// 지역 매거진 (지역별 2편)
import { gangnamOfficeWorkerNightCare } from "./gangnam-office-worker-night-care";
import { gangnamOfficetelVisitCareGuide } from "./gangnam-officetel-visit-care-guide";
import { songpaFamilyHomeCareGuide } from "./songpa-family-home-care-guide";
import { songpaApartmentDeskFatigueCare } from "./songpa-apartment-desk-fatigue-care";
import { mapoMediaWorkerFatigueCare } from "./mapo-media-worker-fatigue-care";
import { mapoOnePersonHouseholdCare } from "./mapo-one-person-household-care";
import { suwonNewTownFamilyCare } from "./suwon-new-town-family-care";
import { suwonItWorkerCommuteFatigue } from "./suwon-it-worker-commute-fatigue";
import { yonginSujiFamilyWellness } from "./yongin-suji-family-wellness";
import { yonginLongCommuteFatigueCare } from "./yongin-long-commute-fatigue-care";
import { seongnamPangyoItNightCare } from "./seongnam-pangyo-it-night-care";
import { seongnamBundangFamilyCareGuide } from "./seongnam-bundang-family-care-guide";
import { incheonSongdoNewCityCare } from "./incheon-songdo-new-city-care";
import { incheonAirportBusinessTripCare } from "./incheon-airport-business-trip-care";
import { busanHaeundaeHotelCareGuide } from "./busan-haeundae-hotel-care-guide";
import { busanSeomyeonWorkerFatigueCare } from "./busan-seomyeon-worker-fatigue-care";

export type { Post, PostSection, PostFaq } from "./_types";

export const posts: Post[] = [
  visitMassagePreparationChecklist,
  whyDrinkWaterAfterMassage,
  deskWorkerShoulderFatigueCare,
  postWorkoutMassageWhenAndWhenNot,
  reduceFatigueAtAccommodationOnBusinessTrip,
  aromaVsSportsMassageDifference,
  safetyChecklistBeforeBooking,
  lowerBackFatigueCheckBeforeMassage,
  preSleepRelaxRoutine,
  strongPressureNotAlwaysBetter,
  whyFeelDrowsyAfterMassage,
  howToChooseTherapist,
  visitVsStoreMassageDifference,
  whenMassageIsNotSuitable,
  deskWorkerNeckShoulderHabits,
  reliefAfterLongDrive,
  bookingCancellationChangeGuide,
  hygienicVisitMassageStandards,
  howToIdentifyLegalVisitMassage,
  firstTimeVisitMassageGuide,
  // 지역 매거진
  gangnamOfficeWorkerNightCare,
  gangnamOfficetelVisitCareGuide,
  songpaFamilyHomeCareGuide,
  songpaApartmentDeskFatigueCare,
  mapoMediaWorkerFatigueCare,
  mapoOnePersonHouseholdCare,
  suwonNewTownFamilyCare,
  suwonItWorkerCommuteFatigue,
  yonginSujiFamilyWellness,
  yonginLongCommuteFatigueCare,
  seongnamPangyoItNightCare,
  seongnamBundangFamilyCareGuide,
  incheonSongdoNewCityCare,
  incheonAirportBusinessTripCare,
  busanHaeundaeHotelCareGuide,
  busanSeomyeonWorkerFatigueCare,
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
