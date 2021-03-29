$(() => {

	$("#git-hide-button").on('click', e => {
		e.preventDefault();
		$("#profile").hide();
		$("#git-repo-button").show();
	}); 

	$("#git-repo-button").on('click', e => {
		e.preventDefault();
        e.target.setAttribute("disabled", true);
			$.ajax({
				url: `https://api.github.com/users/MoshiurShuvo10/repos`,
				data: {
					client_id: 'b9315bcd5a07fcd759d8',
					client_secret: 'a2b698bf7e7c02f898197cf136d1a41f704ca8e4',
					sort: 'created: asc'
				}
			}).done(repos => {
				$.each(repos, (index, repo) => {
					$("#profile").append(`
						<div class="card mb-2">
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
    });
}); 