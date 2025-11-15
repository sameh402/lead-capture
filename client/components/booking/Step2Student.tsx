import { User } from "lucide-react";
import type { BookingData } from "../../pages/Booking";

interface Step2Props {
  formData: BookingData;
  updateFormData: (updates: Partial<BookingData>) => void;
}

export default function Step2Student({
  formData,
  updateFormData,
}: Step2Props) {
  const handleStudentChange = (field: string, value: string) => {
    updateFormData({
      student: {
        ...formData.student,
        [field]: value,
      },
    });
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <User className="text-soft-blue" size={28} />
        <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-black">
          Student Information
        </h2>
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
            First Name
          </label>
          <input
            type="text"
            value={formData.student.firstName}
            onChange={(e) => handleStudentChange("firstName", e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg font-inter focus:outline-none focus:border-soft-blue transition-colors"
            placeholder="First name"
          />
        </div>
        <div>
          <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
            Second Name
          </label>
          <input
            type="text"
            value={formData.student.secondName}
            onChange={(e) => handleStudentChange("secondName", e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg font-inter focus:outline-none focus:border-soft-blue transition-colors"
            placeholder="Second name"
          />
        </div>
        <div>
          <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
            Third Name
          </label>
          <input
            type="text"
            value={formData.student.thirdName}
            onChange={(e) => handleStudentChange("thirdName", e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg font-inter focus:outline-none focus:border-soft-blue transition-colors"
            placeholder="Third name"
          />
        </div>
        <div>
          <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
            Fourth Name
          </label>
          <input
            type="text"
            value={formData.student.fourthName}
            onChange={(e) => handleStudentChange("fourthName", e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg font-inter focus:outline-none focus:border-soft-blue transition-colors"
            placeholder="Fourth name"
          />
        </div>
      </div>

      {/* Age Field */}
      <div className="mb-6">
        <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
          Age <span className="text-coral">*</span>
        </label>
        <input
          type="number"
          min="10"
          max="18"
          value={formData.student.age}
          onChange={(e) => handleStudentChange("age", e.target.value)}
          className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg font-inter focus:outline-none focus:border-soft-blue transition-colors"
          placeholder="Enter age (10-18)"
        />
        {formData.student.age && (
          <p className="text-xs text-dark-black/60 font-inter mt-1">
            Age requirement: 10-18 years old
          </p>
        )}
      </div>

      {/* Gender Toggle */}
      <div className="mb-6">
        <label className="block text-sm font-poppins font-semibold text-dark-black mb-3">
          Gender <span className="text-coral">*</span>
        </label>
        <div className="flex gap-3">
          {["Male", "Female", "Prefer not to say"].map((option) => (
            <button
              key={option}
              onClick={() => handleStudentChange("gender", option)}
              className={`px-4 py-2 rounded-lg font-inter font-medium transition-all ${
                formData.student.gender === option
                  ? "bg-soft-blue text-white border-2 border-soft-blue"
                  : "bg-gray-100 text-dark-black border-2 border-gray-200 hover:border-soft-blue"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Hobbies */}
      <div className="mb-6">
        <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
          Hobbies
        </label>
        <textarea
          value={formData.student.hobbies}
          onChange={(e) => handleStudentChange("hobbies", e.target.value)}
          className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg font-inter focus:outline-none focus:border-soft-blue transition-colors"
          placeholder="Tell us about your hobbies..."
          rows={3}
        />
      </div>

      {/* Sports */}
      <div>
        <label className="block text-sm font-poppins font-semibold text-dark-black mb-2">
          Sports
        </label>
        <textarea
          value={formData.student.sport}
          onChange={(e) => handleStudentChange("sport", e.target.value)}
          className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg font-inter focus:outline-none focus:border-soft-blue transition-colors"
          placeholder="Tell us about sports you enjoy..."
          rows={3}
        />
      </div>
    </div>
  );
}
