using Microsoft.AspNetCore.Mvc;
using QrCoderApi.DTOs;
using QrCoderApi.Services;

namespace QrCoderApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QrCodeController : ControllerBase
    {
        private readonly QrCodeService _qrCodeService;

        public QrCodeController(QrCodeService qrCodeService)
        {
            _qrCodeService = qrCodeService;
        }

        [HttpPost("generate")]
        public IActionResult GenerateQrCode([FromBody] LinkRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Url))
            {
                return BadRequest("URL é obrigatória.");
            }

            var pngBase64 = _qrCodeService.GenerateQrCodePngBase64(request.Url);
            return Ok(new { qrCode = pngBase64 });

        }
    }
}
