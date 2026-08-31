import { InvestmentsPartnershipModelsSection } from "@/components/sections/InvestmentsPartnershipModelsSection";
import { InvestmentsLookForProcessSection } from "@/components/sections/InvestmentsLookForProcessSection";

/**
 * 03 Partnership Models + 04/05 Look For & Evaluation Process
 * as one desktop viewport (matches design mock).
 */
export function InvestmentsModelsProcessPairSection() {
  return (
    <div
      id="models"
      className="bg-[#f5f2ed] lg:flex lg:h-[calc(100svh-88px)] lg:min-h-[720px] lg:flex-col lg:overflow-hidden"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 sm:px-8 lg:min-h-0 lg:px-10 xl:px-12">
        <InvestmentsPartnershipModelsSection compact />
        <div className="min-h-0 flex-1 lg:flex lg:h-full lg:flex-col">
          <InvestmentsLookForProcessSection compact />
        </div>
      </div>
    </div>
  );
}
