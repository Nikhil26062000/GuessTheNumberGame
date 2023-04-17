const init = () => {
    document.getElementById('game-Area').style.display = 'none';
}

const easyButton = () => {
    document.getElementById('intro-view').style.display="none";
    document.getElementById('btn-new-game').style.display="none";
    // document.getElementById('desc').style.display="none";

    document.getElementById('game-Area').style.display="grid";
}