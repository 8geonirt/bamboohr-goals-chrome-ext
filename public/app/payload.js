chrome.runtime.onMessage.addListener((msg, sender, response) => {
  var goals = Array.from(document.getElementsByClassName('GoalView'));

  var goalsReport = goals.map((goal) => {
    var title = goal.querySelector('.GoalView__goalTitle').innerHTML;
    var progress = goal.querySelector('.GoalsProgressBar__progressBar');
    var dueDate = goal.querySelector('.GoalsProgressBar__dueDate');
    var currentProgress = null;

    if (progress !== null) {
      dueDate = dueDate.innerHTML;
      currentProgress = progress.style.width;
    } else {
      currentProgress = 100;
    }

    return {
      goal: title,
      progress: parseInt(currentProgress, 10),
      dueDate: dueDate
    }
  });

  response({
    action: 'report',
    data: goalsReport
  });
});
