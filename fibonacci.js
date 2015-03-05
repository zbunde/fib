function startCanvas(){

/// initialize canvas and set square size

  var  canvas = document.getElementById('fib');
      c = canvas.getContext("2d");
      SQUARE_SIZE = canvas.height / 200;
      // $('#fib').css('background-color', 'rgba(158, 167, 184, 0.2)');

      /// call function to draw the canvas
      draw();
}

  // $(function(){
  //   init();
  // });

/// main canvas drawing function
function draw() {
  for(rowNumber = 0; rowNumber < 14; rowNumber++)
      {
        /// need to set rowLength to the fib(rowNumber) to make the row the right length
        rowLength = fib(rowNumber);
        // generate random color for the row
        color = randomColor();
        drawRow(rowNumber, rowLength, color);
      }
}

/// drawing a row(number, length, color)

function drawRow(rowNumber, rowLength, color){
  for(blockCount = 0; blockCount < rowLength; blockCount++)
        {
          drawBlock(rowNumber, blockCount, color)
        }
}

/// drawing each individual block. takes a row number, a blockCount

function drawBlock(rowCount, blockCount, color){
  c.fillStyle = color
  c.fillRect(rowCount * SQUARE_SIZE, blockCount * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
}



//// probably shitty fib function for building rowLength

function fib(n) {
  return function(n,a,b) {
      return n>0 ? arguments.callee(n-1,b,a+b) : a;
    }(n,0,1);
}

function randomColor(){
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
