"use client";

import React, { useState, useId } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TEAM_DATA } from "@/data/portfolioData";
import { TeamMember } from "@/types/portfolio";

function TeamMemberCard({ member }: { member: TeamMember }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const detailsId = useId();

  return (
    <article className="group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 hover:border-purple-300">
      <div>
        {/* Top Row: Avatar & Placeholder Badge */}
        <div className="flex items-start justify-between gap-3 mb-5">
          {/* Avatar representation (Initials container) */}
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-100 via-slate-50 to-cyan-100 border border-purple-200/80 flex items-center justify-center text-purple-800 font-extrabold text-lg shadow-2xs">
            {member.initials}
          </div>

          {member.isPlaceholder && (
            <span
              className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200/80"
              title="Verified development placeholder identity"
            >
              Placeholder
            </span>
          )}
        </div>

        {/* Name & Role */}
        <h3 className="text-lg font-bold text-slate-900 tracking-tight">
          {member.name}
        </h3>
        <p className="text-xs font-semibold uppercase tracking-wider text-purple-700 mt-1">
          {member.role}
        </p>

        {/* Short Biography */}
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          {member.bio}
        </p>

        {/* Skills Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100/90 text-slate-700 border border-slate-200/60"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Inline Expandable Details */}
        {isExpanded && (
          <div
            id={detailsId}
            className="mt-5 pt-4 pb-3 px-4 rounded-xl border border-purple-100 bg-purple-50/30 text-xs text-slate-600 space-y-2.5 transition-all duration-200"
          >
            <div>
              <span className="font-semibold text-slate-900 uppercase tracking-wider block mb-1">
                Discipline Responsibilities:
              </span>
              <p className="leading-relaxed">
                Oversees architectural reviews, standard adherence, interface
                consistency, and deployment resilience across project modules.
              </p>
            </div>
            <div className="pt-2 border-t border-purple-100/70">
              <span className="text-[11px] text-slate-500 italic">
                Official team member profiles and photograph verification will be
                updated upon completion of onboarding.
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Card Action Footer */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
          aria-controls={detailsId}
          className="inline-flex items-center gap-1.5 text-xs font-semibold py-1.5 px-3 rounded-lg text-purple-700 hover:text-purple-800 hover:bg-purple-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
        >
          <span>{isExpanded ? "Collapse Role" : "View Discipline Scope"}</span>
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <span className="text-[11px] text-slate-400">
          Discipline profile
        </span>
      </div>
    </article>
  );
}

export function TeamSection() {
  return (
    <section
      id="who-are-we"
      className="py-20 sm:py-28 border-t border-slate-200/70 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <SectionHeading
        badge="Who Are We"
        badgeAccent="purple"
        title={
          <>
            Our Team &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Core Disciplines
            </span>
          </>
        }
        subtitle="AdotShelor is organized around dedicated engineering and design disciplines. Identified placeholders represent key practice areas pending final team listings."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
        {TEAM_DATA.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}
