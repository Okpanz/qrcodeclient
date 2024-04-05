export function parseQrResult(result) {
    return [result.vehicleURL, result.vehiclePrice, result.VIN, result.stockNo, result.qrCodeId, result.vehicleName];
  }
