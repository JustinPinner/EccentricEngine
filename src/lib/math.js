export function randInt(max) {
  return Math.floor(rand(max));
};

export function randRangeInt(min, max) {
  const r = Math.round(rand(max));
  return (r < min) ? min : r;
}

export function rand(max, incNegatives) {
  return (Math.random() * max) * (incNegatives ? (Math.random() * 2 > 1 ? -1 : 1) : 1);
};
