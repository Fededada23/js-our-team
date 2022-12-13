let dipendenti =[
    {
        "nome":"Wayne",
        "cognome":"Barnet",
        "ruolo":"Founder & CEO",
        "image":"Wayne-Barnet-Founder.jpeg",
    },
    {
        "nome":"Angela",
        "cognome":"Carrol",
        "ruolo":"Chief Editor",
        "image":"angela-carrol-chief.jpeg",  
    },
    {
        "nome":"Walter",
        "cognome":"Gordon",
        "ruolo":"office manager",
        "image":"walter-gordon-office.jpeg",
    },
    {
        "nome":"Angela",
        "cognome":"Lopez",
        "ruolo":"Social Media Manager",
        "image":"Angela-lopez-social.jpeg",
    },
    {
        "nome":"Scott",
        "cognome":"Estrada",
        "ruolo":"Developer",
        "image":"Scott-estrada-developer.jpeg",
    },
    {
        "nome":"Barbara",
        "cognome":"ramos",
        "ruolo":"Graphic Designer",
        "image":"barbara-ramos-graphic.jpeg",
    }
]

for(let key in dipendenti){
    console.log(dipendenti[key])
}