function createHeartAnimation(canvasId) {
    const c = document.getElementById(canvasId);
    const a = c.getContext("2d");

    c.width = window.innerWidth / 2;
    c.height = window.innerHeight;

    let e = [];
    let h = [];
    let O = c.width;
    let Q = c.height;

    let v = 32;
    let M = Math;
    let R = M.random;
    let C = M.cos;
    let Y = 6.3; // Aproximación a 2π

    // Crear nodos de la forma de corazón
    for (let i = 0; i < Y; i += 0.2) {
        h.push([
            O / 2 + 180 * M.pow(M.sin(i), 3),
            Q / 2 + 10 * (-(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))),
        ]);
    }

    // Inicializar partículas
    for (let i = 0; i < v; i++) {
        let x = R() * O;
        let y = R() * Q;
        let H = (i / v) * 80 + 280;
        let S = R() * 40 + 60;
        let B = R() * 60 + 20;

        let f = [];
        for (let k = 0; k < v; k++) {
            f[k] = {
                x: x,
                y: y,
                X: 0,
                Y: 0,
                R: (1 - k / v) + 1,
                S: R() + 1,
                q: ~~(R() * v),
                D: i % 2 * 2 - 1,
                F: R() * 0.2 + 0.7,
                f: `hsla(${~~H},${~~S}%,${~~B}%,.1)`,
            };
        }

        e.push(f);
    }

    function render(_) {
        a.fillStyle = _.f;
        a.beginPath();
        a.arc(_.x, _.y, _.R, 0, Y, 1);
        a.closePath();
        a.fill();
    }

    function loop() {
        a.fillStyle = "rgba(0,0,0,.2)";
        a.fillRect(0, 0, O, Q);

        for (let i = 0; i < v; i++) {
            let f = e[i];
            let u = f[0];
            let q = h[u.q];
            let D = u.x - q[0];
            let E = u.y - q[1];
            let G = M.sqrt(D * D + E * E);

            if (G < 10) {
                if (R() > 0.95) {
                    u.q = ~~(R() * v);
                } else {
                    if (R() > 0.99) u.D *= -1;
                    u.q += u.D;
                    u.q %= v;
                    if (u.q < 0) u.q += v;
                }
            }

            u.X += (-D / G) * u.S;
            u.Y += (-E / G) * u.S;

            u.x += u.X;
            u.y += u.Y;

            render(u);

            u.X *= u.F;
            u.Y *= u.F;

            for (let k = 0; k < v - 1; k++) {
                let T = f[k];
                let N = f[k + 1];

                N.x -= (N.x - T.x) * 0.7;
                N.y -= (N.y - T.y) * 0.7;

                render(N);
            }
        }

        requestAnimationFrame(loop);
    }

    loop();
}

createHeartAnimation("canvas-left");
createHeartAnimation("canvas-right");
