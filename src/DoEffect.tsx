import { useEffect, memo } from 'react';
import type { EffectCallback, DependencyList } from 'react';
export interface DoEffectProps {
  effect: EffectCallback;
  deps?: DependencyList;
}
export const DoEffect = memo(function DoEffect({
  effect,
  deps,
}: DoEffectProps) {
  useEffect(() => effect(), [effect, ...(deps || [])]);
  return null;
});


