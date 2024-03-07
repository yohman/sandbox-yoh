<h1 id="title"></h1>
<span id="secondary-title"></span>
<div id="project-container"></div>


<script>
// ---------------------------- //
//                            	//
//	  Function to get URL    	//
//                            	//
// ---------------------------- //
function init(){
	// Get URL parameters
	var params = getUrlParams();
	
	// Check if "val" parameter exists and set it as a variable
	var projectid = params["id"];
	
	// add projectid to the input
	if (projectid == undefined) {
		projectid = "No value found";
	}
	else
	{		
		createProject(projectid);	
	}
}
	
function createProject(projectid) {
	// find the project in the projects array
	let project = sectionData[projectid];
	// add the title
	// get the h1 element title
	let title = document.getElementById('title');
	title.textContent = project[0];

    // get the secondary title
    let secondaryTitle = document.getElementById('secondary-title');
    secondaryTitle.textContent = project[1];

	// create a div for the project
	let projectDiv = document.createElement('div');
	projectDiv.className = 'project';

	// add the project image
	let image = document.createElement('img');
    image.src = '../../work/images/'+project[4]; // Assuming the first column in the sheet is the image name
    image.alt = project[1]; // Assuming the third column in the sheet is the alt text
    projectDiv.appendChild(image);

    // add project link project[5]
    let link = document.createElement('a');
    link.href = project[5];
    link.textContent = "Project Link";
    projectDiv.appendChild(link);

	// add the description
	let description = document.createElement('p');
	description.textContent = project[3];
	projectDiv.appendChild(description);

    // add contributors project[7]
    let contributorsTitle = document.createElement('h3');
    contributorsTitle.textContent = "Contributors";
    projectDiv.appendChild(contributorsTitle);
    let contributors = document.createElement('p');
    contributors.textContent = project[7];
    projectDiv.appendChild(contributors);

    // add supported by project[8]
    let supportedByTitle = document.createElement('h3');
    supportedByTitle.textContent = "Supported by";
    projectDiv.appendChild(supportedByTitle);
    let supportedBy = document.createElement('p');
    supportedBy.textContent = project[8];
    projectDiv.appendChild(supportedBy);

	// add the tags
	let tags = project[6].split(',');
	let tagContainer = document.createElement('div');
	tagContainer.className = 'tag-container';
	tags.forEach(function(tag) {
		let tagDiv = document.createElement('div');
		tagDiv.className = 'tag';
		tagDiv.textContent = tag.trim();
		tagContainer.appendChild(tagDiv);
	});
	projectDiv.appendChild(tagContainer);

	// add the project to the page
	document.getElementById('project-container').appendChild(projectDiv);



	
}
</script>