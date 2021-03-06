import SPELLS from 'common/SPELLS';
import TestCombatLogParser from 'parser/core/tests/TestCombatLogParser';

import HealingRain from './HealingRain';

describe('Shaman/Restoration/Modules/Spells/HealingRain', () => {
  const events = [
    // Tick 1
    { type: 'heal', timestamp: 1, ability: { guid: SPELLS.HEALING_RAIN_HEAL.id }, targetID: 2 },
    { type: 'heal', timestamp: 2, ability: { guid: SPELLS.HEALING_RAIN_HEAL.id }, targetID: 2 },
    { type: 'heal', timestamp: 3, ability: { guid: SPELLS.HEALING_RAIN_HEAL.id }, targetID: 2 },
    { type: 'heal', timestamp: 4, ability: { guid: SPELLS.HEALING_RAIN_HEAL.id }, targetID: 2 },
    { type: 'heal', timestamp: 5, ability: { guid: SPELLS.HEALING_RAIN_HEAL.id }, targetID: 2 },
    { type: 'heal', timestamp: 6, ability: { guid: SPELLS.HEALING_RAIN_HEAL.id }, targetID: 2 },
    // Tick 2
    { type: 'heal', timestamp: 100, ability: { guid: SPELLS.HEALING_RAIN_HEAL.id }, targetID: 2 },
    { type: 'heal', timestamp: 100, ability: { guid: SPELLS.HEALING_RAIN_HEAL.id }, targetID: 2 },
    { type: 'heal', timestamp: 100, ability: { guid: SPELLS.HEALING_RAIN_HEAL.id }, targetID: 2 },
    { type: 'heal', timestamp: 100, ability: { guid: SPELLS.HEALING_RAIN_HEAL.id }, targetID: 2 },
    { type: 'heal', timestamp: 100, ability: { guid: SPELLS.HEALING_RAIN_HEAL.id }, targetID: 2 },
    // Tick 3
    { type: 'heal', timestamp: 190, ability: { guid: SPELLS.HEALING_RAIN_HEAL.id }, targetID: 2 },
    { type: 'heal', timestamp: 230, ability: { guid: SPELLS.HEALING_RAIN_HEAL.id }, targetID: 2 },
    { type: 'heal', timestamp: 230, ability: { guid: SPELLS.HEALING_RAIN_HEAL.id }, targetID: 2 },
    { type: 'heal', timestamp: 230, ability: { guid: SPELLS.HEALING_RAIN_HEAL.id }, targetID: 2 },
    { type: 'heal', timestamp: 230, ability: { guid: SPELLS.HEALING_RAIN_HEAL.id }, targetID: 2 },
    { type: 'heal', timestamp: 235, ability: { guid: SPELLS.HEALING_RAIN_HEAL.id }, targetID: 2 },
    // Tick 4
    { type: 'heal', timestamp: 340, ability: { guid: SPELLS.HEALING_RAIN_HEAL.id }, targetID: 2 },
    { type: 'heal', timestamp: 350, ability: { guid: SPELLS.HEALING_RAIN_HEAL.id }, targetID: 2 },
    // Filter out Pets that received no effective healing
    { type: 'heal', timestamp: 350, ability: { guid: SPELLS.HEALING_RAIN_HEAL.id }, amount: 0, overheal: 1, targetID: 3 },
    { type: 'heal', timestamp: 350, ability: { guid: SPELLS.HEALING_RAIN_HEAL.id }, amount: 0, overheal: 1, targetID: 3 },
    // Tick 5
    { type: 'heal', timestamp: 426, ability: { guid: SPELLS.HEALING_RAIN_HEAL.id }, targetID: 2 },
  ];
  let parser;
  let module;
  const players = [1,2];
  beforeEach(() => {
    parser = new TestCombatLogParser();
    module = parser.loadModule(HealingRain, {
      combatants: {
        players,
      },
    });
  });

  it('can detect ticks', () => {
    parser.processEvents(events);
    expect(module.healingRainTicks.length).toEqual(5);
    expect(module.averageHitsPerTick).toEqual(4);
  });
});
