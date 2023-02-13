const inpRang = document.getElementById('font-size-control');

function fontSize() {
    let size = inpRang.value;
    document.getElementById('text').style.fontSize = `${size}px`;
}

inpRang.addEventListener("input", fontSize);

