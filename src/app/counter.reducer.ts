import { createReducer, on } from '@ngrx/store';
import { increament, decrement, reset } from './counter.actions';

export const initialCount = 1;

const _createReducer = createReducer(
  initialCount,
  on(increament, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => (state = 0))
);

export function counterReducer(state: any, action: any) {
  return _createReducer(state, action);
}
