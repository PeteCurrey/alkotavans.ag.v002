import React, { createContext, useContext, useState, useMemo } from 'react';
import { options } from '../data/commissioningEngine/options';

import { rules } from '../data/commissioningEngine/rules';
import { calculateScores, ConfigScores } from '../data/commissioningEngine/scoring';

interface ConfiguratorState {
  selectedOptionIds: string[];
  totalPrice: number;
  totalPayload: number;
  totalBuildTime: number;
  scores: ConfigScores;
  warnings: string[];
  currentStage: number;
}

interface ConfiguratorContextType extends ConfiguratorState {
  toggleOption: (optionId: string) => void;
  isOptionSelected: (optionId: string) => boolean;
  resetConfig: () => void;
  setStage: (stage: number) => void;
}

const ConfiguratorContext = createContext<ConfiguratorContextType | undefined>(undefined);

export function ConfiguratorProvider({ children }: { children: React.ReactNode }) {
  const [selectedOptionIds, setSelectedOptionIds] = useState<string[]>([]);
  const [currentStage, setCurrentStage] = useState(1);

  const toggleOption = (optionId: string) => {
    setSelectedOptionIds(prev => {
      if (prev.includes(optionId)) {
        return prev.filter(id => id !== optionId);
      } else {
        return [...prev, optionId];
      }
    });
  };

  const isOptionSelected = (optionId: string) => selectedOptionIds.includes(optionId);

  const resetConfig = () => {
    setSelectedOptionIds([]);
    setCurrentStage(1);
  };

  const setStage = (stage: number) => setCurrentStage(stage);

  const selectedOptions = useMemo(() => 
    selectedOptionIds.map(id => options[id]).filter(Boolean),
    [selectedOptionIds]
  );

  const totalPrice = useMemo(() => 
    selectedOptions.reduce((sum, opt) => sum + (opt.price || 0), 0),
    [selectedOptions]
  );

  const totalPayload = useMemo(() => 
    selectedOptions.reduce((sum, opt) => sum + (opt.payloadImpact || 0), 0),
    [selectedOptions]
  );

  const totalBuildTime = useMemo(() => 
    selectedOptions.reduce((sum, opt) => sum + (opt.buildTimeImpact || 0), 0),
    [selectedOptions]
  );

  const scores = useMemo(() => 
    calculateScores(selectedOptions),
    [selectedOptions]
  );

  const warnings = useMemo(() => {
    const activeWarnings: string[] = [];
    rules.forEach(rule => {
      if (selectedOptionIds.includes(rule.targetId)) {
        const hasRequirement = rule.relatedIds.some(id => selectedOptionIds.includes(id));
        if (rule.type === 'depends' && !hasRequirement) {
          activeWarnings.push(rule.message);
        }
        if (rule.type === 'recommends' && !hasRequirement) {
          activeWarnings.push(`Recommended: ${rule.message}`);
        }
      }
    });
    return activeWarnings;
  }, [selectedOptionIds]);

  const value = {
    selectedOptionIds,
    totalPrice,
    totalPayload,
    totalBuildTime,
    scores,
    warnings,
    currentStage,
    toggleOption,
    isOptionSelected,
    resetConfig,
    setStage
  };

  return (
    <ConfiguratorContext.Provider value={value}>
      {children}
    </ConfiguratorContext.Provider>
  );
}

export function useConfigurator() {
  const context = useContext(ConfiguratorContext);
  if (context === undefined) {
    throw new Error('useConfigurator must be used within a ConfiguratorProvider');
  }
  return context;
}
