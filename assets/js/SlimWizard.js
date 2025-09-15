class SlimWizard {
	validStates = ["login", "action", "arguments", "result"];
	api_url;
	cookie;
	constructor(api_url) {
		try {
			this.api_url = api_url;
			let cookie = this.cookie_get('slim-json');
			if (!cookie) throw "no cookie";
			if (!cookie.state) throw "no state";
			this.cookie = cookie;
		} catch (error) {
			this.cookie = {
				state: "login"
			}
		}	
	}
	render() {
		let element = document.getElementById("wizard-" + this.cookie.state);
		element.classList.remove("d-none");
		if (this.cookie.state == "result") {
			document.getElementById('result-success').innerHTML = this.cookie.result.success;
			document.getElementById('result-data').innerHTML = JSON.stringify(this.cookie.result.data);
			document.getElementById('result-error').innerHTML = JSON.stringify(this.cookie.result.error);
		}
	}
	resolveLogout() {
		this.cookie_clear();
		location.reload();
	}
	async resolveLogin(username, password) {
		let actionUrl = this.api_url + "/guest/login";
		let payload = {
			username: username,
			password: password
		};
		let response = await api.request("POST", actionUrl, payload);
		if(!response.success) {
			throw "login failed";
		}
		let cookie = {
			state: this.getNextState(),
			username: response.data.user.username,
			token: response.data.token
		};
		this.cookie_set(cookie);
		location.reload();
	}
	resolveAction(action) {
		// Check if the method exists on the api instance
		// Check if its actually a function
		if (!action in api || typeof api[action] !== 'function') {
			throw new Error('API method not found: ' + action);
		}
		let element = document.getElementById("wizard-" + this.cookie.state);
		element.classList.add("d-none");
		let cookie = {
			state: this.getNextState(),
			username: this.cookie.username,
			token: this.cookie.token,
			action: action
		};
		this.cookie_set(cookie);
		this.cookie = cookie;
		this.render();
	}
	async resolveArguments(method, slug, payload = null) {
		let actionUrl = this.api_url + slug;
		let response = await api.request(method, actionUrl, payload, this.cookie.token);
		if(!response.success) {
			throw response.error.message;
		}
		let cookie = {
			state: this.getNextState(),
			username: this.cookie.username,
			token: this.cookie.token,
			action: this.cookie.action,
			result: response
		};
		this.cookie_set(cookie);
		location.reload();
	}
	cookie_get() {
		let json = Cookies.get('slim-json');
		return JSON.parse(json);
	}
	cookie_set(object) {
		Cookies.set('slim-json', JSON.stringify(object));
		return true;
	}
	cookie_clear() {
		Cookies.remove('slim-json');
		return true;
	}
	getPreviousState() {
		let index = this.validStates.indexOf(this.cookie.state);
		let state = this.validStates[index - 1];
		return state;
	}
	getNextState() {
		let index = this.validStates.indexOf(this.cookie.state);
		let state = this.validStates[index + 1];
		return state;
	}
}