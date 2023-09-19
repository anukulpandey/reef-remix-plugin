import { UTILS_SET_NOTIFY, UTILS_SET_PROVIDER, UTILS_SET_REEFSCAN_URL, UTILS_SET_VERIFICATION_API_URL } from "../actionType";
import { Provider } from '@reef-defi/evm-provider';

export type NotificationType = "html" | "error" | "warn";
export type NotifyFun = (message: string, type?: NotificationType) => void;

interface SetNotifyAction {
  type: typeof UTILS_SET_NOTIFY;
  function: NotifyFun;
}

interface SetProviderAction {
  type: typeof UTILS_SET_PROVIDER;
  provider?: Provider;
}

interface SetReefscanUrlAction {
  type: typeof UTILS_SET_REEFSCAN_URL;
  url?: string;
}

interface SetVerificationApiUrlAction {
  type: typeof UTILS_SET_VERIFICATION_API_URL;
  url?: string;
}

export type UtilsActionType = 
  | SetNotifyAction
  | SetProviderAction
  | SetReefscanUrlAction
  | SetVerificationApiUrlAction;

export const setReefscanUrl = (url?: string): SetReefscanUrlAction => ({
  type: UTILS_SET_REEFSCAN_URL,
  url
});

export const setVerificationApiUrl = (url?: string): SetVerificationApiUrlAction => ({
  type: UTILS_SET_VERIFICATION_API_URL,
  url
});

export const setNotifyAction = (fun: NotifyFun): SetNotifyAction => ({
  type: UTILS_SET_NOTIFY,
  function: fun
});

export const setProviderAction = (provider?: Provider): SetProviderAction => ({
  type: UTILS_SET_PROVIDER,
  provider
});