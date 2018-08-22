const port;
import configureStore from "./state/store";
import { errorOperations } from "./state/error";

export class LWSService {

	constructor() {
		this.port =  (port) ? port : () => { port = chrome.runtime.connect({ name: 'LWS_INIT' }); return port };
		this.store = configureStore();
		this.handleErrors()
	}

	handleErrors() {
		this.port.onMessage.addListener(msg => {
			if (msg.error) {
				this.store.dispatch(errorOperations.updateError(msg.error))
			}
		});
	}
}
