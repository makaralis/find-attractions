import { atom } from 'recoil';
import { localStorageEffect } from '../helpers';

export const PERSIST_KEY = 'persist:faves';

const isInFaves = {value: false, key: ''};

export const favesAtom = atom({
  key: 'favesState',
  default: isInFaves,
  effects_UNSTABLE: [localStorageEffect(PERSIST_KEY)],
});
