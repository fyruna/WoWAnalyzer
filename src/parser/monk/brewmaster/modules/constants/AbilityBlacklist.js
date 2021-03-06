/**
 * This list is used to skip abilities for the purposes of *hit
 * counting*. These abilities produce many hits but generally aren't
 * worth mitigating, skewing the results of tracking.
 */

const SHARED = [
  // CRUCIBLE OF STORMS
  282743, // Cabal, Storm of Annihilation (Crown effect)
  295479, // Uu'nat, Touch of the End
  // BOD
  288806, // Mekkatorque, Gigavolt Blast
  286646, // Mekkatorque, Gigavolt Charge
  289648, // Mekkatorque (Spark Bot), Spark Shield -- RJW causes a bunch of events for this. not much you can do to avoid it
  288939, // Mekkatorque, Gigavolt Radiation
  284831, // Rastakhan, Scorching Detonation -- DoT
  285195, // Rastakhan, Deadly Withering
  285000, // Stormwall, Kelp-Wrapped
  287993, // Jaina, Chilling Touch
  // ULDIR
  266948, // Vectis, Plague Bomb (intermission soak)
  // ANTORUS
  // Garothi Worldbreaker
  247159, // Luring Destruction, intermission pulse
  // Felhounds of Sargeras
  // Antoran High Command
  // Eonar (SKIP)
  // Portal Keeper
  // Imonar
  248424, // Gathering Power (Imonar bridge phase)
  // Kin'Garoth
  246646, // Flames of the Forge (Kin'garoth intermission pulsing aoe)
  // Varimathras
  // Coven of Shivarra
  258018, // Sense of Dread, pulsing aoe from inactive shivarra
  // Aggramar
  244912, // Blazing Eruption, the pulse of Embers on Aggramar
  254329, // Unleashed Flame, Embers on Aggramar
  245632, // Unchecked Flame, Flames on Aggramar (there are two that can't be stack, can't bof both)
  // Argus
  256396, // Reorigination pulse, aoe hit from orbs. generally don't get bof on these
];

export const BOF = SHARED.concat([
  // ULDIR
  265178, // Vectis, Evolving Affliction
  265143, // Vectis, Omega Vector (tank *shouldnt* get, but w/e)
  274358, // Zul, Rupturing Blood (dot interaction with bof is unknown; assuming that it won't change individual ticks for now)
  263334, // G'huun, Putrid Blood
  // ANTORUS
  // Kin'Garoth
  246779, // Empowered bombs (Kin'garoth)
]);

export const ISB = SHARED.concat([
]);
