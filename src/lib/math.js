export function randInt(max) {
  return Math.round(rand(max));
};

export function randSignedInt(max) {
  return(Math.round(rand(max, true)));  
}

export function randRangeInt(min, max) {
  const r = Math.round(rand(max));
  return (r < min) ? min : r;
}

export function rand(max, incNegatives) {
  return (Math.random() * max) * (incNegatives ? (Math.random() * 2 > 1 ? -1 : 1) : 1);
};
