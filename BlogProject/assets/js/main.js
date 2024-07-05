function addComment(storageName) {
  // Get values from input fields
  var username = document.getElementById('username').value;
  var commentText = document.getElementById('comment').value;
  // Check if both fields are filled
  if (username && commentText) {
    // Create comment object
    var comment = {
      username: username,
      text: commentText
    };
    // Get existing comments from local storage or initialize an empty array
    var comments = JSON.parse(localStorage.getItem(storageName)) || [];
    // Add new comment to the array
    comments.push(comment);
    // Save updated comments array to local storage
    localStorage.setItem(storageName, JSON.stringify(comments));
    // Clear input fields
    document.getElementById('username').value = '';
    document.getElementById('comment').value = '';
    // Update comment list
    displayComments(storageName);
  } else {
    alert('Please fill out both fields to add a comment.');
  }
}

function displayComments(storageName) {
  // Get comment list element
  var commentList = document.getElementById('comment-list');
  // Clear existing comments
  commentList.innerHTML = '';
  // Get comments from local storage
  var comments = JSON.parse(localStorage.getItem(storageName)) || [];
  // Loop through comments and display them
  comments.forEach(function(comment) {
    var li = document.createElement('li');
    li.className = 'comment';
    li.innerHTML = '<span class="username">' + comment.username + ':</span> <span class="text">' + comment.text + '</span>';
    commentList.appendChild(li);
  });
}
