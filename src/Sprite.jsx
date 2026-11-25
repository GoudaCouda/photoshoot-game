
function Sprite(props){
    const animalType = []
    let spriteIndex = 1
    let frame_pos = 0

    frame_pos = props.x % 80
    if (frame_pos < 20){
        spriteIndex = 1
    }
    else if (frame_pos < 40){
        spriteIndex =2
    }
    else if (frame_pos < 60){
        spriteIndex =3
    }
    else if (frame_pos < 80){
        spriteIndex =4
    }
    return(
    <>
        <img src={`/${props.animalType}/walk-side-0${spriteIndex}.png`} style={{ left: `${props.x}px`}} onClick={props.takePicture}/>
    </>

)

}

export default Sprite