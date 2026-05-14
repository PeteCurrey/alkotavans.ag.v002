import { options } from "@/lib/data/commissioningEngine/options";

export type LightingMode = 'day' | 'dusk' | 'camp';

export interface VisualLayer {
  id: string;
  asset: string;
  zIndex: number;
}

const LAYER_PRIORITY: Record<string, number> = {
  'chassis': 0,
  'suspension': 10,
  'wheels': 20,
  'bumpers': 30,
  'lighting-hardware': 40,
  'roof-rack': 50,
  'ladders': 60,
  'side-pods': 70,
  'accessories': 80,
  'lighting-glow': 90, // Glow effects on top
};

export function getOrderedLayers(selectedIds: string[], lightingMode: LightingMode): VisualLayer[] {
  const layers: VisualLayer[] = [];

  selectedIds.forEach(id => {
    const opt = options[id];
    if (opt?.visualLayer) {
      // Determine base z-index based on category
      let categoryKey = opt.category.toLowerCase().replace(/\s+/g, '-');
      if (categoryKey.includes('lighting')) categoryKey = 'lighting-hardware';
      
      layers.push({
        id: opt.visualLayer,
        asset: opt.visualLayer,
        zIndex: LAYER_PRIORITY[categoryKey] || 50
      });

      // Add lighting glow layers if in dusk/camp mode
      if (lightingMode !== 'day' && opt.category === 'Lighting') {
        layers.push({
          id: `${opt.visualLayer}-glow`,
          asset: `${opt.visualLayer}-glow`,
          zIndex: LAYER_PRIORITY['lighting-glow']
        });
      }
    }
  });

  return layers.sort((a, b) => a.zIndex - b.zIndex);
}
