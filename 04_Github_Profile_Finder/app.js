$(() => {
	$("#userSearchBox").on('keyup', e => {
		let inputValue = e.target.value; 

		$.ajax({
			//1st api call to get user
			url: `https://api.github.com/users/${inputValue}`,
			data: {
				client_id: 'b9315bcd5a07fcd759d8',
				client_secret: 'a2b698bf7e7c02f898197cf136d1a41f704ca8e4'
			}
		}).done(userProfile => {
			console.log(userProfile);
			// after getting user profile, get all repos of that user
			$.ajax({
				url: `https://api.github.com/users/${inputValue}/repos`,
			data: {
				client_id: 'b9315bcd5a07fcd759d8',
				client_secret: 'a2b698bf7e7c02f898197cf136d1a41f704ca8e4',
				sort:'created: asc'
			}
			}).done(repos => {
				
				$.each(repos, (index, repo) => {
					$("#repositoryDiv").append(`
						<div class="card">
							<div class="row">
								<div class="col-md-7"><strong>${repo.name}: ${repo.description}</strong></div>
								<div class="col-md-3">
									<span class="badge badge-dark">Forks: ${repo.forks_count}</span>
									<span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
									<span class="badge badge-success">Stars: ${repo.stargazers_count}</span>
								</div>
								<div class="col-md-2 mb-2">
									<a href="${repo.html_url}" target="_blank" class="btn btn-danger">Repo Page</a>
								</div>
							</div>
						</div>
					`);
				});
			}); 
			$("#profile").html(`
				<div class="card border-primary mb-3" style="max-width: 100rem;>
					<div class="card-body">
						<h3 style="text-align:center;background-color:rgb(194, 8, 42);font-size:50px">${userProfile.login}</h3><hr>					
						<div class="row">
							<div class="col-md-3">
								<img class="img-thumbnail avatar mb-3" src="${userProfile.avatar_url}">
								<a href="${userProfile.html_url}" class="btn btn-danger">View Profile</a>
							</div>
							<div class="col-md-9">
								<span class="badge badge-success">Public Repos: ${userProfile.public_repos}</span>
								<span class="badge badge-danger">Public Gists: ${userProfile.public_gists}</span>
								<span class="badge badge-warning">Followers: ${userProfile.followers}</span>
								<span class="badge badge-info">Following: ${userProfile.following}</span>

								<ul class="list-group">
									<li class="list-group-item">Company: ${userProfile.company}</li>
									<li class="list-group-item">Website/blog: <a href="${userProfile.blog}" target="_blank">${userProfile.blog}</a></li>
									<li class="list-group-item">Location: ${userProfile.location}</li>
									<li class="list-group-item">Member Since: ${userProfile.created_at}</li>
								</ul>
							</div>
						</div>
					</div>
					<hr>
					<h3 class="page-header">Latest Repositories</h3>
					<div id="repositoryDiv"></div>
				</div>
			`);
		});
	});
});