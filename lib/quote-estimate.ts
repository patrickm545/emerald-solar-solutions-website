export type PropertyType = "home" | "business" | "farm" | "other";
export type RoofSpace = "small" | "medium" | "large" | "unknown";
export type ShadingLevel = "low" | "some" | "heavy" | "unknown";
export type InterestLevel = "yes" | "maybe" | "no";

export type QuoteEstimateInput = {
  propertyType: PropertyType;
  monthlyBill: number;
  roofSpace: RoofSpace;
  shading: ShadingLevel;
  batteryInterest: InterestLevel;
  evChargerInterest: InterestLevel;
  hotWaterDiverterInterest: InterestLevel;
};

export type QuoteEstimate = {
  systemSizeRange: string;
  panelCountRange: string;
  annualSavingsRange: string;
  paybackRange: string;
  grantSupport: string;
  assumptions: string[];
};

const panelCapacityKw = 0.455;

export function quoteEstimate(input: QuoteEstimateInput): QuoteEstimate {
  const monthlyBill = clamp(input.monthlyBill || 160, 80, 1200);
  const isCommercial =
    input.propertyType === "business" || input.propertyType === "farm";
  const annualSpend = monthlyBill * 12;
  const usageFactor = isCommercial ? 430 : 350;
  const roofLimit = getRoofLimit(input.roofSpace, isCommercial);
  const shadingFactor = getShadingFactor(input.shading);
  const targetSystemSize = clamp(
    (annualSpend / usageFactor) * shadingFactor,
    isCommercial ? 5.5 : 2.4,
    roofLimit,
  );
  const lowSystemSize = roundToTenth(Math.max(2.0, targetSystemSize * 0.85));
  const highSystemSize = roundToTenth(Math.min(roofLimit, targetSystemSize * 1.18));
  const lowPanels = Math.max(5, Math.round(lowSystemSize / panelCapacityKw));
  const highPanels = Math.max(lowPanels + 1, Math.round(highSystemSize / panelCapacityKw));
  const lowSavings = roundCurrency(annualSpend * (isCommercial ? 0.28 : 0.24));
  const highSavings = roundCurrency(annualSpend * (isCommercial ? 0.5 : 0.44));

  return {
    systemSizeRange: `${lowSystemSize}-${highSystemSize} kWp`,
    panelCountRange: `${lowPanels}-${highPanels} panels`,
    annualSavingsRange: `EUR ${lowSavings.toLocaleString("en-IE")}-${highSavings.toLocaleString("en-IE")}/yr`,
    paybackRange: isCommercial ? "5-9 years" : "6-10 years",
    grantSupport: getGrantSupport(input.propertyType),
    assumptions: [
      "Indicative estimate before roof survey.",
      "Final output depends on roof area, orientation, shading, and usage profile.",
      "SEAI grant support is subject to current eligibility rules and approval.",
    ],
  };
}

function getRoofLimit(roofSpace: RoofSpace, isCommercial: boolean) {
  if (isCommercial) {
    if (roofSpace === "small") return 16;
    if (roofSpace === "medium") return 38;
    if (roofSpace === "large") return 90;
    return 30;
  }

  if (roofSpace === "small") return 4.2;
  if (roofSpace === "medium") return 6.8;
  if (roofSpace === "large") return 10.5;
  return 6.2;
}

function getShadingFactor(shading: ShadingLevel) {
  if (shading === "heavy") return 0.78;
  if (shading === "some") return 0.9;
  return 1;
}

function getGrantSupport(propertyType: PropertyType) {
  if (propertyType === "home") {
    return "SEAI domestic grant route to review";
  }

  if (propertyType === "business" || propertyType === "farm") {
    return "Commercial support to review separately";
  }

  return "Grant route to confirm during survey";
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function roundToTenth(value: number) {
  return Math.round(value * 10) / 10;
}

function roundCurrency(value: number) {
  return Math.round(value / 50) * 50;
}
