import { CreditCard, Smartphone } from "lucide-react";
import type { BookingData } from "../../pages/Booking";

interface Step5Props {
  formData: BookingData;
  updateFormData: (updates: Partial<BookingData>) => void;
}

const paymentMethods = [
  {
    id: "vodafone",
    name: "Vodafone Cash",
    description: "Pay using Vodafone Cash",
    icon: "📱",
  },
  {
    id: "endc",
    name: "e& Cash",
    description: "Pay using e& Cash",
    icon: "💳",
  },
  {
    id: "instapay",
    name: "InstaPay",
    description: "Pay using InstaPay",
    icon: "🏦",
  },
  {
    id: "visa",
    name: "Visa/Mastercard",
    description: "Pay using debit or credit card",
    icon: "💳",
  },
];

export default function Step5Payment({
  formData,
  updateFormData,
}: Step5Props) {
  const handlePaymentMethodSelect = (method: string) => {
    updateFormData({
      payment: {
        ...formData.payment,
        method,
      },
    });
  };

  const handleTransactionIdChange = (value: string) => {
    updateFormData({
      payment: {
        ...formData.payment,
        transactionId: value,
      },
    });
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <CreditCard className="text-soft-blue" size={28} />
        <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-black">
          Payment Method
        </h2>
      </div>

      {/* Payment Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => handlePaymentMethodSelect(method.id)}
            className={`p-6 rounded-xl border-2 transition-all text-left ${
              formData.payment.method === method.id
                ? "border-soft-blue bg-blue-50"
                : "border-gray-200 bg-white hover:border-soft-blue"
            }`}
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{method.icon}</span>
              <div>
                <h3 className="font-poppins font-bold text-dark-black mb-1">
                  {method.name}
                </h3>
                <p className="text-sm text-dark-black/60 font-inter">
                  {method.description}
                </p>
              </div>
              <div className="ml-auto">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    formData.payment.method === method.id
                      ? "border-soft-blue bg-soft-blue"
                      : "border-gray-300"
                  }`}
                >
                  {formData.payment.method === method.id && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Transaction ID Input - Shows based on selected method */}
      {formData.payment.method && (
        <div className="mb-6 p-6 bg-cream rounded-xl">
          <label className="block text-sm font-poppins font-semibold text-dark-black mb-3">
            Transaction ID or Reference Number <span className="text-coral">*</span>
          </label>
          <input
            type="text"
            value={formData.payment.transactionId}
            onChange={(e) => handleTransactionIdChange(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg font-inter focus:outline-none focus:border-soft-blue transition-colors"
            placeholder={`Enter your ${paymentMethods.find((m) => m.id === formData.payment.method)?.name} transaction ID`}
          />
          <p className="text-xs text-dark-black/50 font-inter mt-2">
            You'll find this in your payment confirmation email or app
          </p>
        </div>
      )}

      {/* Price Summary */}
      <div className="p-6 bg-white border-2 border-gray-200 rounded-xl">
        <h3 className="font-poppins font-bold text-dark-black mb-4">
          Price Summary
        </h3>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-dark-black font-inter">Program Fee</span>
            <span className="font-poppins font-semibold text-dark-black">$499</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-dark-black font-inter">Registration Fee</span>
            <span className="font-poppins font-semibold text-dark-black">$0</span>
          </div>
          <div className="border-t-2 border-gray-200 pt-2 mt-2">
            <div className="flex justify-between items-center">
              <span className="font-poppins font-bold text-dark-black">Total Amount</span>
              <span className="font-poppins font-bold text-soft-blue text-lg">$499</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-dark-black/60 font-inter">
          <span>🔒</span>
          <span>Your payment is secure and encrypted</span>
        </div>
      </div>
    </div>
  );
}
