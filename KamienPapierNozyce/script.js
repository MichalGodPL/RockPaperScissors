let GlobalnyWynikGracza = 0;

let GlobalnyWyborGracza;

let GlobalnyWyborKomputera;


const Przycisk_Kamien = document.querySelector('.Przycisk-1');

const Przycisk_Papier = document.querySelector('.Przycisk-2');

const Przycisk_Nozyce = document.querySelector('.Przycisk-3');


Przycisk_Kamien.addEventListener('click', function(){

    WyborGracza(1);

    WyborKomputera();

    SprawdzanieWyniku(GlobalnyWyborGracza, GlobalnyWyborKomputera);

});


Przycisk_Papier.addEventListener('click', function(){

    WyborGracza(2);

    WyborKomputera();

    SprawdzanieWyniku(GlobalnyWyborGracza, GlobalnyWyborKomputera);

});


Przycisk_Nozyce.addEventListener('click', function(){

    WyborGracza(3);

    WyborKomputera();

    SprawdzanieWyniku(GlobalnyWyborGracza, GlobalnyWyborKomputera);

});


function WyborKomputera(){

    let WyborKomputera = Math.floor(Math.random()*3)+1;

    GlobalnyWyborKomputera = WyborKomputera;

    zmienNapisKomputer();

}


function WyborGracza(Wybor){

    GlobalnyWyborGracza = Wybor;

    zmienNapisGracz();

}



function SprawdzanieWyniku(WyborGracza, WyborKomputera){

    if(WyborGracza === 1 && WyborKomputera === 1){

    }

    else if(WyborGracza === 1 && WyborKomputera === 2){

        GlobalnyWynikGracza--;

    }

    else if(WyborGracza === 1 && WyborKomputera === 3){

        GlobalnyWynikGracza++;

    }

    else if(WyborGracza === 2 && WyborKomputera === 1){

        GlobalnyWynikGracza++;

    }

    else if(WyborGracza === 2 && WyborKomputera === 2){

    }

    else if(WyborGracza === 2 && WyborKomputera === 3){


        GlobalnyWynikGracza--;

    }

    else if(WyborGracza === 3 && WyborKomputera === 1){


        GlobalnyWynikGracza--;

    }

    else if(WyborGracza === 3 && WyborKomputera === 2){


        GlobalnyWynikGracza++;

    }

    else if(WyborGracza === 3 && WyborKomputera === 3){


    }

    aktualizujWynik();

}


function aktualizujWynik() {

    const wynikKontener = document.querySelector('.Wynik-Kontener h1');

    wynikKontener.textContent = GlobalnyWynikGracza;
    
}


function zmienNapisGracz(){

    document.querySelector('.Pytajnik-2').style.fontSize = '4.3em';

    document.querySelector('.Pytajnik-2').style.color = '#003049';

    document.querySelector('.Pytajnik-2').style.position = 'center';

    if(GlobalnyWyborGracza === 1){

        document.querySelector('.Pytajnik-2').textContent = 'Kamień';

    }

    else if(GlobalnyWyborGracza === 2){

        document.querySelector('.Pytajnik-2').textContent = 'Papier';

    }

    else if(GlobalnyWyborGracza === 3){

        document.querySelector('.Pytajnik-2').textContent = 'Nożyce';

    }

}

function zmienNapisKomputer(){

    document.querySelector('.Pytajnik-1').style.fontSize = '4.3em';

    document.querySelector('.Pytajnik-1').style.color = '#c1121f';

    document.querySelector('.Pytajnik-1').style.position = 'center';

    if(GlobalnyWyborKomputera === 1){

        document.querySelector('.Pytajnik-1').textContent = 'Kamień';

    }
    
        else if(GlobalnyWyborKomputera === 2){
    
            document.querySelector('.Pytajnik-1').textContent = 'Papier';
    
        }
    
        else if(GlobalnyWyborKomputera === 3){
    
            document.querySelector('.Pytajnik-1').textContent = 'Nożyce';
    
        }

}