export default class DirectionalLight {
    constructor(lightDirection, lightColor) {
        this.lightDirection = lightDirection.norm();
        this.toLightSourceDirection = this.lightDirection.reverse();

        this.lightColor = lightColor;
    }

    lightPoint(normal, ray, objectColor) {
        const diffuse = this._diffuseContribution(normal, objectColor);
        const specular = this._specularContribution(normal, ray);
        
        return diffuse.plus(specular);
    }

    _diffuseContribution(normal, objectColor) {
        const contrib = Math.max(normal.dot(this.toLightSourceDirection), 0);

        return this.lightColor
            .multiply(objectColor)
            .scale(contrib);
    }

    _specularContribution(normal, ray) {
        const incomingDotNormal = this.toLightSourceDirection.dot(normal);

        const reflected = this.lightDirection.plus(normal.scale(incomingDotNormal * 2.0));

        const rDotOutgoing = reflected.dot(ray.direction.reverse().norm());
        
        const contribSpecular = rDotOutgoing > 0.0
            ? Math.pow(rDotOutgoing, 30.0)
            : 0.0;

        return this.lightColor.scale(contribSpecular);
    }
}