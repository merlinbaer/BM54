// app/overlayStore.ts
import { OverlayState } from '@/type/types';
import { observable } from '@legendapp/state';

// Bottom Player State
export const overlayStore$ = observable<OverlayState>({
  visible: false,
  playerPadding: 20, // das untere Ende der scrollbaren Tab Fenster
});
