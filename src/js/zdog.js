import Zdog from "zzz";

const illo = new Zdog.Illustration({
    element: ".zdog-canvas",
    resize: true,
    dragRotate: true,
    zoom: 1 / 3
});

new Zdog.Ellipse({
    addTo: illo,
    diameter: 100,
    stroke: 40,
    color: "#E49",
});

illo.updateRenderGraph();

function animate() {
    illo.rotate.y += 0.03;
    illo.rotate.x += 0.03;
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
}

animate();
animate();