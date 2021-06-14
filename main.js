var canvas = new fabric.canvas('myCanvas');

block_width=30;
block_height=30;

player_x=10;
player_y=10;

var player_object="";
var block_image="";

function player_update()
{
    frabric.Image.fromURL("player.png", function(Img){
        player_object=Img;

        player_object.scaletoWidth(150);
        player_object.scaletoHeight(150);
        player_objectset({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object=Img;

        block_image_object.scaletoWidth(block_image_width);
        block_image_object.scaletoHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(block_image_object);
    })
}