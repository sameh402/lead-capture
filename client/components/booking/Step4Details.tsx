import { FileText } from "lucide-react";
import type { BookingData } from "../../pages/Booking";

interface Step4Props {
  formData: BookingData;
  updateFormData: (updates: Partial<BookingData>) => void;
}

export default function Step4Details({
  formData,
  updateFormData,
}: Step4Props) {
  const handleDetailsChange = (value: string) => {
    updateFormData({ details: value });
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <FileText className="text-soft-blue" size={28} />
        <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-black">
          Additional Details
        </h2>
      </div>

      <p className="text-dark-black font-inter mb-6">
        Is there anything else you'd like to tell us? Share any special needs, preferences, or additional information.
      </p>

      <div>
        <label className="block text-sm font-poppins font-semibold text-dark-black mb-3">
          Any details to share? (Optional)
        </label>
        <textarea
          value={formData.details}
          onChange={(e) => handleDetailsChange(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg font-inter focus:outline-none focus:border-soft-blue transition-colors"
          placeholder="Example: Special learning needs, dietary restrictions, medical conditions, learning preferences, etc."
          rows={8}
        />
        <p className="text-xs text-dark-black/50 font-inter mt-2">
          Character count: {formData.details.length}
        </p>
      </div>

      {/* Helpful Tips */}
      <div className="mt-8 p-6 bg-cream rounded-xl">
        <h3 className="font-poppins font-semibold text-dark-black mb-3">
          Helpful Tips:
        </h3>
        <ul className="space-y-2 text-dark-black font-inter text-sm">
          <li>✓ Mention any learning disabilities or special needs</li>
          <li>✓ Share your preferred learning style</li>
          <li>✓ Tell us about any allergies or dietary requirements</li>
          <li>✓ Let us know about your learning goals</li>
          <li>✓ Share any concerns or questions about the program</li>
        </ul>
      </div>
    </div>
  );
}
