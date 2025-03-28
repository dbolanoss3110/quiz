// Global variables
// This variable holds the path to the panorama image
const panoramaImagePath = '/img/2.jpg'; 
const viewerContainer = document.querySelector('#panorama-container');

// Create the panorama object
const panorama = new PANOLENS.ImagePanorama(panoramaImagePath);


const viewer = new PANOLENS.Viewer({
    container: viewerContainer
});


function createInfospot(position, iconType, hoverText, infoText) {
    const infospot = new PANOLENS.Infospot(50, PANOLENS.DataImage[iconType]);
    infospot.position.set(...position);
    infospot.addHoverText(hoverText, -10);
    infospot.element.innerHTML = `
        <div style="
            background-color: rgb(216, 156, 17); 
            color: #fff; 
            border-radius: 5px; 
            padding: 10px; 
            font-size: 16px; 
            width: 190px;">
            ${infoText}
        </div>`;
    return infospot;
}


const infospots = [
    createInfospot(
      [500, 226, 51],
      'Arrow',
      'Visite la panoramica #1',
      'Faro: Un histórico punto de referencia que ofrece vistas al litoral y hermosos atardeceres'
    ),
    createInfospot(
      [500, 218, -294],
      'Info',
      'Visite la panoramica #2',
      'Mirador: Un balcón natural desde donde admirar el paisaje del valle'
    ),
    createInfospot(
      [-500, -140, -394],
      'Info',
      'Visite la panoramica #3',
      'Ciudad: Zona urbana llena de historia y actividad cultural'
    ),
    createInfospot(
      [-500, 27, 113],
      'Arrow',
      'Visite la panoramica #4',
      'Cordillera: Cadena montañosa imponente que se extiende por kilómetros'
    ),
    createInfospot(
      [300, 100, -100],
      'Arrow',
      'Visite la panoramica #5',
      'Camino a la cima: Ruta escénica que conduce a vistas panorámicas desde lo alto'
    ),
    createInfospot(
      [150, -50, -250],
      'Info',
      'Visite la panoramica #6',
      'Montañas: Macizo montañoso con hermosos senderos naturales'
    ),
    createInfospot(
      [-417, 500, -476],
      'Arrow',
      'Visite la panoramica #7',
      'Nubes: Un punto elevado para observar el cielo y sus formaciones nubosas'
    ),
    createInfospot(
      [400, -200, 100],
      'Info',
      'Visite la panoramica #8',
      'Picnic: Área ideal para compartir un momento al aire libre con amigos o familia'
    ),
    createInfospot(
      [45, 352, -500],
      'Arrow',
      'Visite la panoramica #9',
      'Sol: El mejor lugar para contemplar amaneceres y atardeceres espectaculares'
    ),
    createInfospot(
      [-500, -173, -497],
      'Info',
      'Visite la panoramica #10',
      'Carretera: Vía panorámica que recorre diversos paisajes y conecta varios destinos'
    ),
];


infospots.push(
    createInfospot(
        [-285 ,78 , -500],
        'Mira el paisaje y relajate',
        'Ver video de YouTube',
        `
            <p style="margin: 0; font-weight: bold;">Mira nuestro video:</p>
            <iframe 
                width="230" 
                height="129" 
                src="https://www.youtube.com/embed/mXpLHdYhMKA" 
                title="YouTube video" 
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `
    )
);


infospots.forEach((infospot) => panorama.add(infospot));

function setupInfospotTransitions() {
    infospots.forEach((infospot, index) => {
        const nextIndex = (index + 1) % infospots.length; // Creates a circular sequence
        infospot.addEventListener('click', () => viewer.tweenControlCenter(infospots[nextIndex].position));
    });
}


setupInfospotTransitions();

viewer.add(panorama);
