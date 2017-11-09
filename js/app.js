var container = document.querySelector('.tictactoe');

container.addEventListener('click', onCellClick);
function onCellClick(event){
    var target = event.target;
    var dataset = target.dataset;
    //console.log(dataset) 
    //console.log('target', target);
    if(dataset && dataset.row){
        console.log('pos', dataset.row, data.column);
    }
}
function tictactoe(){
    this.player = 'X'
    this.matrix = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
}
tictactoe.prototype.intput = function(row, column){
    this.setValue(row, column);
    this.togglePlayer();
   
};

tictactoe.prototype.output = function(row, column){
    return this.matrix;
    matrix[row][column]= this.player;
};


function reset(){
    //console.log('reset')
    var game = new tictactoe();
    render(game.output());
}

function render(matrix){
    var value = matrix.reduce(function(array, row, rowIndex){
        return array.concat(row.map(function(cell,cellIndex){
            return{
                value: cell,
                id: 'cell-'+ rowIndex + '-' + cellIndex
            };
        }));
    },[]);
    console.log(value);
    value.forEach(function(cell){
        var cellElement = document.getElementById(cell,id);
        cellElement.innerHTML = cell.value !== null ? cell.value : '';
    });
}
reset();