using QRCoder;
using SkiaSharp;
using System;

namespace QrCoderApi.Services
{
    public class QrCodeService
    {
        public string GenerateQrCodePngBase64(string url)
        {
            using var qrGenerator = new QRCodeGenerator();
            var qrData = qrGenerator.CreateQrCode(url, QRCodeGenerator.ECCLevel.Q);

            var codeMatrix = qrData.ModuleMatrix;
            int moduleCount = codeMatrix.Count;
            int pixelsPerModule = 10;
            int size = moduleCount * pixelsPerModule;

            using var bitmap = new SKBitmap(size, size);
            using var canvas = new SKCanvas(bitmap);
            canvas.Clear(SKColors.White);

            using var paint = new SKPaint
            {
                Color = SKColors.Black,
                Style = SKPaintStyle.Fill
            };

            for (int y = 0; y < moduleCount; y++)
            {
                for (int x = 0; x < moduleCount; x++)
                {
                    if (codeMatrix[y][x])
                    {
                        canvas.DrawRect(x * pixelsPerModule, y * pixelsPerModule, pixelsPerModule, pixelsPerModule, paint);
                    }
                }
            }

            using var image = SKImage.FromBitmap(bitmap);
            using var data = image.Encode(SKEncodedImageFormat.Png, 100);
            var base64 = Convert.ToBase64String(data.ToArray());

            return $"data:image/png;base64,{base64}";
        }
    }
}
