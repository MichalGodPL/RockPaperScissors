let GlobalnyWynikGracza = 0;

let GlobalnyWyborGracza;

let GlobalnyWyborKomputera;


function WyborKomputera(){
    
    let WyborKomputera;

    WyborKomputera = Math.floor(Math.random()*3)+1;

    GlobalnyWyborKomputera = WyborKomputera;

}

function WyborGracza(){
    
    let WyborGracza;

    WyborGracza = Math.floor(Math.random()*3)+1;

    GlobalnyWyborGracza = WyborGracza;

}

function SprawdzanieWyniku(WyborGracza, WyborKomputera){

    if(WyborGracza === 1 && WyborKomputera === 1){

        alert('Remis');

    }

    else if(WyborGracza === 1 && WyborKomputera === 2){

        alert('Przegrałeś');

        GlobalnyWynikGracza--;

    }

    else if(WyborGracza === 1 && WyborKomputera === 3){

        alert('Wygrałeś');

        GlobalnyWynikGracza++;

    }

    else if(WyborGracza === 2 && WyborKomputera === 1){

        alert('Wygrałeś');

        GlobalnyWynikGracza++;

    }

    else if(WyborGracza === 2 && WyborKomputera === 2){

        alert('Remis');

    }

    else if(WyborGracza === 2 && WyborKomputera === 3){

        alert('Przegrałeś');

        GlobalnyWynikGracza--;

    }

    else if(WyborGracza === 3 && WyborKomputera === 1){

        alert('Przegrałeś');

        GlobalnyWynikGracza--;

    }

    else if(WyborGracza === 3 && WyborKomputera === 2){

        alert('Wygrałeś');

        GlobalnyWynikGracza++;

    }

    else if(WyborGracza === 3 && WyborKomputera === 3){

        alert('Remis');

    }

   alert(GlobalnyWynikGracza);

}

WyborKomputera();

WyborGracza();

SprawdzanieWyniku(GlobalnyWyborGracza, GlobalnyWyborKomputera);
