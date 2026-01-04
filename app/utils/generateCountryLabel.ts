import { countries } from "@/constants/countries";

export const generateCountryLabel = (countryCode: string) => {
  const country = countries.find(({ code }) => code === countryCode);
  return country?.name || countryCode;
};
