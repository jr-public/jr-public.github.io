---
layout: project
type: project
image: img/jr-slim/jr-slim.png
title: "jr-slim"
date: "Under development"
published: true
giturl: "https://github.com/jr-public/jr-slim"
tryurl: false
position: 1
labels:
  - PHP
  - REST API
  - Slim Framework
  - Doctrine
  - PostgreSQL
  - Docker
  - GitHub
summary: "A modern PHP REST API featuring JWT authentication, role-based permissions, and comprehensive validation.<br />Demonstrates clean architecture with Docker containerization and extensive testing."
---
<div class="container-fluid">
	<!-- Row 1: Three equal columns -->
	<div class="row mb-4">
		<!-- Column 1: Users, Login Form, Logged In User Info -->
		<div class="col-lg-4 col-md-6 col-sm-12 mb-3">
			<div class="card card-custom h-100 p-3 bg-white">
				<h5 class="mb-3 text-center text-primary">Active Users</h5>
				<div class="d-flex flex-wrap justify-content-around mb-4">
					<!-- User 1 -->
					<div class="user-profile" onclick="console.log('User 1 clicked')">
						<img src="https://placehold.co/50x50/ADD8E6/000000?text=U1" alt="User 1">
						<p class="mt-1 mb-0">User One</p>
					</div>
					<!-- User 2 -->
					<div class="user-profile" onclick="console.log('User 2 clicked')">
						<img src="https://placehold.co/50x50/90EE90/000000?text=U2" alt="User 2">
						<p class="mt-1 mb-0">User Two</p>
					</div>
					<!-- User 3 -->
					<div class="user-profile" onclick="console.log('User 3 clicked')">
						<img src="https://placehold.co/50x50/FFB6C1/000000?text=U3" alt="User 3">
						<p class="mt-1 mb-0">User Three</p>
					</div>
					<!-- User 4 -->
					<div class="user-profile" onclick="console.log('User 4 clicked')">
						<img src="https://placehold.co/50x50/DDA0DD/000000?text=U4" alt="User 4">
						<p class="mt-1 mb-0">User Four</p>
					</div>
				</div>
				<h5 class="mb-3 text-center text-primary">Login</h5>
				<form id="loginForm" class="mb-4">
					<div class="mb-3">
						<label for="username" class="form-label visually-hidden">Username</label>
						<input type="text" class="form-control rounded" id="username" placeholder="Username" required>
					</div>
					<div class="mb-3">
						<label for="password" class="form-label visually-hidden">Password</label>
						<input type="password" class="form-control rounded" id="password" placeholder="Password" required>
					</div>
					<div class="d-grid">
						<button type="submit" class="btn btn-primary rounded">Login</button>
					</div>
				</form>
				<div class="mt-auto pt-3 border-top text-center">
					<h6 class="text-secondary">Logged In User: <span id="loggedInUser" class="fw-bold">N/A</span></h6>
					<p class="mb-0 text-muted">Token: <span id="userToken" class="font-monospace">N/A</span></p>
				</div>
			</div>
		</div>
		<!-- Column 2: User Actions -->
		<div class="col-lg-4 col-md-6 col-sm-12 mb-3">
			<div class="card card-custom h-100 p-3 bg-white">
				<h5 class="mb-3 text-center text-primary">User Actions</h5>
				<div class="d-grid gap-3">
					<button class="btn btn-outline-success rounded" onclick="console.log('Action 1 clicked')">Perform Action 1</button>
					<button class="btn btn-outline-info rounded" onclick="console.log('Action 2 clicked')">Perform Action 2</button>
					<button class="btn btn-outline-warning rounded" onclick="console.log('Action 3 clicked')">Perform Action 3</button>
					<button class="btn btn-outline-danger rounded" onclick="console.log('Action 4 clicked')">Perform Action 4</button>
					<button class="btn btn-outline-secondary rounded" onclick="console.log('Action 5 clicked')">Perform Action 5</button>
				</div>
			</div>
		</div>
		<!-- Column 3: Target Users, Request Button -->
		<div class="col-lg-4 col-md-12 col-sm-12 mb-3">
			<div class="card card-custom h-100 p-3 bg-white">
				<h5 class="mb-3 text-center text-primary">Select Target User</h5>
				<div class="d-flex flex-wrap justify-content-around mb-4">
					<!-- Target User 1 -->
					<div class="user-profile" onclick="console.log('Target User 1 selected')">
						<img src="https://placehold.co/50x50/F08080/000000?text=T1" alt="Target User 1">
						<p class="mt-1 mb-0">Target User 1</p>
					</div>
					<!-- Target User 2 -->
					<div class="user-profile" onclick="console.log('Target User 2 selected')">
						<img src="https://placehold.co/50x50/20B2AA/000000?text=T2" alt="Target User 2">
						<p class="mt-1 mb-0">Target User 2</p>
					</div>
					<!-- Target User 3 -->
					<div class="user-profile" onclick="console.log('Target User 3 selected')">
						<img src="https://placehold.co/50x50/DA70D6/000000?text=T3" alt="Target User 3">
						<p class="mt-1 mb-0">Target User 3</p>
					</div>
					<!-- Target User 4 -->
					<div class="user-profile" onclick="console.log('Target User 4 selected')">
						<img src="https://placehold.co/50x50/FFA07A/000000?text=T4" alt="Target User 4">
						<p class="mt-1 mb-0">Target User 4</p>
					</div>
					<!-- Target User 5 -->
					<div class="user-profile" onclick="console.log('Target User 5 selected')">
						<img src="https://placehold.co/50x50/778899/000000?text=T5" alt="Target User 5">
						<p class="mt-1 mb-0">Target User 5</p>
					</div>
					<!-- Target User 6 -->
					<div class="user-profile" onclick="console.log('Target User 6 selected')">
						<img src="https://placehold.co/50x50/B0E0E6/000000?text=T6" alt="Target User 6">
						<p class="mt-1 mb-0">Target User 6</p>
					</div>
				</div>
				<div class="d-grid mt-auto">
					<button class="btn btn-dark btn-lg rounded" onclick="console.log('REQUEST button clicked')">REQUEST</button>
				</div>
			</div>
		</div>
	</div>
	<!-- Row 2: Full width response area -->
	<div class="row">
		<div class="col-12">
			<div class="card card-custom p-3 bg-white">
				<h5 class="mb-3 text-center text-primary">Response Area</h5>
				<div id="responseArea" class="bg-light p-3 border rounded text-muted" style="min-height: 150px;">
					<!-- Response will be displayed here -->
					<p class="mb-0">This area will display the response of your requests.</p>
					<p class="mb-0">It is designed to expand as content is added.</p>
				</div>
			</div>
		</div>
	</div>
</div>
<script>
	// Prevent default form submission for the login form
	document.getElementById('loginForm').addEventListener('submit', function(event) {
		event.preventDefault();
		console.log('Login form submission prevented.');
		// You can add your login logic here
		const username = document.getElementById('username').value;
		const password = document.getElementById('password').value;
		console.log('Username:', username, 'Password:', password);
		// Example: Update logged in user info (replace with actual login success)
		document.getElementById('loggedInUser').innerText = username || 'Guest';
		document.getElementById('userToken').innerText = 'sample-token-12345'; // Replace with actual token
	});
	// Example for updating response area (you'll integrate your actual logic here)
	function updateResponse(message) {
		const responseArea = document.getElementById('responseArea');
		responseArea.innerHTML = `<p class="mb-0">${message}</p>`;
	}
	// Example usage (you can remove these lines)
	// setTimeout(() => updateResponse('Login successful! Welcome!'), 3000);
	// setTimeout(() => updateResponse('Request sent successfully! Data received.'), 6000);
</script>
