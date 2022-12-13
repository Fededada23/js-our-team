let dipendenti =[
    {
        nome:"Wayne",
        cognome:"Barnet",
        ruolo:"Founder & CEO",
        image:"./img/wayne-barnett-founder-ceo.jpg",
    },
    {
        nome:"Angela",
        cognome:"Carrol",
        ruolo:"Chief Editor",
        image:"./img/angela-caroll-chief-editor.jpg",  
    },
    {
        nome:"Walter",
        cognome:"Gordon",
        ruolo:"office manager",
        image:"./img/walter-gordon-office-manager.jpg",
    },
    {
        nome:"Angela",
        cognome:"Lopez",
        ruolo:"Social Media Manager",
        image:"./img/angela-lopez-social-media-manager.jpg",
    },
    {
        nome:"Scott",
        cognome:"Estrada",
        ruolo:"Developer",
        image:"./img/scott-estrada-developer.jpg",
    },
    {
        nome:"Barbara",
        cognome:"ramos",
        ruolo:"Graphic Designer",
        image:"./img/barbara-ramos-graphic-designer.jpg",
    }
]

const currentDiv=document.getElementById("container");

for(let i in dipendenti){
    console.log(dipendenti[i]);
    
    let newDiv=document.createElement('p');
    let img=document.createElement('img');
    img.src = dipendenti[i].image;
    newDiv.append(dipendenti[i].nome+' '+dipendenti[i].ruolo);
    currentDiv.append(newDiv);
    currentDiv.append(img);
}



