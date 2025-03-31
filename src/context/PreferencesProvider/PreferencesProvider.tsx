'use client';
import {createContext, ReactNode, use, useMemo, useState} from "react";

interface PreferencesContext {
  muted: boolean;
  toggle: () => void;
}

interface PreferencesProviderProps {
    children: ReactNode;
}

const PreferencesContext = createContext<PreferencesContext>({
  muted: false,
  toggle: () => {}
});


function PreferencesProvider({children}: PreferencesProviderProps) {
  const [muted, setMuted] = useState(false);

  const ctx = useMemo(() => ({muted, toggle: () => setMuted(prev => !prev)}), [muted]);

  return <PreferencesContext value={ctx}>{children}</PreferencesContext>;
}

export function usePreferences() {
    const context = use(PreferencesContext);

    if (!context) {
        throw new Error('usePreferences must be used within a PreferencesProvider');
    }

    return context;
}

export default PreferencesProvider;
