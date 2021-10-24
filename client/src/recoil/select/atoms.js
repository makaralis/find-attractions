import { atom } from 'recoil';
import { localStorageEffect } from './helpers';

export const PERSIST_KEY = 'persist:select';

const selectedAttractionType = '';

export const selectAtom = atom({
  key: 'selectState',
  default: selectedAttractionType,
  effects_UNSTABLE: [localStorageEffect(PERSIST_KEY)],
});
