"use client";
import React, { createContext, useState, ReactNode } from "react";

interface ClickOutsideContextProps {
  setExcludedRef: (ref: React.RefObject<HTMLElement>) => void;
  excludedRef: React.RefObject<HTMLElement> | null;
}

export const ClickOutsideContext =
  createContext<ClickOutsideContextProps | null>(null);

interface ClickOutsideProviderProps {
  children: ReactNode;
}

export const ClickOutsideProvider: React.FC<ClickOutsideProviderProps> = ({
  children,
}) => {
  const [excludedRef, setExcludedRefState] =
    useState<React.RefObject<HTMLElement> | null>(null);

  const setExcludedRef = (ref: React.RefObject<HTMLElement>) => {
    setExcludedRefState(ref);
  };

  return (
    <ClickOutsideContext.Provider value={{ excludedRef, setExcludedRef }}>
      {children}
    </ClickOutsideContext.Provider>
  );
};
