"""Generate public/img/og-800x400.png from opening.png (cover crop, LANCZOS)."""
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
src = ROOT / "public" / "img" / "opening.png"
out = ROOT / "public" / "img" / "og-800x400.png"

im = Image.open(src)
if im.mode not in ("RGB", "RGBA"):
    im = im.convert("RGBA")
fitted = ImageOps.fit(im, (800, 400), method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))
fitted.save(out, "PNG", optimize=True)
print(out.relative_to(ROOT), fitted.size)
