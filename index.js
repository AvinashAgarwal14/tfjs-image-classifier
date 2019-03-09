const img = document.getElementById('img');
const inputImg = document.getElementsByTagName('input');
const predict = document.getElementById('predict');

inputImg[0].addEventListener('change', function(event){
  var output = document.getElementById('img');
  output.src = URL.createObjectURL(event.target.files[0]);
  document.getElementById('category_one').textContent = 'Loading';
      document.getElementById('probability_one').textContent = '...';
      document.getElementById('category_two').textContent = 'Loading';
      document.getElementById('probability_two').textContent = '...';
      document.getElementById('category_three').textContent = 'Loading';
      document.getElementById('probability_three').textContent = '...';
  document.getElementById('prediction_table').style.display = 'none';
});

predict.addEventListener('click', function(){
  // Load the model.
  mobilenet.load().then(model => {
    // Classify the image.
    model.classify(img).then(predictions => {
      document.getElementById('category_one').textContent = predictions[0].className;
      document.getElementById('probability_one').textContent = predictions[0].probability;
      document.getElementById('category_two').textContent = predictions[1].className;
      document.getElementById('probability_two').textContent = predictions[1].probability;
      document.getElementById('category_three').textContent = predictions[2].className;
      document.getElementById('probability_three').textContent = predictions[2].probability;
      console.log(predictions);
    });
  });
  document.getElementById('prediction_table').style.display = 'block';
});