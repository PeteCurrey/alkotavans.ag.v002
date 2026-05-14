export interface ConfigRule {
  id: string;
  targetId: string; // The option this rule applies to
  type: 'incompatible' | 'depends' | 'recommends' | 'requires_upgrade';
  relatedIds: string[];
  message: string;
}

export const rules: ConfigRule[] = [
  {
    id: 'rule-winch-bumper',
    targetId: 'wnc-warn9',
    type: 'depends',
    relatedIds: ['fbump-exp', 'fbump-bar'],
    message: 'Winch installation requires an Alkota Expedition Bumper or Front Bar.'
  },
  {
    id: 'rule-ac-power',
    targetId: 'ac-dom',
    type: 'depends',
    relatedIds: ['inv-3k', 'inv-5k'],
    message: 'Rooftop AC requires a 3000W or 5000W inverter upgrade.'
  },
  {
    id: 'rule-ac-battery',
    targetId: 'ac-dom',
    type: 'recommends',
    relatedIds: ['bat-400', 'bat-600'],
    message: 'Alkota recommends 400Ah+ battery capacity for air conditioning use.'
  }
];
