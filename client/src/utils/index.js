
const earthRadius = 6371;
const greatCircleDistance = angle => 2 * Math.PI * earthRadius * (angle / 360);

const degreesToRadians = degrees => degrees * (Math.PI / 180);
const radiansToDegrees = radians => radians * (180 / Math.PI);

const centralSubtendedAngle = (locationX, locationY) => {
    const locationXLatRadians = degreesToRadians(locationX.latitude);
    const locationYLatRadians = degreesToRadians(locationY.latitude);

    return radiansToDegrees(
        Math.acos(
            Math.sin(locationXLatRadians) * Math.sin(locationYLatRadians) +
            Math.cos(locationXLatRadians) *
                Math.cos(locationYLatRadians) *
                Math.cos(
                degreesToRadians(
                    Math.abs(locationX.longitude - locationY.longitude)
                )
            )
        )
    )
  }

export const distanceBetweenLocations = (locationX, locationY) =>
  greatCircleDistance(centralSubtendedAngle(locationX, locationY));