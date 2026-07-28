import React from 'react';

export function SectionDivider({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-[#6b6e45] py-[26px] min-h-[98px] flex justify-center gap-[22px] relative z-20 flex-wrap px-[10px]">
      {children}
    </div>
  );
}
