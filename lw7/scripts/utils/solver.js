const EQN_EPS = 1e-9;

function isZero(x) {
    return ((x) > -EQN_EPS && (x) < EQN_EPS);
}

export function solve2(c) {
    let p = c[1] / (2 * c[2]);
    let q = c[0] / c[2];

    let D = p * p - q;

    if (isZero(D)) {
        return [-p];
    }
    else if (D < 0) {
        return [];
    }
    else {
        let sqrt_D = Math.sqrt(D);

        return [sqrt_D - p, -sqrt_D - p];
    }
}

export function solve3(c) {

    let A = c[2] / c[3];
    let B = c[1] / c[3];
    let C = c[0] / c[3];

    let sq_A = A * A;
    let p = 1.0 / 3 * (- 1.0 / 3 * sq_A + B);
    let q = 1.0 / 2 * (2.0 / 27 * A * sq_A - 1.0 / 3 * A * B + C);

    let cb_p = p * p * p;
    let D = q * q + cb_p;

    let s = null;

    if (isZero(D)) {
        if (isZero(q)) {
            s = [0];
        }
        else {
            let u = Math.cbrt(-q);
            s = [2 * u, -u];
        }
    }
    else if (D < 0) {
        let phi = 1.0 / 3 * Math.acos(-q / Math.sqrt(-cb_p));
        let t = 2 * Math.sqrt(-p);

        s = [t * Math.cos(phi),
            -t * Math.cos(phi + Math.PI / 3),
            -t * Math.cos(phi - Math.PI / 3)];

    }
    else {
        let sqrt_D = Math.sqrt(D);
        let u = Math.cbrt(sqrt_D - q);
        let v = - Math.cbrt(sqrt_D + q);

        s = [u + v];

    }

    let sub = 1.0 / 3 * A;

    for (let i = 0; i < s.length; ++i)
        s[i] -= sub;

    return s;
}

export function solve4(c) {
    let A = c[3] / c[4];
    let B = c[2] / c[4];
    let C = c[1] / c[4];
    let D = c[0] / c[4];

    let sq_A = A * A;
    let p = - 3.0 / 8 * sq_A + B;
    let q = 1.0 / 8 * sq_A * A - 1.0 / 2 * A * B + C;
    let r = - 3.0 / 256 * sq_A * sq_A + 1.0 / 16 * sq_A * B - 1.0 / 4 * A * C + D;
    let s = null;

    if (isZero(r)) {
        s = solve3([q, p, 0, 1]);
        s.push(0);
    }
    else {
        let coeffs = [
            1.0 / 2 * r * p - 1.0 / 8 * q * q,
            - r,
            - 1.0 / 2 * p,
            1
        ];

        s = solve3(coeffs);

        let z = s[0];

        let u = z * z - r;
        let v = 2 * z - p;

        if (isZero(u))
            u = 0;
        else if (u > 0)
            u = Math.sqrt(u);
        else
            return 0;

        if (isZero(v))
            v = 0;
        else if (v > 0)
            v = Math.sqrt(v);
        else
            return 0;

        coeffs = [
            z - u,
            q < 0 ? -v : v,
            1
        ];

        s = solve2(coeffs);

        coeffs = [
            z + u,
            q < 0
                ? v
                : -v,
            1
        ];

        s = s.concat(solve2(coeffs));
    }
    let sub = 1.0 / 4 * A;

    for (let i = 0; i < s.length; ++i)
        s[i] -= sub;

    return s;
}
