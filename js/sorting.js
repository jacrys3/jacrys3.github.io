let array = [];
let length = 100;
let heightArray = [];
var speed = 2;


function updateHeights()
{
    for(let i = 0; i < length; i++)
    {
        array[i].style.height = heightArray[i] + "px";
    }
}

function bubbleSort()
{
    var swapped = false;

    function bubbleSortPass(i)
    {
        if(heightArray[i] > heightArray[i + 1])
        {
            swap(i, i + 1);
            swapped = true;
        }
        updateHeights();

        if(i < length)
        {
            setTimeout(function(){
                bubbleSortPass(i + 1);
            }, speed);
        }
        else
        {
            if(swapped){
                setTimeout(function(){
                    bubbleSort();
                }, speed);
            }
        }
    }

    bubbleSortPass(0);
}

function swap(a, b)
{
    var temp = heightArray[a];
    heightArray[a] = heightArray[b];
    heightArray[b] = temp;
}

class BlockElement extends HTMLDivElement
{
    constructor(height)
    {
        super();
    }
};

customElements.define('block-element', BlockElement, { extends: 'div' })

function createBoxes()
{
    if(array.length > 0)
    {
        for(let i = 0; i < array.length; i++)
        {
            array[i].remove();
        }
    }
    for(let i = 0; i < length; i++)
    {
        const block = document.createElement('div', {is: 'block-element'});
        block.className = "box";
        

        const container = document.getElementById("border");
        container.appendChild(block);
        array[i] = block;
    }
    generateRandomHeights();
    updateHeights();
}

function generateRandomHeights()
{
    for(let i = 0; i < length; i++)
    {
        heightArray[i] = Math.round(Math.random() * 500);
    }
}