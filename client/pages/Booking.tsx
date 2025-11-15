import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Step1Country from "../components/booking/Step1Country";
import Step2Student from "../components/booking/Step2Student";
import Step3Parent from "../components/booking/Step3Parent";
import Step4Details from "../components/booking/Step4Details";
import Step5Payment from "../components/booking/Step5Payment";
import Step6Invoice from "../components/booking/Step6Invoice";

export interface BookingData {
  country: string;
  student: {
    firstName: string;
    secondName: string;
    thirdName: string;
    fourthName: string;
    age: string;
    gender: string;
    hobbies: string;
    sport: string;
  };
  parent: {
    dad: {
      nationalId: string;
      whatsapp: string;
      phone: string;
    };
    mom: {
      nationalId: string;
      fullName: string;
      whatsapp: string;
      phone: string;
    };
    address: string;
  };
  details: string;
  payment: {
    method: string;
    transactionId: string;
  };
}

const TOTAL_STEPS = 6;

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BookingData>({
    country: "",
    student: {
      firstName: "",
      secondName: "",
      thirdName: "",
      fourthName: "",
      age: "",
      gender: "",
      hobbies: "",
      sport: "",
    },
    parent: {
      dad: {
        nationalId: "",
        whatsapp: "",
        phone: "",
      },
      mom: {
        nationalId: "",
        fullName: "",
        whatsapp: "",
        phone: "",
      },
      address: "",
    },
    details: "",
    payment: {
      method: "",
      transactionId: "",
    },
  });

  const updateFormData = (updates: Partial<BookingData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const canGoNext = () => {
    switch (currentStep) {
      case 1:
        return !!formData.country;
      case 2:
        return !!(
          formData.student.firstName &&
          formData.student.age &&
          formData.student.gender
        );
      case 3:
        return !!(
          formData.parent.address &&
          (formData.parent.dad.nationalId ||
            formData.parent.mom.nationalId)
        );
      case 4:
        return true;
      case 5:
        return !!formData.payment.method;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canGoNext() && currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const progressPercentage = (currentStep / TOTAL_STEPS) * 100;

  return (
    <main className="bg-cream min-h-screen py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-black">
              Booking Step {currentStep} of {TOTAL_STEPS}
            </h2>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-soft-blue h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl p-8 shadow-soft mb-8">
          {currentStep === 1 && (
            <Step1Country formData={formData} updateFormData={updateFormData} />
          )}
          {currentStep === 2 && (
            <Step2Student formData={formData} updateFormData={updateFormData} />
          )}
          {currentStep === 3 && (
            <Step3Parent formData={formData} updateFormData={updateFormData} />
          )}
          {currentStep === 4 && (
            <Step4Details formData={formData} updateFormData={updateFormData} />
          )}
          {currentStep === 5 && (
            <Step5Payment formData={formData} updateFormData={updateFormData} />
          )}
          {currentStep === 6 && (
            <Step6Invoice formData={formData} />
          )}
        </div>

        {/* Navigation Buttons */}
        {currentStep < TOTAL_STEPS && (
          <div className="flex gap-4 justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="flex items-center gap-2 px-6 py-3 border-2 border-soft-blue text-soft-blue rounded-lg font-poppins font-semibold hover:bg-soft-blue/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={!canGoNext()}
              className="flex items-center gap-2 px-6 py-3 bg-soft-blue text-white rounded-lg font-poppins font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
