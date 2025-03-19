import { CanDeactivateFn } from '@angular/router';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

export const unsavedGuard: CanDeactivateFn<EditProfileComponent> = (component, currentRoute, currentState, nextState) => {
  return component.canExit();
};
