---
layout: project
type: project
image: img/jr-slim/jr-slim.png
title: "jr-slim"
date: "Under development"
published: true
giturl: "https://github.com/jr-public/jr-slim"
tryurl: true
remoteurl: {{ site.data.jr-slim.config.api_url }}
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
<script type="text/javascript" defer src="{{ site.baseurl }}/assets/js/SlimWizard.js"></script>
<div class="container-fluid">
	<div class="row">
		<div class="col-4">
		EXPLAIN
		</div>
		<div class="col-8">
			<div id="wizard-row" class="row justify-content-center">
				{% include jr-slim/login.html hidden=true %}
				{% include jr-slim/action.html hidden=true %}
				{% include jr-slim/arguments.html hidden=true %}
				{% include jr-slim/result.html hidden=true %}
			</div>
		</div>
	</div>
</div>
<script type="text/javascript">
window.addEventListener("DOMContentLoaded", function () {
	window.wiz = new SlimWizard("{{ site.data.jr-slim.config.api_url }}");
	window.wiz.render();
});
</script>