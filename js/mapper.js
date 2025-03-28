//get clicked position
function getPosition() {
    const a = viewer.raycaster.intersectObject(viewer.panorama, true)[0].point;
    return a;
};

//list of all info spots on panorama1
var infospotsall = infospots;

function isHovering() {
    // Recorremos todos los infospots
    for (let i = 0; i < infospots.length; i++) {
        // Si el infospot está siendo sobrevolado (hovering)
        if (infospots[i].isHovering) {
            return true;  // Retornamos true si al menos uno está siendo sobrevolado
        }
    }
    return false;  // Retornamos false si ninguno está siendo sobrevolado
}

//nombre de la panoramica 
panorama.addEventListener('click', function(event) {

    let clickedPos = getPosition();
    let value = Object.values(clickedPos);
    let x = value[0];
    let y = value[1];
    let z = value[2];

    x = parseInt(Math.floor(x / 10));
    y = parseInt(Math.floor(y / 10));
    z = parseInt(Math.floor(z / 10));

    alert("(" + x + " ," + y + " , " + z + ")")

});