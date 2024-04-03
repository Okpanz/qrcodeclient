/**
 * Parses the QR code result and extracts relevant information.
 *
 * @param {Object} result - The QR code result object.
 * @returns {Array} An array containing the following elements:
 *   - {string} vehicleURL: The URL of the vehicle.
 *   - {number} vehiclePrice: The price of the vehicle.
 *   - {string} VIN: The Vehicle Identification Number.
 *   - {string} stockNo: The stock number of the vehicle.
 */
export function parseQrResult(result) {
  return [result.vehicleURL, result.vehiclePrice, result.VIN, result.stockNo];
}
