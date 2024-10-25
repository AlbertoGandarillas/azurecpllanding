import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { ViewCPLCreditRecommendations, ViewCPLEvidenceCompetency } from '@prisma/client';
import React from 'react'
interface CertificationHoverCardProps {
  industryCertification: string | null | undefined;
  cplType?: string | null;
  learningMode?: string | null;
  evidences: ViewCPLEvidenceCompetency[];
  crs: ViewCPLCreditRecommendations[];
}
export default function CertificationHoverCard ({
  industryCertification,
  cplType,
  learningMode,
  evidences,
  crs,
}:CertificationHoverCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger className="cursor-pointer ">
        <li className="flex items-start">
          <span className="mr-[0.5em] flex-shrink-0"></span>
          <p className="text-sm font-semibold -mt-[0.1em] underline">
            {industryCertification || "N/A"}
          </p>
        </li>
      </HoverCardTrigger>
      <HoverCardContent className="w-[auto]">
        <h3 className="font-bold mb-2">{industryCertification}</h3>
        <p className="text-sm">
          <span className="font-bold">CPL Type : </span>
          {cplType}
        </p>
        <p className="text-sm">
          <span className="font-bold">Learning Mode : </span>
          {learningMode}
        </p>
        <div
          className={`grid gap-x-4 ${evidences.length > 0 && "grid-cols-2"} `}
        >
          {crs && crs.length > 0 && (
            <div>
              <p className="font-bold text-sm my-2">Credit Recommendations:</p>
              <ul className="list-disc list-inside ml-4 overflow-y-auto max-h-[350px]">
                {crs.map((cr, crIndex) => (
                  <li key={crIndex} className="text-sm">
                    <span>{cr.Criteria}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {evidences && evidences.length > 0 && (
            <div>
              <p className="font-bold text-sm my-2">Possible Evidence:</p>
              <ul className="list-disc list-inside ml-4">
                {evidences.map((evidence, evidenceIndex) => (
                  <li key={evidenceIndex} className="text-sm">
                    {evidence.EvidenCompetency || "No competency specified"}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
