let user_score=0;
let comp_score=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user_score_para=document.querySelector("#user-score");
const comp_score_para=document.querySelector("#comp-score");

const gencompChoice=()=>
{
    const option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
}
const drawgame=()=>
{
    console.log("game was draw!!")
    msg.innerText="game was draw!! play again";
    msg.style.backgroundColor="#081b31";
}
const showwinner=(userwin,userChoice,compChoice)=>
{

    if(userwin)
    {
        user_score++;
        user_score_para.innerText=user_score;
        msg.innerText=`you win!! your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor="green";
    }
    else{
        comp_score++;
        comp_score_para.innerText=comp_score; 
        msg.innerText=`you lose!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playgame =(userChoice)=>
{
    console.log("user choice= ",userChoice);
    const compChoice=gencompChoice();
    console.log("comp choice= ",compChoice);
    if(userChoice===compChoice)
    {
        drawgame();
    }
    else{
        let userwin=true;
        if(userChoice==="rock")
            {userwin=compChoice==="paper"? false:true;}
        else if( userChoice==="paper")
        {
            userwin=compChoice==="scissors"? false:true;
        }
        else{
            userwin=compChoice==="rock" ? false:true;
        }
        showwinner(userwin,userChoice,compChoice);
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        
        playgame(userChoice);
    });
});