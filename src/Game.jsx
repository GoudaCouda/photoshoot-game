import { useEffect, useState } from "react";
import Sprite from "./Sprite.jsx";


function Game(){
    const [round,setRound] = useState(1)
    const [imagePos,setImagePos] = useState(0)
    const [score,setScore] = useState(0)
    const animalList = ["ant","badger","beetle","bison"]
    const [animal,setAnimal] = useState("ant")


    useEffect (() => {
        const interval = setInterval(() => {               
            setImagePos((prev) => {
                if ( prev <= window.innerWidth){
                    return prev + 5
                } else{
                    setRound((r) => r+1)
                    setAnimal(animalList[Math.floor(Math.random() * 3) + 1])
                    return -100;
                }
                    
            });
        },40);

        return () => clearInterval(interval);
        }, []);

    function playCameraSound(){
        const sound = new Audio('/camera_shutter.mp3')
        sound.currentTime = 1.75;
        sound.play()
    }
    
    
    function TakePicture(){
        setScore(score + 1)
    }  

    return (

    <>
    <div onClick={playCameraSound} style={{ minHeight: "100vh", width: "100vw" }}>
        <h1>Score {score}</h1>
        <h3> Round {round}</h3>
        <Sprite animalType = {animal}   takePicture={TakePicture}  x = {imagePos}/>
    </div>
    </>

)
}
export default Game