export const configuratorData = [
  {
    id: 1,
    title: 'Platform',
    tag: 'BASE VEHICLE · PLATFORM',
    description: 'Select the base vehicle platform, wheelbase, and drivetrain.',
    subcategories: [
      {
        title: 'BASE VAN',
        options: [
          { id: 'plat-man', name: 'MAN TGE / Volkswagen Crafter', brand: 'TGE 35', detail: 'VW engineering, AWD available' },
          { id: 'plat-sprinter', name: 'Mercedes-Benz Sprinter', brand: '319', detail: 'Premium platform, strongest aftermarket support' },
          { id: 'plat-transit', name: 'Ford Transit', brand: '350 HD', detail: 'Best value, Trail 4WD available, vast UK service network' },
          { id: 'plat-iveco', name: 'Iveco Daily', brand: '70C', detail: 'Body-on-frame, true 4×4, largest load capacity' },
        ]
      },
      {
        title: 'WHEELBASE',
        options: [
          { id: 'wb-swb', name: 'SWB (L1/L2)', brand: 'Short wheelbase', detail: 'Best for HOLT' },
          { id: 'wb-mwb', name: 'MWB (L3)', brand: 'Most popular', detail: 'DALE and FELL' },
          { id: 'wb-lwb', name: 'LWB (L3 High)', brand: 'Maximum interior', detail: 'FELL preferred' },
          { id: 'wb-xlwb', name: 'XLWB (L4/L5)', brand: 'Where available', detail: '' },
        ]
      },
      {
        title: 'DRIVETRAIN',
        options: [
          { id: 'dt-2wd', name: '2WD Standard', brand: '', detail: '' },
          { id: 'dt-4wd', name: '4WD/AWD', brand: 'Platform dependent', detail: 'Sprinter 4×4, Transit Trail, Daily 4×4, TGE 4MOTION' },
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Suspension',
    tag: 'CHASSIS · SUSPENSION',
    description: 'Upgraded suspension is critical for carrying conversion weight and maintaining off-road performance.',
    subcategories: [
      {
        title: 'SUSPENSION UPGRADE',
        options: [
          { id: 'susp-std', name: 'Standard', brand: 'Factory OEM', detail: 'Retained and inspected', price: 0 },
          { id: 'susp-rip', name: 'Ride Improvement Kit (RIP)', brand: 'Agile Offroad', detail: 'Upgraded springs and Bilstein/Fox shocks. On-road transformation · Sprinter/Transit', price: 3500 },
          { id: 'susp-vc1', name: 'Level 1 Lift', brand: 'Van Compass', detail: 'Coilovers + springs, +1–2" lift, optimised geometry · Sprinter/Transit', price: 4000 },
          { id: 'susp-vc2', name: 'Level 2 Lift', brand: 'Van Compass', detail: 'Fox Performance Elite, +2–3" lift, loaded off-road optimised · Sprinter', price: 5000 },
          { id: 'susp-fox', name: 'Fox Factory Race Series', brand: 'Agile Offroad', detail: 'Fox 2.5" internal bypass. Serious trail capability · Sprinter', price: 10000 },
          { id: 'susp-exp', name: 'Full Expedition', brand: 'Alkota Fabrication', detail: 'Bespoke lift using Fox/OME + custom fabrication · Daily 4×4/TGE', price: 12000 },
        ]
      },
      {
        title: 'DIFFERENTIAL LOCKERS',
        options: [
          { id: 'lock-none', name: 'None', brand: '', detail: 'Standard open differentials', price: 0 },
          { id: 'lock-rear', name: 'Rear Locker', brand: 'Agency6', detail: 'ARB Air Locker, compressor-activated. Pairs with onboard air', price: 2500 },
          { id: 'lock-both', name: 'Front + Rear Lockers', brand: 'Agency6', detail: 'Maximum traction. Requires onboard air', price: 5500 },
        ]
      },
      {
        title: 'UNDERBODY PROTECTION',
        options: [
          { id: 'skid-none', name: 'None', brand: '', detail: '', price: 0 },
          { id: 'skid-eng', name: 'Engine skid plate', brand: 'Alkota', detail: 'Fabricated 6mm steel or 8mm aluminium', price: 600 },
          { id: 'skid-mid', name: 'Engine + fuel tank skid', brand: 'Alkota', detail: 'Front and mid belly', price: 1200 },
          { id: 'skid-full', name: 'Full belly armour', brand: 'Alkota', detail: 'Engine, fuel tank, diff, transfer case', price: 2200 },
          { id: 'skid-diff', name: 'Diff guard', brand: 'Alkota', detail: 'Rear differential plate', price: 350 },
          { id: 'skid-trans', name: 'Transfer case guard', brand: 'Alkota', detail: '4WD models only', price: 400 },
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Bumpers',
    tag: 'EXTERIOR · BUMPERS',
    description: 'Protection, recovery points, and winch mounts.',
    subcategories: [
      {
        title: 'FRONT BUMPER',
        options: [
          { id: 'fbump-std', name: 'Factory', brand: 'OEM', detail: 'Retained and painted', price: 0 },
          { id: 'fbump-bar', name: 'Alkota Front Bar', brand: 'Alkota', detail: 'In-house fabricated steel bash bar, integrated light mounts, rated recovery points, winch prep', price: 1800 },
          { id: 'fbump-exp', name: 'Alkota Expedition Bumper', brand: 'Alkota', detail: 'Full-width steel, integrated skid, rated recovery, winch mount, lighting cut-outs', price: 4200 },
        ]
      },
      {
        title: 'REAR BUMPER',
        options: [
          { id: 'rbump-std', name: 'Factory', brand: 'OEM', detail: 'Retained and cleaned', price: 0 },
          { id: 'rbump-bar', name: 'Alkota Rear Step Bar', brand: 'Alkota', detail: 'Step bar with recovery points and tow prep', price: 1200 },
          { id: 'rbump-exp', name: 'Alkota Expedition Rear', brand: 'Alkota', detail: 'Swing-out spare carrier, jerry/Roam box mount, recovery board mounts, reversing camera housing, step', price: 3400 },
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Lighting',
    tag: 'EXTERIOR · LIGHTING',
    description: 'Motorsport-proven lighting systems for safe progress in remote areas.',
    subcategories: [
      {
        title: 'FOG / BUMPER POSITION',
        options: [
          { id: 'lfog-none', name: 'None', brand: '', detail: '', price: 0 },
          { id: 'lfog-c2', name: 'Lazer Carbon-2 Drive', brand: 'Lazer Lamps', detail: '3,120 lm · UK-manufactured · Road legal · High beam + yellow dip mode', price: 800 },
          { id: 'lfog-tr750', name: 'Lazer Triple-R 750', brand: 'Lazer Lamps', detail: '8,200 lm combined · Grille integration · 1 lux to 600m', price: 2100 },
          { id: 'lfog-bpro', name: 'Baja Squadron Pro', brand: 'Baja Designs', detail: '3,162 lm · Fog pocket fit · Off-road spec', price: 700 },
          { id: 'lfog-bsae', name: 'Baja Squadron SAE', brand: 'Baja Designs', detail: '3,162 lm · Road-legal SAE compliant', price: 700 },
        ]
      },
      {
        title: 'A-PILLAR / DITCH LIGHTS',
        options: [
          { id: 'lpil-none', name: 'None', brand: '', detail: '', price: 0 },
          { id: 'lpil-lp4', name: 'Baja LP4 Pro', brand: 'Baja Designs', detail: '8,750 lm pair · 200° spread · Direct Ducted Cooling', price: 1500 },
          { id: 'lpil-xl', name: 'Baja XL Sport', brand: 'Baja Designs', detail: '6,324 lm pair · 4 beam pattern options', price: 1100 },
          { id: 'lpil-xlpro', name: 'Baja XL Pro', brand: 'Baja Designs', detail: 'High output · Lifetime warranty', price: 1600 },
          { id: 'lpil-t2', name: 'Lazer T2', brand: 'Lazer Lamps', detail: 'Motorsport pod lights on Alkota brackets', price: 1200 },
        ]
      },
      {
        title: 'ROOF RACK LIGHTING',
        options: [
          { id: 'rrl-none', name: 'None', brand: '', detail: '', price: 0 },
          { id: 'rrl-s1', name: 'Baja S1 Rail Kit', brand: 'Baja Designs', detail: '4× S1 work/scene · Camp and worksite lighting', price: 1150 },
          { id: 'rrl-lin18', name: 'Lazer Linear-18 Elite', brand: 'Lazer Lamps', detail: 'Long-throw front driving bar', price: 850 },
          { id: 'rrl-lp4c', name: 'LP4 Rack Corners', brand: 'Baja Designs', detail: '8,750 lm pair · Wide flood at height', price: 1600 },
        ]
      },
      {
        title: 'REAR / CAMP LIGHTS',
        options: [
          { id: 'rcl-none', name: 'None', brand: '', detail: '', price: 0 },
          { id: 'rcl-rev', name: 'Reverse upgrade', brand: 'Baja Designs', detail: 'Massive improvement over factory', price: 400 },
          { id: 'rcl-camp', name: 'Rear camp lights', brand: 'Baja Designs', detail: 'S1 pairs, rear-facing from rack', price: 600 },
        ]
      },
      {
        title: 'LIGHTING CONTROL',
        options: [
          { id: 'lctrl-std', name: 'Standard switches', brand: '', detail: 'Individual circuit switches', price: 0 },
          { id: 'lctrl-spod', name: 'sPOD BantamX', brand: 'sPOD', detail: '6-switch illuminated in-cab panel · All circuits managed', price: 750 },
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Roof Rack',
    tag: 'EXTERIOR · STORAGE',
    description: 'Mounting points for solar arrays, storage, and lighting.',
    subcategories: [
      {
        title: 'ROOF RACK SYSTEM',
        options: [
          { id: 'rrack-none', name: 'None', brand: '', detail: '', price: 0 },
          { id: 'rrack-slim', name: 'Alkota Slimline', brand: 'Alkota', detail: 'Low-profile aluminium · Cross-bars · Front light mount', price: 1400 },
          { id: 'rrack-full', name: 'Alkota Full Platform', brand: 'Alkota', detail: 'Full-width modular · Walk-on rated · Solar integration', price: 2800 },
          { id: 'rrack-exp', name: 'Alkota Expedition', brand: 'Alkota', detail: 'Full platform + integrated solar mounts + Roam box positions + ladder attachment', price: 3600 },
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'Ladder',
    tag: 'EXTERIOR · ACCESS',
    description: 'Access to roof systems and solar arrays.',
    subcategories: [
      {
        title: 'LADDER SYSTEM',
        options: [
          { id: 'lad-none', name: 'None', brand: '', detail: '', price: 0 },
          { id: 'lad-rear', name: 'Rear ladder', brand: 'Alkota', detail: 'Fixed, 4-rung, fabricated', price: 600 },
          { id: 'lad-side', name: 'Side ladder', brand: 'Alkota', detail: 'Nearside fold-flat', price: 850 },
          { id: 'lad-both', name: 'Rear + side', brand: 'Alkota', detail: 'Full access', price: 1300 },
        ]
      }
    ]
  },
  {
    id: 7,
    title: 'Wheels & Steps',
    tag: 'EXTERIOR · MOBILITY',
    description: 'Upgraded traction and cabin access.',
    subcategories: [
      {
        title: 'WHEELS',
        options: [
          { id: 'whl-std', name: 'Factory steel', brand: '', detail: 'Retained and painted', price: 0 },
          { id: 'whl-alloy', name: 'Alloy upgrade', brand: '', detail: 'Black or silver aftermarket van-specific', price: 1200 },
          { id: 'whl-method', name: 'Method Race Wheels', brand: 'Method', detail: 'Black satin · US overlanding standard', price: 2400 },
        ]
      },
      {
        title: 'TYRES',
        options: [
          { id: 'tyr-std', name: 'Factory road tyres', brand: 'OEM', detail: 'Retained', price: 0 },
          { id: 'tyr-ko3', name: 'BFGoodrich All-Terrain KO3', brand: 'BFG', detail: 'The benchmark AT. Van-appropriate sizing', price: 1400 },
          { id: 'tyr-at4w', name: 'Falken Wildpeak AT4W', brand: 'Falken', detail: 'Excellent wet performance, strong UK availability', price: 1200 },
          { id: 'tyr-at3', name: 'Cooper Discoverer AT3', brand: 'Cooper', detail: 'Heavy load-rated for fully laden builds', price: 1100 },
        ]
      },
      {
        title: 'RUNNING STEPS',
        options: [
          { id: 'stp-none', name: 'None', brand: '', detail: '', price: 0 },
          { id: 'stp-amp', name: 'AMP Research PowerStep', brand: 'AMP', detail: 'Auto-deploys on door open · 12V', price: 2200 },
          { id: 'stp-fixed', name: 'Fixed tubular step', brand: 'Alkota', detail: 'Always deployed', price: 800 },
          { id: 'stp-rock', name: 'Rock sliders + step', brand: 'Alkota', detail: 'Welded rock protection with integrated step', price: 1600 },
        ]
      }
    ]
  },
  {
    id: 8,
    title: 'Side Storage',
    tag: 'EXTERIOR · STORAGE',
    description: 'External storage for wet gear, recovery equipment, and supplies.',
    subcategories: [
      {
        title: 'SIDE STORAGE MODULES',
        options: [
          { id: 'stor-none', name: 'None', brand: '', detail: '', price: 0 },
          { id: 'stor-pod1', name: 'Side Podz (nearside)', brand: 'Side Podz UK', detail: 'External waterproof bolt-on · 60L/80L/100L', price: 1200 },
          { id: 'stor-pod2', name: 'Side Podz (both sides)', brand: 'Side Podz UK', detail: 'Double external storage', price: 2200 },
          { id: 'stor-roam', name: 'Roam boxes on rack', brand: 'Roam Adventure Co', detail: '95L or 47L airtight modular', price: 900 },
        ]
      }
    ]
  },
  {
    id: 9,
    title: 'Recovery & Air',
    tag: 'SYSTEMS · CAPABILITY',
    description: 'Self-recovery tools and onboard air management.',
    subcategories: [
      {
        title: 'WINCH',
        options: [
          { id: 'wnc-none', name: 'None', brand: '', detail: '', price: 0 },
          { id: 'wnc-warn9', name: 'Warn winch 9,500lb', brand: 'Warn', detail: 'Synthetic rope · Requires expedition front bumper', price: 1800 },
          { id: 'wnc-warnz', name: 'Warn Zeon', brand: 'Warn', detail: 'Premium high-speed · Serious expedition use', price: 2600 },
        ]
      },
      {
        title: 'ONBOARD AIR',
        options: [
          { id: 'air-none', name: 'None', brand: '', detail: '', price: 0 },
          { id: 'air-arb1', name: 'ARB single compressor', brand: 'ARB', detail: 'Tyre inflation, air tools, locker actuation', price: 650 },
          { id: 'air-arb2', name: 'ARB twin compressor kit', brand: 'ARB', detail: 'Higher output · Faster inflation · Continuous duty', price: 1100 },
          { id: 'air-full', name: 'Full onboard air system', brand: 'Agile Offroad', detail: 'Compressor + tank + cab controls + exterior quick-connect', price: 2400 },
        ]
      },
      {
        title: 'ENGINE PRE-HEAT',
        options: [
          { id: 'eheat-none', name: 'None', brand: '', detail: '', price: 0 },
          { id: 'eheat-web', name: 'Webasto Thermo Top Evo', brand: 'Webasto', detail: 'Silent coolant heater · Sub-zero starting', price: 2200 },
        ]
      },
      {
        title: 'RECOVERY EQUIPMENT',
        options: [
          { id: 'req-none', name: 'None', brand: '', detail: '', price: 0 },
          { id: 'req-roam', name: 'Roam recovery kit', brand: 'Roam', detail: 'Kinetic rope, shackles, gloves, tree saver', price: 600 },
          { id: 'req-max', name: 'MaxTrax MKII boards', brand: 'MaxTrax', detail: '2 boards, mounted to carrier or body', price: 400 },
          { id: 'req-full', name: 'Full expedition recovery', brand: '', detail: 'Boards + rope + shackles + hi-lift jack', price: 1200 },
        ]
      }
    ]
  },
  {
    id: 10,
    title: 'Electrical',
    tag: 'SYSTEMS · POWER',
    description: 'The foundation of off-grid independence.',
    subcategories: [
      {
        title: 'BATTERY BANK (LiFePO4)',
        options: [
          { id: 'bat-100', name: '100Ah LiFePO4', brand: 'Fogstar Drift', detail: 'UK Grade A cells · BMS integrated', price: 800 },
          { id: 'bat-200', name: '200Ah LiFePO4', brand: 'Fogstar Drift', detail: 'Standard specification', price: 1400 },
          { id: 'bat-300', name: '300Ah LiFePO4', brand: 'Fogstar Drift Pro', detail: 'Higher discharge rate · Superior BMS', price: 2100 },
          { id: 'bat-400', name: '400Ah (2× 200Ah)', brand: 'Fogstar Drift Pro', detail: 'Parallel bank · Handles AC and induction', price: 2800 },
          { id: 'bat-600', name: '600Ah (2× 300Ah)', brand: 'Fogstar Drift Pro', detail: 'Maximum · Full AC + high-draw loads', price: 4200 },
        ]
      },
      {
        title: 'SOLAR',
        options: [
          { id: 'sol-0', name: 'None', brand: '', detail: 'Shore power / alternator only', price: 0 },
          { id: 'sol-200', name: '200W Array', brand: 'Victron MPPT', detail: '2 panels integrated into roof rack', price: 1100 },
          { id: 'sol-400', name: '400W Array', brand: 'Victron MPPT', detail: 'Powers most systems indefinitely in UK summer', price: 1900 },
          { id: 'sol-600', name: '600W Array', brand: 'Victron MPPT', detail: 'Handles AC use in good sun · Expedition spec', price: 2800 },
        ]
      },
      {
        title: 'INVERTER / CHARGER',
        options: [
          { id: 'inv-2k', name: 'MultiPlus-II 2000W', brand: 'Victron', detail: 'Powers induction, microwave, laptops', price: 1400 },
          { id: 'inv-3k', name: 'MultiPlus-II 3000W', brand: 'Victron', detail: 'Powers AC, full induction simultaneously', price: 2100 },
          { id: 'inv-5k', name: 'MultiPlus-II 5000W', brand: 'Victron', detail: 'Maximum · Twin AC + induction + pressure washer', price: 3400 },
        ]
      },
      {
        title: 'SYSTEM MANAGEMENT',
        options: [
          { id: 'mgt-cerbo', name: 'Cerbo GX + Touch 70', brand: 'Victron', detail: 'Standard on all builds · Full system monitoring', price: 1200 },
          { id: 'mgt-garmin', name: 'Garmin Overlander', brand: 'Garmin', detail: 'Overlanding GPS + satellite imagery', price: 1500 },
        ]
      },
      {
        title: 'ALTERNATOR CHARGING',
        options: [
          { id: 'alt-std', name: 'Orion-Tr Smart', brand: 'Victron', detail: 'DC-DC intelligent charger', price: 400 },
          { id: 'alt-2nd', name: 'Second alternator 200A', brand: 'Nations', detail: 'For AC-equipped or very high-draw builds', price: 2800 },
        ]
      }
    ]
  },
  {
    id: 11,
    title: 'Water',
    tag: 'SYSTEMS · PLUMBING',
    description: 'Storage, heating, and filtration for extended remote stays.',
    subcategories: [
      {
        title: 'FRESH WATER TANK',
        options: [
          { id: 'h2o-40', name: '40L', brand: '', detail: 'HOLT standard · Under-seat or under-bed', price: 600 },
          { id: 'h2o-60', name: '60L', brand: '', detail: 'DALE standard', price: 800 },
          { id: 'h2o-80', name: '80L', brand: '', detail: 'FELL standard', price: 1000 },
          { id: 'h2o-100', name: '100L+', brand: '', detail: 'CRAG standard / custom fabricated', price: 1400 },
        ]
      },
      {
        title: 'WATER HEATING',
        options: [
          { id: 'wht-none', name: 'Cold only', brand: '', detail: '', price: 0 },
          { id: 'wht-cal', name: 'Whale Expanse Calorifier', brand: 'Whale', detail: 'Passive, free hot water while driving', price: 1200 },
          { id: 'wht-web', name: 'Webasto Thermo Top Evo', brand: 'Webasto', detail: 'Coolant heater · Heats water + engine + cabin', price: 2800 },
          { id: 'wht-tru', name: 'Truma Combi', brand: 'Truma', detail: 'Gas + electric + space heater combined', price: 2400 },
        ]
      },
      {
        title: 'FILTRATION',
        options: [
          { id: 'fil-in', name: 'Inline carbon filter', brand: '', detail: 'Chlorine and taste removal', price: 200 },
          { id: 'fil-berk', name: 'Berkey + inline', brand: 'Berkey', detail: 'Gravity filter + inline carbon', price: 600 },
          { id: 'fil-uv', name: 'Full multi-stage + UV', brand: '', detail: 'Sediment + carbon + UV steriliser', price: 1800 },
        ]
      },
      {
        title: 'OUTDOOR SHOWER',
        options: [
          { id: 'shw-none', name: 'None', brand: '', detail: '', price: 0 },
          { id: 'shw-cold', name: 'Cold only', brand: '', detail: 'Exterior hose tap', price: 300 },
          { id: 'shw-mix', name: 'Hot + cold mixer', brand: '', detail: 'Recessed exterior box', price: 800 },
          { id: 'shw-scr', name: 'Shower + Alkota windbreak', brand: 'Alkota', detail: 'Barn-door-mounted aluminium privacy screen', price: 1400 },
        ]
      }
    ]
  },
  {
    id: 12,
    title: 'Climate',
    tag: 'SYSTEMS · CLIMATE',
    description: 'Cabin temperature control in all conditions.',
    subcategories: [
      {
        title: 'PRIMARY HEATING',
        options: [
          { id: 'heat-eb2', name: 'Airtronic D2', brand: 'Eberspächer', detail: 'Industry standard · 2kW', price: 1400 },
          { id: 'heat-web2', name: 'Air Top 2000 ST', brand: 'Webasto', detail: 'Premium equivalent · Strong UK dealer support', price: 1500 },
          { id: 'heat-webhyd', name: 'Thermo Top Evo (Hydronic)', brand: 'Webasto', detail: 'Coolant-based · Silent · Required for underfloor', price: 2800 },
        ]
      },
      {
        title: 'UNDERFLOOR HEATING',
        options: [
          { id: 'ufh-none', name: 'None', brand: '', detail: '', price: 0 },
          { id: 'ufh-liv', name: 'Living area only', brand: '', detail: 'Requires Webasto hydronic', price: 1800 },
          { id: 'ufh-full', name: 'Full floor', brand: '', detail: 'Living area + lounge', price: 2600 },
        ]
      },
      {
        title: 'AIR CONDITIONING',
        options: [
          { id: 'ac-none', name: 'None', brand: '', detail: '', price: 0 },
          { id: 'ac-dom', name: 'Dometic FreshJet 3000', brand: 'Dometic', detail: 'Rooftop · 3.0kW cooling', price: 2400 },
          { id: 'ac-cnc', name: 'Cruise n Comfort', brand: 'CnC', detail: '12V compressor system · More efficient', price: 4200 },
        ]
      },
      {
        title: 'VENTILATION',
        options: [
          { id: 'vent-max', name: 'MaxxFan Deluxe', brand: 'Maxxair', detail: 'Remote controlled · Rain-open capable', price: 450 },
          { id: 'vent-dom', name: 'Freshlight', brand: 'Dometic', detail: 'Combined fan + ambient LED lighting', price: 600 },
        ]
      }
    ]
  },
  {
    id: 13,
    title: 'Bed & Garage',
    tag: 'INTERIOR · SLEEPING',
    description: 'Sleeping arrangements and primary storage volume.',
    subcategories: [
      {
        title: 'BED CONFIGURATION',
        options: [
          { id: 'bed-fixl', name: 'Fixed longitudinal', brand: '', detail: 'East-west island bed', price: 1200 },
          { id: 'bed-fixt', name: 'Fixed transverse', brand: '', detail: 'Width of van', price: 1200 },
          { id: 'bed-rock', name: 'Rock & roll', brand: '', detail: 'Fold seat to bed', price: 2400 },
          { id: 'bed-lift', name: 'Alkota Lift Garage', brand: 'Alkota', detail: 'Pneumatic-assist vertical lift', price: 4200 },
          { id: 'bed-tilt', name: 'Alkota Cinema Tilt', brand: 'Alkota', detail: 'Gas-strut pivot · Reclined lounge mode', price: 3000 },
        ]
      },
      {
        title: 'GARAGE STORAGE',
        options: [
          { id: 'gar-open', name: 'Standard open garage', brand: '', detail: 'Fixed floor', price: 0 },
          { id: 'gar-slide', name: 'Garage slider system', brand: 'Alkota', detail: 'Full-extension rated slides', price: 1400 },
          { id: 'gar-bike', name: 'Bike drawer', brand: 'Alkota', detail: '1–2 MTBs on wheel-off tray', price: 1800 },
        ]
      }
    ]
  },
  {
    id: 14,
    title: 'Kitchen',
    tag: 'INTERIOR · GALLEY',
    description: 'Food preparation and storage.',
    subcategories: [
      {
        title: 'COOKTOP',
        options: [
          { id: 'cook-ind1', name: 'Single induction 240V', brand: '', detail: 'Requires inverter', price: 400 },
          { id: 'cook-ind2', name: 'Twin induction 240V', brand: '', detail: 'Standard DALE and above', price: 600 },
          { id: 'cook-trail', name: 'External trail kitchen', brand: 'Alkota', detail: 'Slide-out rear prep station', price: 2200 },
        ]
      },
      {
        title: 'FRIDGE',
        options: [
          { id: 'fri-65', name: 'Isotherm Cruise 65', brand: 'Isotherm', detail: '65L · Flush-mounted compressor', price: 1000 },
          { id: 'fri-85', name: 'Isotherm Cruise 85', brand: 'Isotherm', detail: '85L · DALE/FELL standard', price: 1200 },
          { id: 'fri-130', name: 'Isotherm Cruise 130 Elegant', brand: 'Isotherm', detail: '130L · Stainless door', price: 1600 },
        ]
      },
      {
        title: 'WORKTOP MATERIAL',
        options: [
          { id: 'top-oak', name: 'Solid oak', brand: '', detail: 'Warm, traditional, oilable', price: 800 },
          { id: 'top-ash', name: 'Light ash ply', brand: '', detail: 'Lightweight, hardwood veneer', price: 600 },
          { id: 'top-dek', name: 'Dekton engineered stone', brand: 'Dekton', detail: 'Premium surface, heavy but impeccable', price: 2400 },
        ]
      }
    ]
  },
  {
    id: 15,
    title: 'Audio',
    tag: 'INTERIOR · ENTERTAINMENT',
    description: 'Acoustics and media integration.',
    subcategories: [
      {
        title: 'SPEAKER SYSTEM',
        options: [
          { id: 'aud-std', name: 'Factory', brand: 'OEM', detail: 'Retained', price: 0 },
          { id: 'aud-ent', name: 'Entry Musway', brand: 'Musway', detail: 'ME62C component speakers', price: 600 },
          { id: 'aud-enh', name: 'Enhanced Musway', brand: 'Musway', detail: 'ME62C + M4 4-channel amp', price: 1400 },
          { id: 'aud-full', name: 'Full DSP System', brand: 'Musway', detail: 'DSP amp + sub · Reference quality', price: 3500 },
        ]
      },
      {
        title: 'HEAD UNIT',
        options: [
          { id: 'hu-std', name: 'Factory', brand: 'OEM', detail: 'Retained', price: 0 },
          { id: 'hu-ken', name: 'Kenwood DMX9720XDS', brand: 'Kenwood', detail: 'Wireless CarPlay · 9" screen', price: 1200 },
        ]
      }
    ]
  },
  {
    id: 16,
    title: 'Interior Finish',
    tag: 'INTERIOR · SURFACES',
    description: 'The tactile and visual environment.',
    subcategories: [
      {
        title: 'WALLS & CEILING',
        options: [
          { id: 'wal-oak', name: 'Ply panels — light oak', brand: '', detail: 'Traditional, warm', price: 0 },
          { id: 'wal-wht', name: 'Ply panels — painted white', brand: '', detail: 'Clean, minimal', price: 0 },
          { id: 'wal-alc', name: 'Fabric headliner', brand: '', detail: 'Alcantara style · Premium, acoustic', price: 1200 },
          { id: 'wal-res', name: 'Resin-coated ply', brand: '', detail: 'Hard-coated, easy-clean, expedition', price: 800 },
        ]
      },
      {
        title: 'FLOORING',
        options: [
          { id: 'flr-stn', name: 'LVT stone look', brand: '', detail: 'Durable, waterproof, easy-clean', price: 0 },
          { id: 'flr-wd', name: 'LVT wood look', brand: '', detail: 'Warm, hardwearing', price: 0 },
          { id: 'flr-crk', name: 'Cork composite', brand: '', detail: 'Natural, acoustic, anti-microbial', price: 600 },
          { id: 'flr-ply', name: 'Anti-slip ply', brand: '', detail: 'Expedition/utility builds', price: 0 },
        ]
      },
      {
        title: 'CABINET FINISH',
        options: [
          { id: 'cab-mdf', name: 'Painted MDF', brand: '', detail: 'Colour-matched', price: 0 },
          { id: 'cab-ven', name: 'Real wood veneer', brand: '', detail: 'Ash or walnut', price: 1800 },
          { id: 'cab-alu', name: 'Aluminium composite face', brand: '', detail: 'Industrial, automotive-feel', price: 2400 },
        ]
      }
    ]
  }
]
