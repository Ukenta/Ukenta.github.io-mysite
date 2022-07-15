'use strict';

{
  // Intersection Observer API

  function process() {
    document.getElementById('target').textContent = 'このアイコンは、去年、絵描きをやっている友人に描いてもらったものです。「demon records」という架空のレコード会社のロゴというコンセプトです。';
  }

  document.getElementById('trigger').addEventListener('click', process);


  function callback(entries, obs) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.animate');

  targets.forEach(target => {
    observer.observe(target);
  });

}