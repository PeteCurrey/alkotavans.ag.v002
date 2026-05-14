import { CommissioningOption } from "./options";

export interface ConfigScores {
  offGrid: number;
  winter: number;
  expedition: number;
  luxury: number;
  utility: number;
}

export function calculateScores(selectedOptions: CommissioningOption[]): ConfigScores {
  const scores: ConfigScores = {
    offGrid: 2, // Baseline
    winter: 2,
    expedition: 1,
    luxury: 2,
    utility: 2
  };

  selectedOptions.forEach(opt => {
    if (opt.scores) {
      if (opt.scores.offGrid) scores.offGrid += opt.scores.offGrid;
      if (opt.scores.winter) scores.winter += opt.scores.winter;
      if (opt.scores.expedition) scores.expedition += opt.scores.expedition;
      if (opt.scores.luxury) scores.luxury += opt.scores.luxury;
      if (opt.scores.utility) scores.utility += opt.scores.utility;
    }
  });

  // Clamp scores between 0 and 10
  return {
    offGrid: Math.min(10, Math.max(0, scores.offGrid)),
    winter: Math.min(10, Math.max(0, scores.winter)),
    expedition: Math.min(10, Math.max(0, scores.expedition)),
    luxury: Math.min(10, Math.max(0, scores.luxury)),
    utility: Math.min(10, Math.max(0, scores.utility)),
  };
}
