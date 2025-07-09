class ApiClient {
	jwt;
	user;
	url = "http://172.29.208.1:80"; // http://host.docker.internal:80 ?
	
    constructor() {}

	async login(username, password) {
		let actionUrl = this.url + "/guest/login";
		let payload = {
			username: username,
			password: password
		};
		const json = await this.request("POST", actionUrl, payload);
		return json;
	}
	logout() {
		this.jwt = undefined;
		this.user = undefined;
		return true;
	}

	async request(method, url, payload = null) {
		const options = {
			method,
			headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			},
		};

		if (payload) {
			options.body = JSON.stringify(payload);
		}

		const response = await fetch(url, options);

		const contentType = response.headers.get('content-type') || '';
		if (!contentType.includes('application/json')) {
			throw new Error(`Critical Error: Expected JSON response but got '${contentType}'`);
		}

		let json;
		try {
			json = await response.json();
		} catch (err) {
			throw new Error(`Critical Error: Failed to parse JSON response. ${err.message}`);
		}
		return json;
	}

    setUrl(url) {
        this.url = url;
    }
	setJwt(jwt) {
		this.jwt = jwt;
	}
	setUser(user) {
		this.user = user;
	}
	getUrl() {
		return this.url;
	}
	getJwt() {
		return this.jwt;
	}
	getUser() {
		return this.user;
	}
	
  	jsonToTableHTML(data, skip = [], level = 0) {
		if (typeof data === 'string') {
			try {
				data = JSON.parse(data);
			} catch (e) {
				return `<div style="color: red;">Invalid JSON</div>`;
			}
		}
		if (typeof data !== 'object' || data === null) {
			return `<div>${this.escapeHTML(String(data))}</div>`;
		}
		let html = `<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; margin-left: ${level * 20}px;">`;
		for (let key in data) {
		//
		if (skip.includes(key)) continue;
		//
		if (Object.prototype.hasOwnProperty.call(data, key)) {
			html += '<tr>';
			html += `<td style="background: #f0f0f0; font-weight: bold;">${key}</td>`;
			html += '<td>';
			const value = data[key];
			if (typeof value === 'object' && value !== null) {
				html += this.jsonToTableHTML(value, skip, level + 1);
			} else {
				html += String(value);
			}
			html += '</td></tr>';
		}
		}
		html += '</table>';
		return html;
	}
	// Auth-related
	// login(credentials: { email: string; password: string }): Promise<void>
	// logout(): void
	// setToken(token: string): void
	// getToken(): string | null

	// // Generic request methods
	// get(path: string, params?: object): Promise<any>
	// post(path: string, body: object): Promise<any>
	// put(path: string, body: object): Promise<any>
	// delete(path: string): Promise<any>

	// // Domain-specific (optional to keep here)
	// fetchUserProfile(): Promise<User>
	// updateUserProfile(data: object): Promise<void>
	// listArticles(): Promise<Article[]>
	// createArticle(data: object): Promise<Article>

}

api = new ApiClient();