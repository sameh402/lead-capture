import { useState } from "react";
import { Search, Globe } from "lucide-react";
import type { BookingData } from "../../pages/Booking";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "India",
  "Brazil",
  "Mexico",
  "South Africa",
  "Egypt",
  "Nigeria",
  "Kenya",
  "Saudi Arabia",
  "United Arab Emirates",
  "Singapore",
  "Malaysia",
  "Thailand",
  "Vietnam",
  "Philippines",
  "Indonesia",
  "Pakistan",
  "Bangladesh",
];

interface Step1Props {
  formData: BookingData;
  updateFormData: (updates: Partial<BookingData>) => void;
}

export default function Step1Country({
  formData,
  updateFormData,
}: Step1Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectCountry = (country: string) => {
    updateFormData({ country });
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <Globe className="text-soft-blue" size={28} />
        <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-black">
          Select Your Country
        </h2>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-dark-black/40" size={20} />
          <input
            type="text"
            placeholder="Search country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg font-inter focus:outline-none focus:border-soft-blue transition-colors"
          />
        </div>
      </div>

      {/* Selected Country Display */}
      {formData.country && (
        <div className="mb-6 p-4 bg-cream rounded-lg border-2 border-soft-blue">
          <p className="text-sm text-dark-black/60 font-inter mb-1">
            Selected Country
          </p>
          <p className="text-lg font-poppins font-semibold text-dark-black">
            {formData.country}
          </p>
        </div>
      )}

      {/* Countries List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredCountries.map((country) => (
          <button
            key={country}
            onClick={() => handleSelectCountry(country)}
            className={`p-4 text-left rounded-lg font-inter font-medium transition-all ${
              formData.country === country
                ? "bg-soft-blue text-white border-2 border-soft-blue"
                : "bg-gray-50 text-dark-black border-2 border-gray-200 hover:border-soft-blue hover:bg-blue-50"
            }`}
          >
            {country}
          </button>
        ))}
      </div>

      {filteredCountries.length === 0 && (
        <div className="text-center py-8">
          <p className="text-dark-black/60 font-inter">
            No countries found matching "{searchTerm}"
          </p>
        </div>
      )}
    </div>
  );
}
