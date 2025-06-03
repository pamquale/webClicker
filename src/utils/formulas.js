export const upgradeCost = (base, level) => Math.floor(base * 1.15 ** level);
export const prestigeGain = (total) => Math.floor(total / 1e6);
