import { NotificationType, NotifyFun, UtilsActionType } from "../actions/utils";
import { UTILS_SET_NOTIFY, UTILS_SET_PROVIDER, UTILS_SET_REEFSCAN_URL, UTILS_SET_VERIFICATION_API_URL } from "../actionType";
import { Provider } from '@reef-defi/evm-provider';

export interface UtilsReducer {
  notify: NotifyFun;
  provider?: Provider;
  reefscanUrl?: string;
  verificationApiUrl?: string;
}

const initialUtilsState: UtilsReducer = {
  notify: (message: string, type?: NotificationType) => {},
}

export const utilsReducer = (state=initialUtilsState, action: UtilsActionType): UtilsReducer => {
  switch (action.type) {
    case UTILS_SET_NOTIFY: return {...state, notify: action.function};
    case UTILS_SET_PROVIDER: return {...state, provider: action.provider};
    case UTILS_SET_REEFSCAN_URL: return {...state, reefscanUrl: action.url};
    case UTILS_SET_VERIFICATION_API_URL: return {...state, verificationApiUrl: action.url};
    default: return state;
  }
} 